
import { Badge } from '@/components/ui/badge';

interface ProductDetailsProps {
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
    categories?: {
      name: string;
    };
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
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
    </div>
  );
};

export default ProductDetails;
