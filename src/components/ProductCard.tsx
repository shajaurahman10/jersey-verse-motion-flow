
import { useState } from 'react';
import { Eye, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  // Get primary image or first image
  const primaryImage = product.product_images?.find(img => img.is_primary) 
    || product.product_images?.[0];

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Adding to cart:', product.id);
    // Cart functionality will be implemented
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    console.log('Wishlist toggle:', product.id);
  };

  return (
    <>
      <div className="premium-glass gold-border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer">
        <div className="relative">
          {primaryImage ? (
            <img 
              src={primaryImage.image_url} 
              alt={primaryImage.alt_text || product.name}
              className="w-full h-80 object-contain bg-gradient-to-b from-transparent to-black/10"
            />
          ) : (
            <div className="w-full h-80 bg-gradient-to-b from-luxury-gold/10 to-black/10 flex items-center justify-center">
              <p className="text-luxury-champagne/50 font-inter">No Image Available</p>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-luxury-gold text-black hover:bg-luxury-champagne transition-colors duration-300 p-2"
              size="sm"
            >
              <Eye className="h-4 w-4" />
            </Button>
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
          <h3 className="text-luxury-gold font-black text-xl font-inter mb-3 uppercase tracking-wider line-clamp-2">
            {product.name}
          </h3>
          
          {/* Team/Season Info */}
          {(product.team || product.season) && (
            <p className="text-luxury-champagne/80 text-sm font-inter mb-3">
              {[product.team, product.season].filter(Boolean).join(' • ')}
            </p>
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

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-luxury-gold text-black hover:bg-luxury-champagne transition-colors duration-300 font-bold font-inter text-sm uppercase tracking-wider"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
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
