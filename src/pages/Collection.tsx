import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  courier_charge: number;
  total_price: number;
  features: string[];
  whatsapp_message: string;
  instagram_message: string;
  product_images: Array<{
    image_url: string;
    alt_text: string;
    is_primary: boolean;
    sort_order: number;
  }>;
}

const Collection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock products data - replace these image URLs with your actual jersey images
  const products: Product[] = [
    {
      id: 1,
      name: "REAL MADRID AWAY KIT FOR 2025/26 SEASON",
      description: "Get ready to rep the Whites! ⚪️🔵 Real Madrid's 2025/26 away kit is now available! 🔥 Made from premium dotnet material with stunning sublimation quality, this jersey features intricate details that'll make you feel like a part of the Santiago Bernabéu squad.",
      price: 340,
      courier_charge: 42,
      total_price: 382,
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (REAL MADRID AWAY KIT FOR 2025/26 SEASON & id: 1) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (REAL MADRID AWAY KIT FOR 2025/26 SEASON & id: 1) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Real+Madrid+Away", alt_text: "Real Madrid Away Kit", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 2,
      name: "FRANK LAMPARD CHELSEA RETRO JERSEY",
      description: "Get ready to rep the Blues! 🔵⚪️ Frank Lampard's iconic Chelsea retro jersey is back in stock! 🔥 Made from premium dotnet material with stunning sublimation quality, this jersey features intricate details that'll make you feel like a part of Stamford Bridge squad.",
      price: 370,
      courier_charge: 42,
      total_price: 412,
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (FRANK LAMPARD CHELSEA RETRO JERSEY & id: 2) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (FRANK LAMPARD CHELSEA RETRO JERSEY & id: 2) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Chelsea+Lampard", alt_text: "Frank Lampard Chelsea Retro", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 3,
      name: "ARGENTINA 2014 WORLD CUP JERSEY",
      description: "Relive the glory of Argentina's 2014 World Cup campaign! ⚽️ Get your hands on the iconic jersey, featuring intricate embroidery logo details on premium dotnet material. We've sourced this fantastic piece directly, ensuring you get the best quality at an unbeatable price.",
      price: 380,
      courier_charge: 42,
      total_price: 422,
      features: ["EMBROIDERY LOGO", "DOTNET MATERIAL", "PREMIUM QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARGENTINA 2014 WORLD CUP JERSEY & id: 3) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARGENTINA 2014 WORLD CUP JERSEY & id: 3) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Argentina+World+Cup", alt_text: "Argentina 2014 World Cup", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 4,
      name: "LEO MESSI BARCA RETRO FIVE SLEEVE JERSEY",
      description: "Get ready to rep the GOAT! 🐐 Leo Messi's iconic Barcelona retro jersey is back in stock! 🔥 We've got direct access to the best sources, ensuring you get premium quality at unbeatable prices. Made from premium dotnet material, this five-sleeve jersey features intricate details that'll make you feel like a part of the Camp Nou squad.",
      price: 390,
      courier_charge: 42,
      total_price: 432,
      features: ["DOTNET MATERIAL", "PREMIUM QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (LEO MESSI BARCA RETRO FIVE SLEEVE JERSEY & id: 4) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (LEO MESSI BARCA RETRO FIVE SLEEVE JERSEY & id: 4) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Barcelona+Retro", alt_text: "Leo Messi Barca Retro", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 5,
      name: "CANNAVARO RETRO REAL MADRID JERSEY",
      description: "Get ready to rep the legendary Canavaro's iconic Real Madrid jersey! We've curated an exclusive retro jersey that's a must-have for any Madridista! By partnering directly with our trusted suppliers, we're able to bring you premium quality at unbeatable prices. Made from premium dotnet material, this jersey features intricate embroidery logo details that'll make you feel like a part of the Santiago Bernabéu squad.",
      price: 390,
      courier_charge: 42,
      total_price: 432,
      features: ["EMBROIDERY LOGO", "DOTNET MATERIAL", "PREMIUM QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (CANNAVARO RETRO REAL MADRID JERSEY & id: 5) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (CANNAVARO RETRO REAL MADRID JERSEY & id: 5) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Real+Madrid+Retro", alt_text: "Cannavaro Retro Real Madrid", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 6,
      name: "VLAHOVIC NEW SEASON JUVE JERSEY",
      description: "Get ready to rep the Old Lady! ⚫️⚪️ Dusan Vlahovic's new season Juventus jersey is now available! 🔥 Made from premium dotnet material with intricate embroidery logo details, you can rep your favorite players like Odegaard, Martinelli, and Rice.",
      price: 390,
      courier_charge: 42,
      total_price: 432,
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (VLAHOVIC NEW SEASON JUVE JERSEY & id: 6) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (VLAHOVIC NEW SEASON JUVE JERSEY & id: 6) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Juventus+New+Season", alt_text: "Vlahovic New Season Juventus", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 7,
      name: "ARSenal NEW SEASON JERSEY",
      description: "Get ready to rep the Gunners! 🔴⚪️ Arsenal's new season jersey is now available! 🔥 Made from premium quality dotnet material with intricate embroidery logo details, you can rep your favorite players like Odegaard, Martinelli, and Rice.",
      price: 380,
      courier_charge: 42,
      total_price: 422,
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARSenal NEW SEASON JERSEY & id: 7) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARSenal NEW SEASON JERSEY & id: 7) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Arsenal+New+Season", alt_text: "Arsenal New Season", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 8,
      name: "TOTTI FIVE SLEEVE JERSEY",
      description: "Get your hands on the iconic Francesco Totti Italy jersey! 🇮🇹⚽️ Made from premium dotnet material with stunning sublimation quality, this five-sleeve jersey features intricate details that'll make you feel like a part of Azzurri's glory days.",
      price: 390,
      courier_charge: 42,
      total_price: 432,
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TOTTI FIVE SLEEVE JERSEY & id: 8) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TOTTI FIVE SLEEVE JERSEY & id: 8) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Italy+Totti", alt_text: "Totti Five Sleeve", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 9,
      name: "TRAVIS SCOTT BARCA FIVE SLEEVE JERSEY",
      description: "Get ready to rep Barcelona with Travis Scott's style! 🔵🟣 Travis Scott x Barca five-sleeve jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      price: 400,
      courier_charge: 42,
      total_price: 442,
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BARCA FIVE SLEEVE JERSEY & id: 9) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BARCA FIVE SLEEVE JERSEY & id: 9) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Travis+Scott+Barca", alt_text: "Travis Scott Barca", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 10,
      name: "TRAVIS SCOTT BLACK FIVE SLEEVE JERSEY",
      description: "Cop the Travis Scott vibe! 🔥 Travis Scott's black five-sleeve jersey is in stock! 💀 Made from premium dotnet material with stunning sublimation quality.",
      price: 390,
      courier_charge: 42,
      total_price: 432,
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BLACK FIVE SLEEVE JERSEY & id: 10) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BLACK FIVE SLEEVE JERSEY & id: 10) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Travis+Scott+Black", alt_text: "Travis Scott Black", is_primary: true, sort_order: 1 }
      ]
    },
    {
      id: 11,
      name: "INTER MIAAMI LATEST JERSEY",
      description: "Get ready to rep Inter Miami in style! 🌴⚽️ Latest jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      price: 330,
      courier_charge: 42,
      total_price: 372,
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (INTER MIAAMI LATEST JERSEY & id: 11) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (INTER MIAAMI LATEST JERSEY & id: 11) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "https://via.placeholder.com/400x500?text=Inter+Miami+Latest", alt_text: "Inter Miami Latest", is_primary: true, sort_order: 1 }
      ]
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Collection;
