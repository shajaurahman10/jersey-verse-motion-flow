
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProductImageGallery from './ProductImageGallery';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';

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
          <ProductImageGallery 
            images={product.product_images || []} 
            productName={product.name} 
          />

          {/* Product Details and Actions */}
          <div className="space-y-6">
            <ProductDetails product={product} />
            <ProductActions product={product} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
