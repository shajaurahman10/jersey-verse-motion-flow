
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import Cart from '@/components/Cart';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 premium-glass gold-border-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="text-luxury-gold font-orbitron text-xl sm:text-2xl font-black tracking-wider">
                  J90 KITS
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase">
                Home
              </Link>
              <Link to="/collection" className="text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase">
                Collection
              </Link>
              <Link to="/feed" className="text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase">
                Feed
              </Link>
              <Link to="/heritage" className="text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase">
                Heritage
              </Link>
              <Link to="/contact" className="text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase">
                Contact
              </Link>
              <Link to="/admin" className="text-luxury-gold hover:text-luxury-champagne transition-colors font-inter font-medium tracking-wider uppercase border border-luxury-gold px-3 py-1 rounded">
                Admin Panel
              </Link>
              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="text-luxury-champagne hover:text-luxury-gold transition-colors relative"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs font-bold">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-luxury-champagne hover:text-luxury-gold focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden premium-glass border-t border-luxury-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/collection" 
                className="block px-3 py-2 text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link 
                to="/feed" 
                className="block px-3 py-2 text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Feed
              </Link>
              <Link 
                to="/heritage" 
                className="block px-3 py-2 text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Heritage
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/admin" 
                className="block px-3 py-2 text-luxury-gold hover:text-luxury-champagne transition-colors font-inter font-medium tracking-wider uppercase border border-luxury-gold mx-3 rounded text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4 inline mr-2" />
                Admin Panel
              </Link>
              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="block px-3 py-2 text-luxury-champagne hover:text-luxury-gold transition-colors font-inter font-medium tracking-wider uppercase w-full text-left"
              >
                Cart
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Navigation;
