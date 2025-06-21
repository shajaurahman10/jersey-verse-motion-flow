
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, MessageCircle, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

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
    features?: string[];
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
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('j90_cart') || '[]');
    const existingItem = existingCart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('j90_cart', JSON.stringify(existingCart));
    alert('Item added to cart!');
  };

  const handleWhatsAppOrder = () => {
    const message = `Hey I just checkout your jerseys from J90 and i loved this jersey ${product.name} (ID: ${product.id}) i would like to order it 

the details are according to the form
-jersey size:
-Name:
-Address:
-Pincode:
-Phone Number:

thank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90`;
    
    const whatsappUrl = `https://wa.me/918129913205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramOrder = () => {
    const message = `Hey I just checkout your jerseys from J90 and i loved this jersey ${product.name} (ID: ${product.id}) i would like to order it 

the details are according to the form
-jersey size:
-Name:
-Address:
-Pincode:
-Phone Number:

thank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90`;
    
    const instagramUrl = `https://www.instagram.com/j90_official`;
    window.open(instagramUrl, '_blank');
  };

  // Sort images by sort_order and get current image
  const sortedImages = product.product_images?.sort((a, b) => a.sort_order - b.sort_order) || [];
  const currentImage = sortedImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sortedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length);
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
            {/* Main Image Display */}
            <div className="relative min-h-[400px]">
              {sortedImages.length > 0 ? (
                <div className="relative w-full h-96 bg-black/20 rounded-lg overflow-hidden">
                  <img 
                    src={currentImage.image_url} 
                    alt={currentImage.alt_text || product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', currentImage.image_url);
                    }}
                  />
                  
                  {/* Navigation arrows */}
                  {sortedImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Image counter */}
                  {sortedImages.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {currentImageIndex + 1} / {sortedImages.length}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-96 bg-gradient-to-b from-luxury-gold/10 to-black/10 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-luxury-gold/30">
                  <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-luxury-gold text-2xl">📷</span>
                  </div>
                  <p className="text-luxury-champagne/70 font-inter text-lg mb-2">No Images Available</p>
                  <p className="text-luxury-champagne/50 font-inter text-sm text-center px-4">
                    Product images will be displayed here
                  </p>
                </div>
              )}
            </div>

            {/* Image Thumbnails Grid */}
            {sortedImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {sortedImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded border-2 overflow-hidden transition-all ${
                      currentImageIndex === index 
                        ? 'border-luxury-gold shadow-lg' 
                        : 'border-luxury-gold/20 hover:border-luxury-gold/50'
                    }`}
                  >
                    <img 
                      src={image.image_url} 
                      alt={image.alt_text || `${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
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

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h4 className="text-luxury-gold font-bold font-inter text-lg mb-3">Features</h4>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-luxury-champagne font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
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

              {/* Add to Cart */}
              <Button
                onClick={addToCart}
                className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter py-3"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
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
