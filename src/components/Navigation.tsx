
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cart from './Cart';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 premium-glass backdrop-blur-md border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center space-x-2 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-champagne rounded-lg flex items-center justify-center font-orbitron font-black text-black text-xl group-hover:scale-110 transition-transform duration-300">
                J90
              </div>
              <span className="font-orbitron text-2xl font-black luxury-text hidden sm:block">
                J90
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`font-inter font-medium transition-colors duration-300 hover:text-luxury-gold ${
                    location.pathname === item.path
                      ? 'text-luxury-gold'
                      : 'text-luxury-champagne'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Cart Button */}
              <Button
                onClick={() => setIsCartOpen(true)}
                className="bg-luxury-gold text-black hover:bg-luxury-champagne transition-colors duration-300 font-inter font-bold"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                onClick={() => setIsCartOpen(true)}
                className="bg-luxury-gold text-black hover:bg-luxury-champagne p-2"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                    className={`font-inter font-medium transition-colors duration-300 hover:text-luxury-gold ${
                      location.pathname === item.path
                        ? 'text-luxury-gold'
                        : 'text-luxury-champagne'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
