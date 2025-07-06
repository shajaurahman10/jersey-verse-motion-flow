
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InstagramFeedCard from '@/components/InstagramFeedCard';
import { ShoppingBag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  deliveryCharge: number;
  productName: string;
  tags: string[];
}

const Shop = () => {
  const { data: posts = [], isLoading, error } = useQuery({
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
        tags: post.tags || []
      }));
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
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
          <div className="max-w-4xl mx-auto px-8 text-center">
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
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
              <div className="grid gap-8">
                {posts.map((post) => (
                  <InstagramFeedCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
