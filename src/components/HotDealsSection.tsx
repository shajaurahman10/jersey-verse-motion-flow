
import { Badge } from '@/components/ui/badge';

const HotDealsSection = () => {
  const hotDeals = [
    {
      id: 1,
      name: "Manchester United Classic",
      image: "/lovable-uploads/7b7af6ff-2249-44b0-b31f-13b082926b07.png",
      originalPrice: "₹4,999",
      salePrice: "₹2,999",
      discount: "40% OFF",
      status: "RESTOCKED DUE TO HIGH DEMAND"
    },
    {
      id: 2,
      name: "Arsenal Away Kit",
      image: "/lovable-uploads/b37476fc-3252-42b8-8a6a-23beb72e6a1d.png",
      originalPrice: "₹3,999",
      salePrice: "₹2,499",
      discount: "38% OFF",
      status: "HOT DEAL"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-orbitron text-4xl md:text-6xl font-black luxury-text mb-4 animate-gold-shimmer tracking-[0.05em] uppercase">
          Hot Deals
        </h2>
        <p className="text-luxury-champagne/90 text-lg font-inter font-light tracking-[0.2em] uppercase">
          Limited Time Offers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {hotDeals.map((deal) => (
          <div key={deal.id} className="premium-glass gold-border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group">
            <div className="relative">
              <img 
                src={deal.image} 
                alt={deal.name}
                className="w-full h-80 object-contain bg-gradient-to-b from-transparent to-black/10"
              />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 text-white font-bold text-xs px-3 py-1 animate-pulse">
                  {deal.status}
                </Badge>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-luxury-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                {deal.discount}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-luxury-gold font-black text-xl font-inter mb-3 uppercase tracking-wider">
                {deal.name}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-luxury-gold text-2xl font-black font-inter">
                    {deal.salePrice}
                  </span>
                  <span className="text-luxury-champagne/50 text-lg font-inter line-through">
                    {deal.originalPrice}
                  </span>
                </div>
              </div>

              <button className="w-full bg-luxury-gold text-black hover:bg-luxury-champagne transition-colors duration-300 font-bold font-inter text-sm uppercase tracking-wider py-3 rounded-lg">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotDealsSection;
