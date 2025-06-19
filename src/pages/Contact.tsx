
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Contact
            </h1>
            <p className="text-2xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
              Connect With Our Team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="premium-glass rounded-xl p-8 text-center gold-border">
              <Phone className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-luxury-champagne mb-4 font-inter">Phone</h3>
              <p className="text-luxury-champagne/80 font-inter">8129913205</p>
            </div>
            
            <div className="premium-glass rounded-xl p-8 text-center gold-border">
              <Mail className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-luxury-champagne mb-4 font-inter">Email</h3>
              <p className="text-luxury-champagne/80 font-inter">jerseystwr@gmail.com</p>
            </div>
            
            <div className="premium-glass rounded-xl p-8 text-center gold-border">
              <MapPin className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-luxury-champagne mb-4 font-inter">Location</h3>
              <p className="text-luxury-champagne/80 font-inter">Kerala, India<br />Premium Delivery</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
