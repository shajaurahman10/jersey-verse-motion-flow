
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start animations after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="text-center z-20 max-w-4xl mx-auto px-4">
        <h1 className="font-sedgwick text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 animate-glow-pulse">
          JERSEYSTWR
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-orbitron">
          EXPERIENCE THE FUTURE OF FOOTBALL FASHION
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-neon-blue to-neon-purple text-black px-8 py-4 rounded-lg font-bold font-orbitron hover:scale-105 transition-all duration-300 futuristic-glow">
            EXPLORE COLLECTION
          </button>
          <button className="border border-neon-blue text-neon-blue px-8 py-4 rounded-lg font-bold font-orbitron hover:bg-neon-blue hover:text-black transition-all duration-300 neon-border">
            WATCH DEMO
          </button>
        </div>
      </div>

      {/* Flying Jerseys */}
      <div className="absolute inset-0 z-10">
        {/* Arsenal Jersey */}
        <div className={`absolute top-1/2 left-1/2 w-48 h-56 ${animationStarted ? 'animate-fly-in-1' : 'opacity-0'}`}>
          <img 
            src="/lovable-uploads/d25ea2ba-ee83-43da-a6eb-4b0172df12cc.png" 
            alt="Arsenal Jersey" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 animate-float"
          />
        </div>

        {/* Barcelona Jersey */}
        <div className={`absolute top-1/2 left-1/2 w-48 h-56 ${animationStarted ? 'animate-fly-in-2' : 'opacity-0'}`}>
          <img 
            src="/lovable-uploads/ef5cbf57-55c9-4611-9955-cb2f0aafdfd6.png" 
            alt="Barcelona Jersey" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>

        {/* Real Madrid Jersey */}
        <div className={`absolute top-1/2 left-1/2 w-48 h-56 ${animationStarted ? 'animate-fly-in-3' : 'opacity-0'}`}>
          <img 
            src="/lovable-uploads/cb9a1097-7d7c-4ecc-b406-b512d4810795.png" 
            alt="Real Madrid Jersey" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 animate-float"
            style={{ animationDelay: '2s' }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-neon-blue" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-5"></div>
    </section>
  );
};

export default HeroSection;
