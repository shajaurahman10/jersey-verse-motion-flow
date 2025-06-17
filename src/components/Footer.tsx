
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="premium-glass gold-border border-b-0 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/ecf96001-d27b-44ca-94f3-2d9122363c98.png" 
              alt="JERSEYSTWR" 
              className="h-12 w-auto filter brightness-0 invert mb-8"
            />
            <p className="text-luxury-champagne/80 mb-8 max-w-md font-inter leading-relaxed">
              Curating the world's finest football jerseys for those who appreciate excellence, 
              authenticity, and the artistry of the beautiful game.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-luxury-gold font-bold mb-6 font-inter tracking-wider uppercase">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Premium Collection</a></li>
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Bespoke Orders</a></li>
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Authentication</a></li>
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Concierge Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-luxury-gold font-bold mb-6 font-inter tracking-wider uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-luxury-champagne/70">
                <Phone className="h-4 w-4" />
                <span className="font-inter">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-luxury-champagne/70">
                <Mail className="h-4 w-4" />
                <span className="font-inter">concierge@jerseystwr.com</span>
              </li>
              <li className="flex items-start space-x-3 text-luxury-champagne/70">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="font-inter">Beverly Hills, CA<br />Private Showroom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gold/20 mt-16 pt-12 text-center">
          <p className="text-luxury-champagne/60 font-inter">
            © 2024 JERSEYSTWR. All rights reserved. | Crafted for connoisseurs of the beautiful game.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
