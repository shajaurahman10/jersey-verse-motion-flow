
import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Collection = () => {
  // Updated products data with your exact specifications
  const mockProducts = [
    {
      id: "real-madrid-away-2025",
      name: "Real Madrid Away Kit for 2025/26 Season",
      price: 382,
      compare_at_price: 424,
      brand: "Real Madrid",
      team: "Real Madrid",
      season: "2025/26",
      description: "Get ready to rep the Whites! ⚪️🔵 Real Madrid's 2025/26 away kit is now available! 🔥 Made from premium dotnet material with stunning sublimation quality, this jersey features intricate details that'll make you feel like a part of the Santiago Bernabéu squad. Get it for ₹340 (+ ₹42 courier charge) = ₹382. DM us to place your order now and show off your Madridista pride! 💛",
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      product_images: [],
      categories: { name: "Football Jersey" }
    },
    {
      id: "frank-lampard-chelsea-retro",
      name: "Frank Lampard Chelsea Retro Jersey",
      price: 412,
      compare_at_price: 454,
      brand: "Chelsea",
      team: "Chelsea",
      season: "Retro",
      description: "Get ready to rep the Blues! 🔵⚪️ Frank Lampard's iconic Chelsea retro jersey is back in stock! 🔥 Made from premium dotnet material with stunning sublimation quality, this jersey features intricate details that'll make you feel like a part of Stamford Bridge squad. We've got this fantastic piece sourced to perfection, ensuring you get the best quality at an unbeatable price. Get it for ₹370 (+ ₹42 courier charge) = ₹412. DM us to place your order now and show off your Chelsea pride! 💙",
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      product_images: [],
      categories: { name: "Retro Jersey" }
    },
    {
      id: "argentina-2014-world-cup",
      name: "Argentina 2014 World Cup Jersey",
      price: 422,
      brand: "Argentina",
      team: "Argentina",
      season: "2014 World Cup",
      description: "Relive the glory of Argentina's 2014 World Cup campaign! ⚽️ Get your hands on the iconic jersey, featuring intricate embroidery logo details on premium dotnet material. We've sourced this fantastic piece directly, ensuring you get the best quality at an unbeatable price. Get it for ₹380 (+ ₹42 courier charge). DM us to place your order now and show off your Albiceleste pride! 💙",
      features: ["EMBROIDERY LOGO", "DOTNET MATERIAL", "PREMIUM QUALITY"],
      product_images: [],
      categories: { name: "World Cup Jersey" }
    },
    {
      id: "messi-barca-retro",
      name: "Leo Messi Barca Retro Five Sleeve Jersey",
      price: 432,
      brand: "Barcelona",
      team: "Barcelona",
      season: "Retro",
      description: "Get ready to rep the GOAT! 🐐 Leo Messi's iconic Barcelona retro jersey is back in stock! 🔥 We've got direct access to the best sources, ensuring you get premium quality at unbeatable prices. Made from premium dotnet material, this five-sleeve jersey features intricate details that'll make you feel like a part of the Camp Nou squad. 👕 Get this fantastic piece for ₹390 (+ ₹42 courier charge). DM us to place your order now and show off your Barca pride! 💛",
      features: ["DOTNET MATERIAL", "PREMIUM QUALITY"],
      product_images: [],
      categories: { name: "Retro Jersey" }
    },
    {
      id: "cannavaro-real-madrid",
      name: "Cannavaro Retro Real Madrid Jersey",
      price: 432,
      brand: "Real Madrid",
      team: "Real Madrid",
      season: "Retro",
      description: "Get ready to rep the legendary Canavaro's iconic Real Madrid jersey! We've curated an exclusive retro jersey that's a must-have for any Madridista! By partnering directly with our trusted suppliers, we're able to bring you premium quality at unbeatable prices. Made from premium dotnet material, this jersey features intricate embroidery logo details that'll make you feel like a part of the Santiago Bernabéu squad. Get this fantastic piece for ₹390 (+ ₹42 courier charge). DM us to place your order now and get ready to take your Real Madrid fandom to the next level!",
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
      description: "Get ready to rep the Old Lady! ⚫️⚪️ Dusan Vlahovic's new season Juventus jersey is now available! 🔥 Made from premium dotnet material with intricate embroidery logo details, this jersey features the highest quality craftsmanship. Get it for ₹390 (+ ₹42 courier charge) = ₹432. DM us to place your order now and show off your Bianconeri pride! 💪",
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      product_images: [],
      categories: { name: "Football Jersey" }
    },
    {
      id: "arsenal-new-season",
      name: "Arsenal New Season Jersey",
      price: 422,
      brand: "Arsenal",
      team: "Arsenal",
      season: "New Season",
      description: "Get ready to rep the Gunners! 🔴⚪️ Arsenal's new season jersey is now available! 🔥 Made from premium quality dotnet material with intricate embroidery logo details, you can rep your favorite players like Odegaard, Martinelli, and Rice. Get it for ₹380 (+ ₹42 courier charge) = ₹422. DM us to place your order now and show off your Gooner pride! 💥",
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      product_images: [],
      categories: { name: "Football Jersey" }
    },
    {
      id: "totti-italy",
      name: "Totti Five Sleeve Jersey",
      price: 432,
      brand: "Italy",
      team: "Italy",
      season: "Classic",
      description: "Get your hands on the iconic Francesco Totti Italy jersey! 🇮🇹⚽️ Made from premium dotnet material with stunning sublimation quality, this five-sleeve jersey features intricate details that'll make you feel like a part of Azzurri's glory days. Get it for ₹390 (+ ₹42 courier charge) = ₹432. DM us to place your order now and show off your Italian pride! 💙",
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
      description: "Get ready to rep Barcelona with Travis Scott's style! 🔵🟣 Travis Scott x Barca five-sleeve jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality. Get it for ₹400 (+ ₹42 courier charge) = ₹442. DM us to place your order now and show off your Barca pride! 💪",
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
      description: "Cop the Travis Scott vibe! 🔥 Travis Scott's black five-sleeve jersey is in stock! 💀 Made from premium dotnet material with stunning sublimation quality. Get it for ₹390 (+ ₹42 courier charge) = ₹432. DM us to place your order now and rock that Travis Scott style! 🎤",
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
      description: "Get ready to rep Inter Miami in style! 🌴⚽️ Latest jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality. Get it for ₹330 (+ ₹42 courier charge) = ₹372. DM us to place your order now and show off your Inter Miami pride! 💛",
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
