import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share, MoreHorizontal, ChevronLeft, ChevronRight, Package, ShoppingCart } from 'lucide-react';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  deliveryCharge: number;
  productName: string;
  tags: string[];
  inStock: boolean;
}

interface InstagramFeedCardProps {
  post: InstagramPost;
  isAdmin?: boolean;
  onStockToggle?: (postId: string, currentStock: boolean) => void;
  onAddToCart?: (post: InstagramPost) => void;
  isDesktop?: boolean;
}

const InstagramFeedCard = ({ post, isAdmin = false, onStockToggle, onAddToCart, isDesktop = false }: InstagramFeedCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
  };

  const totalPrice = post.price + (post.deliveryCharge || 0);

  const handleWhatsAppOrder = () => {
    if (!post.inStock) return;
    
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

  const formatCaption = (caption: string) => {
    const maxLength = isDesktop ? 60 : 100;
    const shortCaption = caption.slice(0, maxLength);
    return showFullCaption ? caption : shortCaption + (caption.length > maxLength ? '...' : '');
  };

  const handleStockToggle = () => {
    if (isAdmin && onStockToggle) {
      onStockToggle(post.id, post.inStock);
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart && post.inStock) {
      onAddToCart(post);
    }
  };

  const cardClasses = isDesktop 
    ? "premium-glass gold-border rounded-xl overflow-hidden max-w-sm bg-gradient-to-b from-black/90 to-black/95" 
    : "premium-glass gold-border rounded-xl overflow-hidden max-w-md mx-auto bg-gradient-to-b from-black/90 to-black/95";

  const outOfStockOverlay = !post.inStock && (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-10">
      <div className="text-center">
        <Package className="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <div className="text-gray-300 font-bold text-lg">OUT OF STOCK</div>
      </div>
    </div>
  );

  return (
    <div className={`${cardClasses} ${!post.inStock ? 'grayscale opacity-75' : ''} relative`}>
      {outOfStockOverlay}
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-luxury-gold/20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-champagne flex items-center justify-center">
            <span className="text-black font-bold text-xs">J90</span>
          </div>
          <span className="text-luxury-champagne font-inter font-semibold text-sm">j90kits</span>
        </div>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <Button
              onClick={handleStockToggle}
              variant="outline"
              size="sm"
              className={`text-xs ${
                post.inStock 
                  ? 'border-green-500 text-green-400 hover:bg-green-500/20' 
                  : 'border-red-500 text-red-400 hover:bg-red-500/20'
              }`}
            >
              {post.inStock ? 'In Stock' : 'Out of Stock'}
            </Button>
          )}
          <MoreHorizontal className="h-4 w-4 text-luxury-champagne" />
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative">
        <div className={`${isDesktop ? 'aspect-square' : 'aspect-square'} bg-black overflow-hidden`}>
          <img
            src={post.images[currentImageIndex]}
            alt={post.productName}
            className="w-full h-full object-cover"
          />
          
          {post.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full"
              >
                <ChevronLeft className="h-3 w-3" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full"
              >
                <ChevronRight className="h-3 w-3" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {post.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
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
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-luxury-champagne'
              }`}
            />
          </button>
          <MessageCircle className="h-5 w-5 text-luxury-champagne" />
          <Share className="h-5 w-5 text-luxury-champagne" />
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="px-3 pb-2">
        <div className="bg-luxury-gold/10 rounded-lg p-2 mb-2">
          <div className={`text-luxury-champagne ${isDesktop ? 'text-xs' : 'text-sm'} space-y-1`}>
            <div className="flex justify-between">
              <span>Product Price:</span>
              <span className="text-luxury-gold">₹{post.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge:</span>
              <span className="text-luxury-gold">₹{(post.deliveryCharge || 0).toLocaleString('en-IN')}</span>
            </div>
            <div className={`flex justify-between font-bold ${isDesktop ? 'text-sm' : 'text-lg'} border-t border-luxury-gold/30 pt-1`}>
              <span>Total Price:</span>
              <span className="text-luxury-gold">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="px-3 pb-3">
        <div className={`text-luxury-champagne font-inter ${isDesktop ? 'text-xs' : 'text-sm'}`}>
          <span className="font-semibold">j90kits</span>{' '}
          <span>{formatCaption(post.caption)}</span>
          {post.caption.length > (isDesktop ? 60 : 100) && (
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
          <div className="flex flex-wrap gap-1 mt-1">
            {post.tags.slice(0, isDesktop ? 2 : 4).map((tag, index) => (
              <span key={index} className={`text-luxury-gold ${isDesktop ? 'text-xs' : 'text-sm'}`}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-3 pt-0 space-y-2">
        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!post.inStock}
          className={`w-full font-bold font-inter ${isDesktop ? 'py-2 text-sm' : 'py-3 text-lg'} ${
            post.inStock 
              ? 'bg-luxury-gold hover:bg-luxury-champagne text-black' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className={`${isDesktop ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />
          {post.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>

        {/* WhatsApp Order Button */}
        <Button
          onClick={handleWhatsAppOrder}
          disabled={!post.inStock}
          className={`w-full font-bold font-inter ${isDesktop ? 'py-2 text-sm' : 'py-3 text-lg'} ${
            post.inStock 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          <MessageCircle className={`${isDesktop ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />
          {post.inStock ? 'Order via WhatsApp' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};

export default InstagramFeedCard;
