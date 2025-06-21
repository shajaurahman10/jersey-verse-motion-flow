
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImage {
  image_url: string;
  alt_text?: string;
  is_primary: boolean;
  sort_order: number;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sort images by sort_order
  const sortedImages = images?.sort((a, b) => a.sort_order - b.sort_order) || [];
  const currentImage = sortedImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sortedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length);
  };

  if (sortedImages.length === 0) {
    return (
      <div className="space-y-4">
        <div className="w-full h-96 bg-gradient-to-b from-luxury-gold/10 to-black/10 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-luxury-gold/30">
          <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-luxury-gold text-2xl">📷</span>
          </div>
          <p className="text-luxury-champagne/70 font-inter text-lg mb-2">No Images Available</p>
          <p className="text-luxury-champagne/50 font-inter text-sm text-center px-4">
            Product images will be displayed here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative min-h-[400px]">
        <div className="relative w-full h-96 bg-black/20 rounded-lg overflow-hidden">
          <img 
            src={currentImage.image_url} 
            alt={currentImage.alt_text || productName}
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
                alt={image.alt_text || `${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
