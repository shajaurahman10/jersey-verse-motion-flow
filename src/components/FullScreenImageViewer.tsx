
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductImage {
  image_url: string;
  alt_text?: string;
  is_primary: boolean;
  sort_order: number;
}

interface FullScreenImageViewerProps {
  images: ProductImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const FullScreenImageViewer = ({ 
  images, 
  initialIndex, 
  isOpen, 
  onClose, 
  productName 
}: FullScreenImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const sortedImages = images?.sort((a, b) => a.sort_order - b.sort_order) || [];
  const currentImage = sortedImages[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <Button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
        size="sm"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* Navigation Arrows */}
      {sortedImages.length > 1 && (
        <>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            size="sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            size="sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Image Counter */}
      {sortedImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {sortedImages.length}
        </div>
      )}

      {/* Main Image */}
      <div 
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={currentImage?.image_url} 
          alt={currentImage?.alt_text || productName}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{ imageRendering: 'high-quality' }}
        />
      </div>

      {/* Image Thumbnails */}
      {sortedImages.length > 1 && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto">
          {sortedImages.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                currentIndex === index 
                  ? 'border-luxury-gold shadow-lg' 
                  : 'border-white/30 hover:border-white/60'
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

export default FullScreenImageViewer;
