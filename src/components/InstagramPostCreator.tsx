
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Upload, X, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface InstagramPostCreatorProps {
  onPostCreated: () => void;
}

const InstagramPostCreator = ({ onPostCreated }: InstagramPostCreatorProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [caption, setCaption] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState('');
  const [productName, setProductName] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages(prev => [...prev, event.target.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags(prev => [...prev, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0 || !caption || !price || !productName || !deliveryCharge) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and upload at least one image",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('instagram_posts')
        .insert({
          images,
          caption,
          price: parseFloat(price),
          delivery_charge: parseFloat(deliveryCharge),
          product_name: productName,
          tags
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating post:', error);
        throw error;
      }

      toast({
        title: "Success!",
        description: "Post created successfully and is now visible to everyone worldwide!",
      });

      // Reset form
      setImages([]);
      setCaption('');
      setPrice('');
      setDeliveryCharge('');
      setProductName('');
      setTags([]);
      setNewTag('');
      
      // Notify parent component
      onPostCreated();

    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = (parseFloat(price) || 0) + (parseFloat(deliveryCharge) || 0);

  return (
    <Card className="premium-glass gold-border max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-luxury-gold font-orbitron text-2xl">Create New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <Label className="text-luxury-champagne font-inter text-lg mb-3 block">
              Images *
            </Label>
            <div className="border-2 border-dashed border-luxury-gold/30 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-12 w-12 text-luxury-gold mb-2" />
                <span className="text-luxury-champagne">Click to upload images</span>
              </label>
            </div>
            
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Name */}
          <div>
            <Label htmlFor="productName" className="text-luxury-champagne font-inter text-lg">
              Product Name *
            </Label>
            <Input
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name..."
              className="mt-2 bg-black/20 border-luxury-gold/30 text-luxury-champagne"
              required
            />
          </div>

          {/* Caption */}
          <div>
            <Label htmlFor="caption" className="text-luxury-champagne font-inter text-lg">
              Caption *
            </Label>
            <Textarea
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your Instagram-style caption..."
              rows={4}
              className="mt-2 bg-black/20 border-luxury-gold/30 text-luxury-champagne"
              required
            />
          </div>

          {/* Price */}
          <div>
            <Label htmlFor="price" className="text-luxury-champagne font-inter text-lg">
              Product Price (₹) *
            </Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price..."
              className="mt-2 bg-black/20 border-luxury-gold/30 text-luxury-champagne"
              required
            />
          </div>

          {/* Delivery Charge */}
          <div>
            <Label htmlFor="deliveryCharge" className="text-luxury-champagne font-inter text-lg">
              Delivery Charge (₹) *
            </Label>
            <Input
              id="deliveryCharge"
              type="number"
              value={deliveryCharge}
              onChange={(e) => setDeliveryCharge(e.target.value)}
              placeholder="Enter delivery charge..."
              className="mt-2 bg-black/20 border-luxury-gold/30 text-luxury-champagne"
              required
            />
          </div>

          {/* Total Price Display */}
          {(price || deliveryCharge) && (
            <div className="bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg p-4">
              <div className="text-luxury-gold font-inter">
                <div className="flex justify-between mb-2">
                  <span>Product Price:</span>
                  <span>₹{(parseFloat(price) || 0).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery Charge:</span>
                  <span>₹{(parseFloat(deliveryCharge) || 0).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-luxury-gold/30 pt-2">
                  <span>Total Price:</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <Label className="text-luxury-champagne font-inter text-lg">Tags</Label>
            <div className="flex gap-2 mt-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag..."
                className="bg-black/20 border-luxury-gold/30 text-luxury-champagne"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button
                type="button"
                onClick={addTag}
                className="bg-luxury-gold text-black hover:bg-luxury-champagne"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-luxury-gold text-black hover:bg-luxury-champagne font-bold text-lg py-3"
          >
            {isSubmitting ? 'Creating Post...' : 'Create Post'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InstagramPostCreator;
