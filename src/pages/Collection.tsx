
import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import HotDealsSection from '@/components/HotDealsSection';

const Collection = () => {
  // Mock products data based on your specifications
  const mockProducts = [
    {
      id: "real-madrid-away-2025",
      name: "Real Madrid Away Kit for 2025/26 Season",
      price: 382,
      compare_at_price: 420,
      brand: "Real Madrid",
      team: "Real Madrid",
      season: "2025/26",
      description: "Get ready to rep the Whites! ⚪️🔵 Real Madrid's 2025/26 away kit is now available! 🔥 Made from premium dotnet material with stunning sublimation quality, this jersey features intricate details that'll make you feel like a part of the Santiago Bernabéu squad.",
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      product_images: [
        {
          image_url: "/lovable-uploads/dabb59d7-6d84-472d-a249-2ea06e4e6030.png",
          alt_text: "Real Madrid Away Kit",
          is_primary: true,
          sort_order: 1
        }
      ],
      categories: { name: "Football Jersey" }
    },
    {
      id: "frank-lampard-chelsea-retro",
      name: "Frank Lampard Chelsea Retro Jersey",
      price: 412,
      compare_at_price: 450,
      brand: "Chelsea",
      team: "Chelsea",
      season: "Retro",
      description: "Get ready to rep the Blues! 🔵⚪️ Frank Lampard's iconic Chelsea retro jersey is back in stock! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      product_images: [
        {
          image_url: "/lovable-uploads/dffcfe38-17b3-46b9-9694-1995b0e4688d.png",
          alt_text: "Frank Lampard Chelsea Retro",
          is_primary: true,
          sort_order: 1
        }
      ],
      categories: { name: "Retro Jersey" }
    },
    {
      id: "argentina-2014-world-cup",
      name: "Argentina 2014 World Cup Jersey",
      price: 422,
      brand: "Argentina",
      team: "Argentina",
      season: "2014 World Cup",
      description: "Relive the glory of Argentina's 2014 World Cup campaign! ⚽️ Get your hands on the iconic jersey, featuring intricate embroidery logo details on premium dotnet material.",
      features: ["EMBROIDERY LOGO", "DOTNET MATERIAL", "PREMIUM QUALITY"],
      product_images: [
        {
          image_url: "/lovable-uploads/a4fb7c1a-b5a8-48e0-a989-27e953aaab7a.png",
          alt_text: "Argentina 2014 World Cup",
          is_primary: true,
          sort_order: 1
        }
      ],
      categories: { name: "World Cup Jersey" }
    },
    {
      id: "messi-barca-retro",
      name: "Leo Messi Barca Retro Five Sleeve Jersey",
      price: 432,
      brand: "Barcelona",
      team: "Barcelona",
      season: "Retro",
      description: "Get ready to rep the GOAT! 🐐 Leo Messi's iconic Barcelona retro jersey is back in stock! 🔥 Made from premium dotnet material, this five-sleeve jersey features intricate details.",
      features: ["DOTNET MATERIAL", "PREMIUM QUALITY"],
      product_images: [
        {
          image_url: "/lovable-uploads/ec04093d-d2d2-4ab8-a3cf-34836006e8c5.png",
          alt_text: "Messi Barcelona Retro",
          is_primary: true,
          sort_order: 1
        }
      ],
      categories: { name: "Retro Jersey" }
    },
    {
      id: "cannavaro-real-madrid",
      name: "Cannavaro Retro Real Madrid Jersey",
      price: 432,
      brand: "Real Madrid",
      team: "Real Madrid",
      season: "Retro",
      description: "Get ready to rep the legendary Cannavaro's iconic Real Madrid jersey! Made from premium dotnet material, this jersey features intricate embroidery logo details.",
      features: ["EMBROIDERY LOGO", "DOTNET MATERIAL", "PREMIUM QUALITY"],
      product_images: [],
      categories: { name: "Retro Jersey" }
    },
    {
      id: "vlahovic-juventus",
      name: "Vlahovic New Season Juve Jersey",
      price: 432,
      brand: "Juventus",
      team: "Juventus",
      season: "New Season",
      description: "Get ready to rep the Old Lady! ⚫️⚪️ Dusan Vlahovic's new season Juventus jersey is now available! 🔥 Made from premium dotnet material with intricate embroidery logo details.",
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      product_images: [
        {
          image_url: "/lovable-uploads/7a8ec382-d90d-4c9b-a68e-4c09a0d923ba.png",
          alt_text: "Vlahovic Juventus",
          is_primary: true,
          sort_order: 1
        }
      ],
      categories: { name: "Football Jersey" }
    },
    {
      id: "arsenal-new-season",
      name: "Arsenal New Season Jersey",
      price: 422,
      brand: "Arsenal",
      team: "Arsenal",
      season: "New Season",
      description: "Get ready to rep the Gunners! 🔴⚪️ Arsenal's new season jersey is now available! 🔥 Made from premium quality dotnet material with intricate embroidery logo details.",
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      product_images: [
        {
          image_url: "/lovable-uploads/20dcd5e2-e9e2-4b3e-92b6-653bf0810bf9.png",
          alt_text: "Arsenal New Season",
          is_primary: true,
          sort_order: 1
        }
      ],
      categories: { name: "Football Jersey" }
    },
    {
      id: "totti-italy",
      name: "Totti Five Sleeve Jersey",
      price: 432,
      brand: "Italy",
      team: "Italy",
      season: "Classic",
      description: "Get your hands on the iconic Francesco Totti Italy jersey! 🇮🇹⚽️ Made from premium dotnet material with stunning sublimation quality.",
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      product_images: [],
      categories: { name: "National Team" }
    },
    {
      id: "travis-scott-barca",
      name: "Travis Scott Barca Five Sleeve Jersey",
      price: 442,
      brand: "Barcelona",
      team: "Barcelona",
      season: "Special Edition",
      description: "Get ready to rep Barcelona with Travis Scott's style! 🔵🟣 Travis Scott x Barca five-sleeve jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      product_images: [],
      categories: { name: "Special Edition" }
    },
    {
      id: "travis-scott-black",
      name: "Travis Scott Black Five Sleeve Jersey",
      price: 432,
      brand: "Travis Scott",
      team: "Special",
      season: "Limited",
      description: "Cop the Travis Scott vibe! 🔥 Travis Scott's black five-sleeve jersey is in stock! 💀 Made from premium dotnet material with stunning sublimation quality.",
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      product_images: [],
      categories: { name: "Special Edition" }
    },
    {
      id: "inter-miami-latest",
      name: "Inter Miami Latest Jersey",
      price: 372,
      brand: "Inter Miami",
      team: "Inter Miami",
      season: "Latest",
      description: "Get ready to rep Inter Miami in style! 🌴⚽️ Latest jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      product_images: [],
      categories: { name: "MLS Jersey" }
    }
  ];

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
          <div className="text-center mb-8">
            <p className="text-luxury-champagne/80 text-lg font-inter">
              Showing {mockProducts.length} premium jerseys
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collection;
