
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Heritage = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Heritage
            </h1>
            <p className="text-2xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
              Our Story & Legacy
            </p>
          </div>
          
          <div className="premium-glass rounded-2xl p-12 gold-border text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-luxury-gold mb-8 font-orbitron uppercase tracking-wider">
              Direct From Factory to Your Doorstep
            </h2>
            
            <div className="space-y-8 text-left">
              <div className="premium-glass rounded-xl p-6 border border-luxury-gold/30">
                <h3 className="text-2xl font-bold text-luxury-gold mb-4 font-inter">Our Affiliate Program</h3>
                <p className="text-luxury-champagne/90 text-lg font-inter leading-relaxed">
                  J90 operates as a premium affiliate program that connects you directly with factory-fresh football jerseys. 
                  We've established exclusive partnerships with top manufacturers to bring you authentic, high-quality jerseys 
                  at unbeatable prices without any middleman markup.
                </p>
              </div>

              <div className="premium-glass rounded-xl p-6 border border-luxury-gold/30">
                <h3 className="text-2xl font-bold text-luxury-gold mb-4 font-inter">Factory Direct Collection</h3>
                <p className="text-luxury-champagne/90 text-lg font-inter leading-relaxed">
                  Every jersey in our collection is sourced directly from premium manufacturers. This means you get 
                  the same quality as official stores but at a fraction of the cost. Our direct relationships ensure 
                  authenticity, superior materials, and the latest designs from your favorite teams.
                </p>
              </div>

              <div className="premium-glass rounded-xl p-6 border border-luxury-gold/30">
                <h3 className="text-2xl font-bold text-luxury-gold mb-4 font-inter">All India Shipping</h3>
                <p className="text-luxury-champagne/90 text-lg font-inter leading-relaxed">
                  We ship across all of India with fast and secure delivery. From Kerala to Kashmir, from Mumbai to Manipur - 
                  your premium jersey will reach you safely. We use trusted courier partners to ensure your order arrives 
                  in perfect condition within 3-7 business days.
                </p>
              </div>

              <div className="premium-glass rounded-xl p-6 border border-luxury-gold/30">
                <h3 className="text-2xl font-bold text-luxury-gold mb-4 font-inter">Luxury Standards</h3>
                <p className="text-luxury-champagne/90 text-lg font-inter leading-relaxed">
                  At J90, we maintain the highest standards of quality and customer service. Each jersey features premium 
                  materials like dotnet fabric, sublimation quality printing, and embroidered logos. We believe in providing 
                  a luxury shopping experience that matches the premium quality of our products.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-luxury-gold text-xl font-bold font-inter uppercase tracking-wider">
                Experience the J90 Difference
              </p>
              <p className="text-luxury-champagne/80 text-lg font-inter mt-2">
                Where passion meets premium quality
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Heritage;
