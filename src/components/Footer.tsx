
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Truck, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="premium-glass gold-border border-b-0 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Delivery Information Banner */}
        <div className="premium-glass gold-border rounded-2xl p-8 mb-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8 text-luxury-gold" />
              </div>
              <div className="text-left">
                <h3 className="text-luxury-gold font-bold text-xl font-inter uppercase tracking-wider">All Over India Delivery</h3>
                <p className="text-luxury-champagne/80 font-inter">Premium jerseys delivered nationwide</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-luxury-gold" />
              </div>
              <div className="text-left">
                <h3 className="text-luxury-gold font-bold text-xl font-inter uppercase tracking-wider">Authentic Guarantee</h3>
                <p className="text-luxury-champagne/80 font-inter">100% genuine products only</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-luxury-gold" />
              </div>
              <div className="text-left">
                <h3 className="text-luxury-gold font-bold text-xl font-inter uppercase tracking-wider">Express Shipping</h3>
                <p className="text-luxury-champagne/80 font-inter">Fast & secure delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="spotlight-logo mb-8 w-fit group">
              <img 
                src="/lovable-uploads/86c5c0c2-3f66-4886-a49f-3de0de660e8e.png" 
                alt="J90" 
                className="h-16 w-auto transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
              />
            </div>
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
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Custom Orders</a></li>
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Authentication</a></li>
              <li><a href="#" className="text-luxury-champagne/70 hover:text-luxury-gold transition-colors duration-300 font-inter">Express Delivery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-luxury-gold font-bold mb-6 font-inter tracking-wider uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-luxury-champagne/70">
                <Phone className="h-4 w-4" />
                <span className="font-inter">8129913205</span>
              </li>
              <li className="flex items-center space-x-3 text-luxury-champagne/70">
                <Mail className="h-4 w-4" />
                <span className="font-inter">jerseystwr@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-luxury-champagne/70">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="font-inter">Kerala, India<br />Premium Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo at bottom with spotlight effect */}
        <div className="border-t border-luxury-gold/20 mt-16 pt-12 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/86c5c0c2-3f66-4886-a49f-3de0de660e8e.png" 
              alt="J90" 
              className="h-12 w-auto mx-auto transition-all duration-500 hover:brightness-125 hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:scale-110"
            />
          </div>
          <p className="text-luxury-champagne/60 font-inter">
            © 2024 J90. All rights reserved. | Crafted for connoisseurs of the beautiful game.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
