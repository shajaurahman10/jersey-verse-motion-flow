
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-champagne/3 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center z-20 max-w-6xl mx-auto px-8">
        <h1 className="font-sedgwick text-7xl md:text-9xl lg:text-[12rem] font-bold luxury-text mb-12 animate-gold-shimmer tracking-wider">
          JERSEYSTWR
        </h1>
        
        <p className="text-2xl md:text-3xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
          Curated Excellence in Football Fashion
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-gradient-to-r from-luxury-gold to-luxury-champagne text-black px-12 py-5 rounded-lg font-semibold font-inter tracking-wider uppercase hover:scale-105 transition-all duration-500 luxury-glow text-lg">
            View Collection
          </button>
          <button className="gold-border text-luxury-gold px-12 py-5 rounded-lg font-semibold font-inter tracking-wider uppercase hover:bg-luxury-gold/10 transition-all duration-500 text-lg">
            Private Consultation
          </button>
        </div>
      </div>

      {/* Elegant Jersey Display */}
      <div className="absolute inset-0 z-10">
        {/* Arsenal Jersey */}
        <div className={`absolute top-1/2 left-1/2 w-56 h-64 ${animationStarted ? 'animate-luxury-entrance' : 'opacity-0'}`}>
          <img 
            src="/lovable-uploads/d25ea2ba-ee83-43da-a6eb-4b0172df12cc.png" 
            alt="Arsenal Jersey" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-700 animate-subtle-float drop-shadow-2xl"
          />
        </div>

        {/* Barcelona Jersey */}
        <div className={`absolute top-1/2 left-1/2 w-56 h-64 ${animationStarted ? 'animate-luxury-entrance-2' : 'opacity-0'}`}>
          <img 
            src="/lovable-uploads/ef5cbf57-55c9-4611-9955-cb2f0aafdfd6.png" 
            alt="Barcelona Jersey" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-700 animate-subtle-float drop-shadow-2xl"
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* Real Madrid Jersey */}
        <div className={`absolute top-1/2 left-1/2 w-56 h-64 ${animationStarted ? 'animate-luxury-entrance-3' : 'opacity-0'}`}>
          <img 
            src="/lovable-uploads/cb9a1097-7d7c-4ecc-b406-b512d4810795.png" 
            alt="Real Madrid Jersey" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-700 animate-subtle-float drop-shadow-2xl"
            style={{ animationDelay: '4s' }}
          />
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-luxury-gold/70" />
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 z-5"></div>
    </section>
  );
};

export default HeroSection;
