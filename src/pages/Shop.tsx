
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InstagramFeedCard from '@/components/InstagramFeedCard';
import Cart from '@/components/Cart';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  deliveryCharge: number;
  productName: string;
  tags: string[];
  inStock: boolean;
}

const Shop = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    // Check if user is admin
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    setIsAdmin(adminLoggedIn === 'true');
    
    // Update cart count
    updateCartCount();
  }, []);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('j90_cart') || '[]');
    const totalItems = cart.reduce((total: number, item: any) => total + item.quantity, 0);
    setCartItemsCount(totalItems);
  };

  const { data: posts = [], isLoading, error, refetch } = useQuery({
    queryKey: ['instagram-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('instagram_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      
      // Transform the data to match our interface
      return data.map(post => ({
        id: post.id,
        images: post.images,
        caption: post.caption,
        price: post.price,
        deliveryCharge: post.delivery_charge,
        productName: post.product_name,
        tags: post.tags || [],
        inStock: post.in_stock
      }));
    }
  });

  const handleStockToggle = async (postId: string, currentStock: boolean) => {
    if (!isAdmin) return;
    
    try {
      const { error } = await supabase
        .from('instagram_posts')
        .update({ in_stock: !currentStock })
        .eq('id', postId);
      
      if (error) throw error;
      
      // Refetch posts to update the UI
      refetch();
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  const handleAddToCart = (post: InstagramPost) => {
    if (!post.inStock) return;
    
    const existingCart = JSON.parse(localStorage.getItem('j90_cart') || '[]');
    const existingItem = existingCart.find((item: any) => item.id === post.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ 
        id: post.id,
        name: post.productName,
        price: post.price + post.deliveryCharge,
        quantity: 1,
        image: post.images[0]
      });
    }
    
    localStorage.setItem('j90_cart', JSON.stringify(existingCart));
    updateCartCount();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="text-luxury-gold font-orbitron text-2xl">Loading posts...</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="text-red-400 font-orbitron text-2xl">Error loading posts</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      {/* Cart Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={() => setIsCartOpen(true)}
          className="bg-luxury-gold hover:bg-luxury-champagne text-black font-bold p-3 rounded-full shadow-lg"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black luxury-text mb-3 sm:mb-4 md:mb-6 animate-gold-shimmer tracking-[0.05em] uppercase">
              J90 KITS SHOP
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-luxury-champagne/90 mb-4 sm:mb-6 font-inter font-light tracking-[0.1em] uppercase">
              Premium Football Jerseys Collection
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-10 w-10 text-luxury-gold" />
                </div>
                <h3 className="text-luxury-gold font-orbitron text-2xl font-bold mb-2">
                  No Products Yet
                </h3>
                <p className="text-luxury-champagne/70 font-inter mb-6">
                  New products will be added to the shop soon. Stay tuned for amazing deals!
                </p>
              </div>
            ) : (
              <>
                {/* Mobile Layout - Vertical Stack */}
                <div className="block md:hidden">
                  <div className="grid gap-8">
                    {posts.map((post) => (
                      <InstagramFeedCard 
                        key={post.id} 
                        post={post} 
                        isAdmin={isAdmin}
                        onStockToggle={handleStockToggle}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop Layout - Horizontal Grid */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => (
                      <InstagramFeedCard 
                        key={post.id} 
                        post={post} 
                        isAdmin={isAdmin}
                        onStockToggle={handleStockToggle}
                        onAddToCart={handleAddToCart}
                        isDesktop={true}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Cart Modal */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => {
          setIsCartOpen(false);
          updateCartCount();
        }} 
      />
    </div>
  );
};

export default Shop;
