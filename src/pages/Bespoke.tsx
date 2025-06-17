
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Bespoke = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Bespoke
            </h1>
            <p className="text-2xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
              Custom Jersey Creation
            </p>
          </div>
          
          <div className="premium-glass rounded-2xl p-12 gold-border text-center">
            <h2 className="text-3xl font-bold text-luxury-gold mb-6 font-inter">Personalized Excellence</h2>
            <p className="text-luxury-champagne/80 text-lg font-inter leading-relaxed">
              Create your own custom jersey with our bespoke service. 
              From design to materials, every detail is crafted to your specifications.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Bespoke;
