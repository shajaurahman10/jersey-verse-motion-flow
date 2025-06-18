
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, X, ChevronLeft, ChevronRight, MessageCircle, Instagram, Globe } from 'lucide-react';

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    price: number;
    compare_at_price?: number;
    brand?: string;
    team?: string;
    season?: string;
    description?: string;
    product_images?: Array<{
      image_url: string;
      alt_text?: string;
      is_primary: boolean;
      sort_order: number;
    }>;
    categories?: {
      name: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = product.product_images?.sort((a, b) => a.sort_order - b.sort_order) || [];
  const currentImage = images[currentImageIndex];

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hey JERSEYSTWR! I would love to purchase Product ID: ${product.id} - ${product.name}`;
    const whatsappUrl = `https://wa.me/918129913205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramOrder = () => {
    const message = `Hey JERSEYSTWR! I would love to purchase Product ID: ${product.id} - ${product.name}`;
    const instagramUrl = `https://www.instagram.com/jerseystwr?igsh=MWZ6ZXppMW9xZmlobQ==`;
    // Copy message to clipboard for Instagram
    navigator.clipboard.writeText(message);
    window.open(instagramUrl, '_blank');
    alert('Message copied to clipboard! Paste it in Instagram DM.');
  };

  const handleWebsiteOrder = () => {
    console.log('Website order for:', product.id);
    alert('Website ordering system will be implemented soon!');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto premium-glass gold-border">
        <DialogHeader>
          <DialogTitle className="text-luxury-gold font-orbitron text-2xl font-bold uppercase tracking-wider">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            {currentImage ? (
              <div className="relative">
                <img
                  src={currentImage.image_url}
                  alt={currentImage.alt_text || product.name}
                  className="w-full h-96 object-contain rounded-lg bg-gradient-to-b from-transparent to-black/10"
                />
                
                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-luxury-gold/80 hover:bg-luxury-gold text-black p-2"
                      size="sm"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-luxury-gold/80 hover:bg-luxury-gold text-black p-2"
                      size="sm"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Discount Badge */}
                {product.compare_at_price && product.compare_at_price > product.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)}% OFF
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-96 bg-gradient-to-b from-luxury-gold/10 to-black/10 rounded-lg flex items-center justify-center">
                <p className="text-luxury-champagne/50 font-inter">No Images Available</p>
              </div>
            )}

            {/* Image Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-luxury-gold' 
                        : 'border-luxury-champagne/30 hover:border-luxury-gold/50'
                    }`}
                  >
                    <img
                      src={image.image_url}
                      alt={image.alt_text || `${product.name} ${index + 1}`}
                      className="w-full h-full object-contain rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category/Brand */}
            {(product.categories?.name || product.brand) && (
              <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                {product.categories?.name || product.brand}
              </Badge>
            )}

            {/* Team/Season */}
            {(product.team || product.season) && (
              <p className="text-luxury-champagne font-inter text-lg">
                {[product.team, product.season].filter(Boolean).join(' • ')}
              </p>
            )}

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-luxury-gold text-4xl font-black font-inter">
                {formatPrice(product.price)}
              </span>
              {product.compare_at_price && product.compare_at_price > product.price && (
                <span className="text-luxury-champagne/50 text-2xl font-inter line-through">
                  {formatPrice(product.compare_at_price)}
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h4 className="text-luxury-gold font-bold font-inter text-lg mb-2">Description</h4>
                <p className="text-luxury-champagne/90 font-inter leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Product ID */}
            <div className="text-luxury-champagne/70 font-inter text-sm">
              Product ID: {product.id}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <h4 className="text-luxury-gold font-bold font-inter text-lg">Order Options</h4>
              
              {/* WhatsApp Order */}
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold font-inter py-3"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Order via WhatsApp
              </Button>

              {/* Instagram Order */}
              <Button
                onClick={handleInstagramOrder}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold font-inter py-3"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Order via Instagram
              </Button>

              {/* Website Order */}
              <Button
                onClick={handleWebsiteOrder}
                className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter py-3"
              >
                <Globe className="h-5 w-5 mr-2" />
                Order via Website
              </Button>

              {/* Add to Wishlist */}
              <Button
                onClick={() => setIsWishlisted(!isWishlisted)}
                variant="outline"
                className={`w-full border-luxury-gold transition-colors duration-300 ${
                  isWishlisted 
                    ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' 
                    : 'text-luxury-gold hover:bg-luxury-gold hover:text-black'
                }`}
              >
                <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
