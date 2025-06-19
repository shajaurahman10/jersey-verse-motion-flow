
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  
  const jerseys = [
    {
      id: 1,
      name: "Real Madrid",
      image: "/lovable-uploads/cb9a1097-7d7c-4ecc-b406-b512d4810795.png"
    },
    {
      id: 3,
      name: "Argentina",
      image: "/lovable-uploads/a4fb7c1a-b5a8-48e0-a989-27e953aaab7a.png"
    },
    {
      id: 4,
      name: "Juventus",
      image: "/lovable-uploads/7a8ec382-d90d-4c9b-a68e-4c09a0d923ba.png"
    },
    {
      id: 5,
      name: "Barcelona",
      image: "/lovable-uploads/ef5cbf57-55c9-4611-9955-cb2f0aafdfd6.png"
    },
    {
      id: 8,
      name: "Manchester United Classic",
      image: "/lovable-uploads/f7cd6e41-397e-49d2-8879-470e0004ff7a.png"
    },
    {
      id: 9,
      name: "Real Madrid Third",
      image: "/lovable-uploads/dabb59d7-6d84-472d-a249-2ea06e4e6030.png"
    }
  ];

  const nextJersey = () => {
    setCurrentIndex((prev) => (prev + 1) % jerseys.length);
  };

  const prevJersey = () => {
    setCurrentIndex((prev) => (prev - 1 + jerseys.length) % jerseys.length);
  };

  const getJerseyPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(jerseys.length - 1)) return 'right';
    if (diff === -1 || diff === jerseys.length - 1) return 'left';
    return 'hidden';
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-champagne/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-8 text-center">
        {/* Brand Title */}
        <div className="mb-16">
          <h1 className="font-orbitron text-8xl md:text-9xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
            J90
          </h1>
          <p className="text-3xl md:text-4xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
            The Premium Jersey Experience
          </p>
          <p className="text-xl text-luxury-champagne/80 font-inter font-light tracking-wider">
            Where Craftsmanship Meets Passion, And Every Jersey Tells A Story Of Excellence
          </p>
        </div>

        {/* Jersey Carousel */}
        <div className="relative h-96 flex items-center justify-center mb-16">
          {/* Jerseys */}
          {jerseys.map((jersey, index) => {
            const position = getJerseyPosition(index);
            if (position === 'hidden') return null;

            return (
              <div
                key={jersey.id}
                className={`absolute transition-all duration-700 ease-in-out ${
                  position === 'center'
                    ? 'z-30 scale-100 opacity-100 transform translate-x-0'
                    : position === 'left'
                    ? 'z-20 scale-75 opacity-50 transform -translate-x-48'
                    : 'z-20 scale-75 opacity-50 transform translate-x-48'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                {/* Spotlight effect for center jersey */}
                {position === 'center' && (
                  <div className="absolute inset-0 bg-gradient-radial from-luxury-gold/20 via-luxury-gold/10 to-transparent rounded-full scale-150 blur-2xl -z-10"></div>
                )}
                
                <div className="w-64 h-80 flex items-center justify-center">
                  <img
                    src={jersey.image}
                    alt={jersey.name}
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Jersey name for center jersey */}
                {position === 'center' && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <p className="text-luxury-champagne/90 text-xl font-inter font-light tracking-wider uppercase">
                      {jersey.name}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevJersey}
            className="absolute left-8 z-40 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-luxury-gold/30 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-luxury-gold" />
          </button>
          
          <button
            onClick={nextJersey}
            className="absolute right-8 z-40 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-luxury-gold/30 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-luxury-gold" />
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
            Curated Excellence in Football Fashion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/collection"
              onClick={handleLinkClick}
              className="bg-gradient-to-r from-luxury-gold to-luxury-champagne text-black px-12 py-5 rounded-lg font-semibold font-inter tracking-wider uppercase hover:scale-105 transition-all duration-500 luxury-glow text-lg"
            >
              View Collection
            </Link>
            <Link 
              to="/contact"
              onClick={handleLinkClick}
              className="gold-border text-luxury-gold px-12 py-5 rounded-lg font-semibold font-inter tracking-wider uppercase hover:bg-luxury-gold/10 transition-all duration-500 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 z-5"></div>
    </section>
  );
};

export default HeroSection;
