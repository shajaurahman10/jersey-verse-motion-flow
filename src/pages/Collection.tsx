
import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import Footer from '@/components/Footer';

interface Product {
  id: string;
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

  // Updated products data with actual images and prices
  const products: Product[] = [
    {
      id: "3",
      name: "ARGENTINA 2014 WORLD CUP JERSEY",
      description: "Relive the glory of Argentina's 2014 World Cup campaign! ⚽️ Get your hands on the iconic jersey, featuring intricate embroidery logo details on premium dotnet material. We've sourced this fantastic piece directly, ensuring you get the best quality at an unbeatable price.",
      price: 430,
      courier_charge: 42,
      total_price: 472,
      features: ["EMBROIDERY LOGO", "DOTNET MATERIAL", "PREMIUM QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARGENTINA 2014 WORLD CUP JERSEY & id: 3) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARGENTINA 2014 WORLD CUP JERSEY & id: 3) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-16 at 16.10.01 (1).jpeg", alt_text: "Argentina 2014 World Cup Front", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-16 at 16.10.03 (1).jpeg", alt_text: "Argentina 2014 World Cup Back", is_primary: false, sort_order: 2 }
      ]
    },
    {
      id: "11",
      name: "INTER MIAMI LATEST JERSEY",
      description: "Get ready to rep Inter Miami in style! 🌴⚽️ Latest jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      price: 380,
      courier_charge: 42,
      total_price: 422,
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (INTER MIAMI LATEST JERSEY & id: 11) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (INTER MIAMI LATEST JERSEY & id: 11) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-17 at 12.09.35.jpeg", alt_text: "Inter Miami Latest Front", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-17 at 12.09.36 (1).jpeg", alt_text: "Inter Miami Latest Back", is_primary: false, sort_order: 2 }
      ]
    },
    {
      id: "10",
      name: "TRAVIS SCOTT BLACK FIVE SLEEVE JERSEY",
      description: "Cop the Travis Scott vibe! 🔥 Travis Scott's black five-sleeve jersey is in stock! 💀 Made from premium dotnet material with stunning sublimation quality.",
      price: 440,
      courier_charge: 42,
      total_price: 482,
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BLACK FIVE SLEEVE JERSEY & id: 10) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BLACK FIVE SLEEVE JERSEY & id: 10) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-03 at 12.37.50 (1).jpeg", alt_text: "Travis Scott Black Front", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-03 at 12.37.49.jpeg", alt_text: "Travis Scott Black Back", is_primary: false, sort_order: 2 }
      ]
    },
    {
      id: "8",
      name: "TOTTI FIVE SLEEVE JERSEY",
      description: "Get your hands on the iconic Francesco Totti Italy jersey! 🇮🇹⚽️ Made from premium dotnet material with stunning sublimation quality, this five-sleeve jersey features intricate details that'll make you feel like a part of Azzurri's glory days.",
      price: 440,
      courier_charge: 42,
      total_price: 482,
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TOTTI FIVE SLEEVE JERSEY & id: 8) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TOTTI FIVE SLEEVE JERSEY & id: 8) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.16.jpeg", alt_text: "Totti Five Sleeve 1", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.17.jpeg", alt_text: "Totti Five Sleeve 2", is_primary: false, sort_order: 2 },
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.30 (1).jpeg", alt_text: "Totti Five Sleeve 3", is_primary: false, sort_order: 3 },
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.28.jpeg", alt_text: "Totti Five Sleeve 4", is_primary: false, sort_order: 4 },
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.29.jpeg", alt_text: "Totti Five Sleeve 5", is_primary: false, sort_order: 5 },
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.18.jpeg", alt_text: "Totti Five Sleeve 6", is_primary: false, sort_order: 6 },
        { image_url: "/WhatsApp Image 2025-06-13 at 16.29.21.jpeg", alt_text: "Totti Five Sleeve 7", is_primary: false, sort_order: 7 }
      ]
    },
    {
      id: "9",
      name: "TRAVIS SCOTT BARCA FIVE SLEEVE JERSEY",
      description: "Get ready to rep Barcelona with Travis Scott's style! 🔵🟣 Travis Scott x Barca five-sleeve jersey available! 🔥 Made from premium dotnet material with stunning sublimation quality.",
      price: 440,
      courier_charge: 42,
      total_price: 482,
      features: ["DOTNET MATERIAL", "SUBLIMATION QUALITY"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BARCA FIVE SLEEVE JERSEY & id: 9) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (TRAVIS SCOTT BARCA FIVE SLEEVE JERSEY & id: 9) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-14 at 12.19.52.jpeg", alt_text: "Travis Scott Barca 1", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-14 at 12.19.53.jpeg", alt_text: "Travis Scott Barca 2", is_primary: false, sort_order: 2 }
      ]
    },
    {
      id: "7",
      name: "ARSENAL NEW SEASON JERSEY",
      description: "Get ready to rep the Gunners! 🔴⚪️ Arsenal's new season jersey is now available! 🔥 Made from premium quality dotnet material with intricate embroidery logo details, you can rep your favorite players like Odegaard, Martinelli, and Rice.",
      price: 430,
      courier_charge: 42,
      total_price: 472,
      features: ["EMBROIDERY LOGO", "PREMIUM QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARSENAL NEW SEASON JERSEY & id: 7) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (ARSENAL NEW SEASON JERSEY & id: 7) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-14 at 19.27.42.jpeg", alt_text: "Arsenal New Season 1", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-14 at 19.27.43 (2).jpeg", alt_text: "Arsenal New Season 2", is_primary: false, sort_order: 2 },
        { image_url: "/WhatsApp Image 2025-06-14 at 19.27.44.jpeg", alt_text: "Arsenal New Season 3", is_primary: false, sort_order: 3 },
        { image_url: "/WhatsApp Image 2025-06-14 at 19.27.45.jpeg", alt_text: "Arsenal New Season 4", is_primary: false, sort_order: 4 }
      ]
    },
    {
      id: "2",
      name: "FRANK LAMPARD CHELSEA RETRO JERSEY",
      description: "Get ready to rep the Blues! 🔵⚪️ Frank Lampard's iconic Chelsea retro jersey is back in stock! 🔥 Made from premium dotnet material with stunning sublimation quality, this jersey features intricate details that'll make you feel like a part of Stamford Bridge squad.",
      price: 420,
      courier_charge: 42,
      total_price: 462,
      features: ["SUBLIMATION QUALITY", "DOTNET MATERIAL"],
      whatsapp_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (FRANK LAMPARD CHELSEA RETRO JERSEY & id: 2) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      instagram_message: "Hey I just checkout your jerseys from J90 and i loved this jersey (FRANK LAMPARD CHELSEA RETRO JERSEY & id: 2) i would like to order it\nthe details are according to the form\n-jersey size:\n-Name:\n-Address:\n-Pincode:\n-Phone Number:\nthank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90",
      product_images: [
        { image_url: "/WhatsApp Image 2025-06-15 at 13.12.22 (1).jpeg", alt_text: "Frank Lampard Chelsea 1", is_primary: true, sort_order: 1 },
        { image_url: "/WhatsApp Image 2025-06-15 at 13.12.22 (2).jpeg", alt_text: "Frank Lampard Chelsea 2", is_primary: false, sort_order: 2 }
      ]
    }
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black luxury-text mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Collection
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-champagne/90 mb-4 sm:mb-6 md:mb-8 lg:mb-12 font-inter font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase">
              Premium Football Jerseys
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
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
