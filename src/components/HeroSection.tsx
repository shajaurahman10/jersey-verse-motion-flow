
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle jersey (index 2)
  
  const jerseys = [
    {
      id: 1,
      name: "Real Madrid",
      image: "/lovable-uploads/cb9a1097-7d7c-4ecc-b406-b512d4810795.png"
    },
    {
      id: 2,
      name: "Arsenal",
      image: "/lovable-uploads/d25ea2ba-ee83-43da-a6eb-4b0172df12cc.png"
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-champagne/3 rounded-full blur-3xl"></div>
      </div>

      {/* Jersey Carousel */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-8">
        {/* Carousel Container */}
        <div className="relative h-96 flex items-center justify-center mb-16">
          {/* Jerseys */}
          {jerseys.map((jersey, index) => {
            const position = getJerseyPosition(index);
            if (position === 'hidden') return null;

            return (
              <div
                key={jersey.id}
                className={`absolute transition-all duration-1000 ease-out ${
                  position === 'center'
                    ? 'z-30 scale-100 opacity-100 transform translate-x-0'
                    : position === 'left'
                    ? 'z-20 scale-75 opacity-50 transform -translate-x-48'
                    : 'z-20 scale-75 opacity-50 transform translate-x-48'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
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
            className="absolute left-8 z-40 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm border border-luxury-gold/30 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-luxury-gold" />
          </button>
          
          <button
            onClick={nextJersey}
            className="absolute right-8 z-40 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm border border-luxury-gold/30 hover:scale-110"
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
            <button className="bg-gradient-to-r from-luxury-gold to-luxury-champagne text-black px-12 py-5 rounded-lg font-semibold font-inter tracking-wider uppercase hover:scale-105 transition-all duration-500 luxury-glow text-lg">
              View Collection
            </button>
            <button className="gold-border text-luxury-gold px-12 py-5 rounded-lg font-semibold font-inter tracking-wider uppercase hover:bg-luxury-gold/10 transition-all duration-500 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 z-5"></div>
    </section>
  );
};

export default HeroSection;
