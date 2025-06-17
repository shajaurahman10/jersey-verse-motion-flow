
import { Shield, Zap, Star, Truck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "AUTHENTIC JERSEYS",
      description: "100% authentic jerseys from official suppliers with verification guarantee"
    },
    {
      icon: Zap,
      title: "LIGHTNING DELIVERY",
      description: "Express shipping worldwide with 24-48 hour delivery in major cities"
    },
    {
      icon: Star,
      title: "PREMIUM QUALITY",
      description: "High-grade materials and perfect fit guaranteed for ultimate comfort"
    },
    {
      icon: Truck,
      title: "FREE SHIPPING",
      description: "Free worldwide shipping on orders above $100 with package tracking"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-sedgwick text-white mb-4 animate-glow-pulse">
            WHY CHOOSE US
          </h2>
          <p className="text-xl text-gray-300 font-orbitron">
            ELEVATE YOUR GAME WITH PREMIUM JERSEYS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-lg rounded-lg p-8 text-center hover:scale-105 transition-all duration-300 neon-border group hover:futuristic-glow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-6 group-hover:animate-pulse">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-orbitron">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
