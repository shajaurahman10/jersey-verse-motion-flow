
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-lg neon-border border-t-0' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/ecf96001-d27b-44ca-94f3-2d9122363c98.png" 
              alt="JERSEYSTWR" 
              className="h-8 w-auto filter invert animate-glow-pulse"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">HOME</a>
              <a href="#shop" className="text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">SHOP</a>
              <a href="#about" className="text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">ABOUT</a>
              <a href="#contact" className="text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">CONTACT</a>
            </div>
          </div>

          {/* Cart and Mobile menu button */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-neon-blue transition-colors duration-300">
              <ShoppingBag className="h-6 w-6" />
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg rounded-lg mt-2 neon-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">HOME</a>
              <a href="#shop" className="block px-3 py-2 text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">SHOP</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">ABOUT</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-neon-blue transition-colors duration-300 font-orbitron">CONTACT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
