
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Collection = () => {
  // Placeholder data - this will be replaced with Supabase data
  const sampleProducts = [
    {
      id: 1,
      name: "Real Madrid Home Jersey",
      price: "₹2999",
      image: "/lovable-uploads/cb9a1097-7d7c-4ecc-b406-b512d4810795.png"
    },
    {
      id: 2,
      name: "Arsenal Home Jersey",
      price: "₹2799",
      image: "/lovable-uploads/d25ea2ba-ee83-43da-a6eb-4b0172df12cc.png"
    },
    {
      id: 3,
      name: "Argentina National Team",
      price: "₹3199",
      image: "/lovable-uploads/a4fb7c1a-b5a8-48e0-a989-27e953aaab7a.png"
    },
    {
      id: 4,
      name: "Juventus Home Jersey",
      price: "₹2899",
      image: "/lovable-uploads/7a8ec382-d90d-4c9b-a68e-4c09a0d923ba.png"
    },
    {
      id: 5,
      name: "Barcelona Home Jersey",
      price: "₹3099",
      image: "/lovable-uploads/ef5cbf57-55c9-4611-9955-cb2f0aafdfd6.png"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black luxury-text mb-8 animate-gold-shimmer tracking-[0.05em] uppercase">
              Collection
            </h1>
            <p className="text-2xl text-luxury-champagne/90 mb-12 font-inter font-light tracking-[0.2em] uppercase">
              Premium Football Jerseys
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="premium-glass gold-border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-contain bg-gradient-to-b from-transparent to-black/10"
                  />
                  <button className="absolute top-4 right-4 bg-luxury-gold text-black px-4 py-2 rounded-lg font-bold font-inter text-sm uppercase tracking-wider hover:bg-luxury-champagne transition-colors duration-300">
                    View
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-luxury-gold font-bold text-xl font-inter mb-2 uppercase tracking-wider">
                    {product.name}
                  </h3>
                  <p className="text-luxury-champagne text-2xl font-bold font-inter">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="premium-glass gold-border rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-luxury-gold mb-4 font-inter">Connect to Supabase</h2>
              <p className="text-luxury-champagne/80 text-lg font-inter leading-relaxed">
                To enable full shopping functionality with your product database, 
                please connect your project to Supabase using the green button in the top right corner.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collection;
