
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
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
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Collection
            </h1>
            <div className="premium-glass gold-border rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-luxury-gold mb-4 font-inter">Unable to Load Products</h2>
              <p className="text-luxury-champagne/80 text-lg font-inter leading-relaxed">
                There was an error loading the jersey collection. Please try again later.
              </p>
            </div>
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
          
          {/* Product Grid */}
          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div className="premium-glass gold-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-luxury-gold mb-4 font-inter">No Products Available</h2>
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
