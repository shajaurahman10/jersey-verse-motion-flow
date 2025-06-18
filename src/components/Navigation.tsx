
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const linkClass = (path: string) => 
    `transition-colors duration-300 font-inter font-medium tracking-wider uppercase text-sm ${
      isActive(path) 
        ? 'text-luxury-gold' 
        : 'text-luxury-champagne hover:text-luxury-gold'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'premium-glass gold-border border-t-0' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/ecf96001-d27b-44ca-94f3-2d9122363c98.png" 
                alt="JERSEYSTWR" 
                className="h-10 w-auto filter brightness-0 invert animate-gold-shimmer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <Link to="/" className={linkClass('/')}>Home</Link>
              <Link to="/collection" className={linkClass('/collection')}>Collection</Link>
              <Link to="/heritage" className={linkClass('/heritage')}>Heritage</Link>
              <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <button className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300">
              <User className="h-6 w-6" />
            </button>
            <button className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300 relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-4 w-4 bg-luxury-gold text-black text-xs rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden premium-glass gold-border rounded-lg mt-4 mb-4">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link to="/" className={`block px-4 py-3 ${linkClass('/')}`}>Home</Link>
              <Link to="/collection" className={`block px-4 py-3 ${linkClass('/collection')}`}>Collection</Link>
              <Link to="/heritage" className={`block px-4 py-3 ${linkClass('/heritage')}`}>Heritage</Link>
              <Link to="/contact" className={`block px-4 py-3 ${linkClass('/contact')}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
