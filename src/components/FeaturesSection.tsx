
import { Crown, Shield, Truck, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Crown,
      title: "EXCLUSIVE ACCESS",
      description: "Limited edition jerseys and exclusive collections available only to our discerning clientele"
    },
    {
      icon: Shield,
      title: "AUTHENTICITY GUARANTEED",
      description: "Each jersey comes with certificate of authenticity and lifetime guarantee of genuineness"
    },
    {
      icon: Clock,
      title: "CONCIERGE SERVICE",
      description: "Personal shopping assistance and 24/7 premium customer support for your convenience"
    },
    {
      icon: Truck,
      title: "WHITE GLOVE DELIVERY",
      description: "Complimentary worldwide express shipping with luxury packaging and tracking"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold font-sedgwick luxury-text mb-8 animate-gold-shimmer">
            THE JERSEYSTWR EXPERIENCE
          </h2>
          <p className="text-xl text-luxury-champagne/80 font-inter font-light tracking-[0.15em] uppercase max-w-3xl mx-auto">
            Where craftsmanship meets passion, and every jersey tells a story of excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="premium-glass rounded-xl p-8 text-center hover:scale-105 transition-all duration-700 gold-border group hover:luxury-glow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-champagne rounded-full mb-8 group-hover:animate-pulse">
                <feature.icon className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-luxury-champagne mb-6 font-inter tracking-wider uppercase">
                {feature.title}
              </h3>
              <p className="text-luxury-champagne/70 font-inter leading-relaxed">
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
