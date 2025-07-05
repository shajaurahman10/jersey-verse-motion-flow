
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  deliveryCharge: number;
  productName: string;
  tags: string[];
}

interface CollectionPostCardProps {
  post: InstagramPost;
}

const CollectionPostCard = ({ post }: CollectionPostCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
  };

  const totalPrice = post.price + (post.deliveryCharge || 0);

  const handleWhatsAppOrder = () => {
    const message = `Hey! I'm interested in ordering "${post.productName}" from J90 Kits.

Product Price: ₹${post.price.toLocaleString('en-IN')}
Delivery Charge: ₹${(post.deliveryCharge || 0).toLocaleString('en-IN')}
Total Price: ₹${totalPrice.toLocaleString('en-IN')}

Please let me know:
- Available sizes
- Delivery details
- Payment options

Thank you!`;
    
    const whatsappUrl = `https://wa.me/918129913205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="premium-glass gold-border rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      {/* Image Section */}
      <div className="relative">
        <div className="aspect-square bg-black overflow-hidden">
          <img
            src={post.images[currentImageIndex]}
            alt={post.productName}
            className="w-full h-full object-cover"
          />
          
          {post.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {post.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-luxury-gold font-orbitron text-xl font-bold mb-2">
          {post.productName}
        </h3>
        
        <p className="text-luxury-champagne/80 font-inter text-sm mb-4 line-clamp-2">
          {post.caption}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-luxury-gold text-xs px-2 py-1 bg-luxury-gold/10 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Price Breakdown */}
        <div className="bg-luxury-gold/10 rounded-lg p-3 mb-4">
          <div className="text-luxury-champagne text-sm space-y-1">
            <div className="flex justify-between">
              <span>Product Price:</span>
              <span className="text-luxury-gold">₹{post.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge:</span>
              <span className="text-luxury-gold">₹{(post.deliveryCharge || 0).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t border-luxury-gold/30 pt-1">
              <span>Total Price:</span>
              <span className="text-luxury-gold">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Buy Button */}
        <Button
          onClick={handleWhatsAppOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold font-inter py-2"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default CollectionPostCard;
