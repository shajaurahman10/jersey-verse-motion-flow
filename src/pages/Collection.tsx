
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import HotDealsSection from '@/components/HotDealsSection';
import { Loader2 } from 'lucide-react';

const Collection = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Fetching products from Supabase...');
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            image_url,
            alt_text,
            is_primary,
            sort_order
          ),
          categories (
            name
          )
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
      
      console.log('Products fetched:', data);
      console.log('Number of products:', data?.length || 0);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ParticleBackground />
        <Navigation />
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-luxury-gold" />
          <p className="text-luxury-champagne text-xl font-inter">Loading premium jerseys...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.error('Collection page error:', error);
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Collection
            </h1>
            <p className="text-2xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
              Premium Football Jerseys
            </p>
          </div>

          {/* Hot Deals Section */}
          <HotDealsSection />
          
          {/* Jersey Wardrobe Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-6xl font-black luxury-text mb-4 animate-gold-shimmer tracking-[0.05em] uppercase">
                Premium Wardrobe
              </h2>
              <p className="text-luxury-champagne/90 text-lg font-inter font-light tracking-[0.2em] uppercase">
                Iconic Jerseys Collection
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
              {[
                { id: 1, image: "/lovable-uploads/7b7af6ff-2249-44b0-b31f-13b082926b07.png", name: "Manchester United" },
                { id: 2, image: "/lovable-uploads/b37476fc-3252-42b8-8a6a-23beb72e6a1d.png", name: "Arsenal Away" },
                { id: 3, image: "/lovable-uploads/f7cd6e41-397e-49d2-8879-470e0004ff7a.png", name: "Manchester United Retro" },
                { id: 4, image: "/lovable-uploads/dabb59d7-6d84-472d-a249-2ea06e4e6030.png", name: "Real Madrid" },
                { id: 5, image: "/lovable-uploads/dffcfe38-17b3-46b9-9694-1995b0e4688d.png", name: "Barcelona Classic" },
                { id: 6, image: "/lovable-uploads/ec04093d-d2d2-4ab8-a3cf-34836006e8c5.png", name: "Messi Jersey" }
              ].map((jersey) => (
                <div key={jersey.id} className="premium-glass gold-border rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group">
                  <div className="relative">
                    <img 
                      src={jersey.image} 
                      alt={jersey.name}
                      className="w-full h-48 object-contain bg-gradient-to-b from-transparent to-black/10 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-luxury-gold font-bold text-sm font-inter uppercase tracking-wider text-center">
                      {jersey.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Product Grid */}
          {products && products.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-luxury-champagne/80 text-lg font-inter">
                  Showing {products.length} premium jerseys
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="premium-glass gold-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-luxury-gold mb-4 font-inter">No Products Found</h2>
                <p className="text-luxury-champagne/80 text-lg font-inter leading-relaxed">
                  Our premium jersey collection is being updated. Please check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collection;
