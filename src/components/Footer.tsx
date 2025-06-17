
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t neon-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/ecf96001-d27b-44ca-94f3-2d9122363c98.png" 
              alt="JERSEYSTWR" 
              className="h-12 w-auto filter invert mb-4"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Experience the future of football fashion with our premium jersey collection. 
              Authentic, high-quality jerseys from the world's top clubs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-orbitron">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4 font-orbitron">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 JERSEYSTWR. All rights reserved. | Designed for the future of football fashion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
