
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  brand?: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (isOpen) {
      const cart = JSON.parse(localStorage.getItem('j90_cart') || '[]');
      setCartItems(cart);
    }
  }, [isOpen]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('j90_cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('j90_cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto premium-glass gold-border">
        <DialogHeader>
          <DialogTitle className="text-luxury-gold font-orbitron text-2xl font-bold uppercase tracking-wider">
            Shopping Cart
          </DialogTitle>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-luxury-champagne/70 text-lg font-inter">Your cart is empty</p>
            <Button 
              onClick={onClose}
              className="mt-4 bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 premium-glass rounded-lg border border-luxury-gold/30">
                <div className="flex-1">
                  <h4 className="text-luxury-gold font-bold font-inter">{item.name}</h4>
                  {item.brand && (
                    <p className="text-luxury-champagne/70 text-sm font-inter">{item.brand}</p>
                  )}
                  <p className="text-luxury-gold font-bold">{formatPrice(item.price)}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    size="sm"
                    className="bg-luxury-gold/20 hover:bg-luxury-gold/40 text-luxury-gold p-1"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  
                  <span className="text-luxury-champagne font-bold min-w-[2ch] text-center">
                    {item.quantity}
                  </span>
                  
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    size="sm"
                    className="bg-luxury-gold/20 hover:bg-luxury-gold/40 text-luxury-gold p-1"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  
                  <Button
                    onClick={() => removeItem(item.id)}
                    size="sm"
                    className="bg-red-500/20 hover:bg-red-500/40 text-red-400 p-1 ml-2"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="border-t border-luxury-gold/30 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-luxury-gold text-xl font-bold font-inter">Total:</span>
                <span className="text-luxury-gold text-2xl font-black font-inter">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
              
              <Button
                className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter py-3"
                onClick={() => {
                  const message = `Hey J90! I want to checkout my cart with ${cartItems.length} items. Total: ${formatPrice(getTotalPrice())}

Items:
${cartItems.map(item => `- ${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`).join('\n')}

the details are according to the form
-jersey size:
-Name:
-Address:
-Pincode:
-Phone Number:

thank you for shopping with j90, A confirmation message will come to you within 24 hours from our team, much love j90`;
                  
                  const whatsappUrl = `https://wa.me/918129913205?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Checkout via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
