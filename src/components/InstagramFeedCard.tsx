
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  productName: string;
  tags: string[];
}

interface InstagramFeedCardProps {
  post: InstagramPost;
}

const InstagramFeedCard = ({ post }: InstagramFeedCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hey! I'm interested in ordering "${post.productName}" for ₹${post.price.toLocaleString('en-IN')} from J90 Kits.

Please let me know:
- Available sizes
- Delivery details
- Payment options

Thank you!`;
    
    const whatsappUrl = `https://wa.me/918129913205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatCaption = (caption: string) => {
    const shortCaption = caption.slice(0, 100);
    return showFullCaption ? caption : shortCaption + (caption.length > 100 ? '...' : '');
  };

  return (
    <div className="premium-glass gold-border rounded-xl overflow-hidden max-w-md mx-auto bg-gradient-to-b from-black/90 to-black/95">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-luxury-gold/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-champagne flex items-center justify-center">
            <span className="text-black font-bold text-sm">J90</span>
          </div>
          <span className="text-luxury-champagne font-inter font-semibold">j90kits</span>
        </div>
        <MoreHorizontal className="h-5 w-5 text-luxury-champagne" />
      </div>

      {/* Image Carousel */}
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
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full"
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

      {/* Actions */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="transition-colors"
          >
            <Heart
              className={`h-6 w-6 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-luxury-champagne'
              }`}
            />
          </button>
          <MessageCircle className="h-6 w-6 text-luxury-champagne" />
          <Share className="h-6 w-6 text-luxury-champagne" />
        </div>
      </div>

      {/* Price */}
      <div className="px-4 pb-2">
        <div className="text-luxury-gold text-3xl font-black font-inter">
          ₹{post.price.toLocaleString('en-IN')}
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <div className="text-luxury-champagne font-inter">
          <span className="font-semibold">j90kits</span>{' '}
          <span>{formatCaption(post.caption)}</span>
          {post.caption.length > 100 && (
            <button
              onClick={() => setShowFullCaption(!showFullCaption)}
              className="text-luxury-gold ml-1"
            >
              {showFullCaption ? 'less' : 'more'}
            </button>
          )}
        </div>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-luxury-gold text-sm">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Buy Button */}
      <div className="p-4 pt-0">
        <Button
          onClick={handleWhatsAppOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold font-inter py-3 text-lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default InstagramFeedCard;
