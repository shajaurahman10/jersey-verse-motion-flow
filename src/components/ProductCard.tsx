
import { useState } from 'react';
import { ShoppingCart, Heart, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductModal from './ProductModal';

interface ProductCardProps {
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
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
    console.log('Added to cart:', product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart();
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    console.log('Wishlist toggle:', product.id);
  };

  const handleCheckOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const handleInstagramOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  // Get the primary image or first image
  const primaryImage = product.product_images?.find(img => img.is_primary) || product.product_images?.[0];

  return (
    <>
      <div className="premium-glass gold-border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer bg-gradient-to-b from-black/80 to-black/90">
        <div className="relative">
          {/* Product Image */}
          <div className="w-full h-80 bg-gradient-to-b from-luxury-gold/5 to-black/10 flex items-center justify-center overflow-hidden">
            {primaryImage ? (
              <img 
                src={primaryImage.image_url} 
                alt={primaryImage.alt_text || product.name}
                className="w-full h-full object-cover rounded-t-2xl"
                onError={(e) => {
                  console.log('Image failed to load:', primaryImage.image_url);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-luxury-gold text-2xl">📷</span>
                </div>
                <p className="text-luxury-champagne/50 font-inter text-sm">No image available</p>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              onClick={handleWishlist}
              className={`transition-colors duration-300 p-2 ${
                isWishlisted 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-luxury-gold text-black hover:bg-luxury-champagne'
              }`}
              size="sm"
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Discount Badge */}
          {product.compare_at_price && product.compare_at_price > product.price && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)}% OFF
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Category/Brand */}
          {(product.categories?.name || product.brand) && (
            <p className="text-luxury-champagne/70 text-sm font-inter uppercase tracking-wider mb-2">
              {product.categories?.name || product.brand}
            </p>
          )}
          
          {/* Product Name */}
          <h3 className="text-luxury-gold font-black text-lg font-inter mb-3 uppercase tracking-wider line-clamp-2">
            {product.name}
          </h3>
          
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-3">
              {product.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="border-green-500 text-green-400 text-xs mr-2 mb-1">
                  {feature}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold text-2xl font-black font-inter">
                {formatPrice(product.price)}
              </span>
              {product.compare_at_price && product.compare_at_price > product.price && (
                <span className="text-luxury-champagne/50 text-lg font-inter line-through">
                  {formatPrice(product.compare_at_price)}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {/* Check Out Button */}
            <Button
              onClick={handleCheckOut}
              className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter text-sm uppercase tracking-wider"
            >
              CHECK OUT
            </Button>

            {/* Order Buttons Row */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={handleWhatsAppOrder}
                className="bg-green-600 hover:bg-green-700 text-white font-bold font-inter text-xs uppercase"
                size="sm"
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp
              </Button>
              <Button
                onClick={handleInstagramOrder}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold font-inter text-xs uppercase"
                size="sm"
              >
                <Instagram className="h-3 w-3 mr-1" />
                Instagram
              </Button>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-black border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-colors duration-300 font-bold font-inter text-sm uppercase tracking-wider"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
