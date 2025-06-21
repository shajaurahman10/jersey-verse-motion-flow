
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, MessageCircle, Instagram } from 'lucide-react';

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

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

  return (
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
  );
};

export default ProductActions;
