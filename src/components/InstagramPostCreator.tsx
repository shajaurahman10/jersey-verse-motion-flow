
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Upload, X, Plus } from 'lucide-react';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  productName: string;
  tags: string[];
}

interface InstagramPostCreatorProps {
  onPostCreated: (post: InstagramPost) => void;
}

const InstagramPostCreator = ({ onPostCreated }: InstagramPostCreatorProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [caption, setCaption] = useState('');
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0 || !caption || !price || !productName) {
      alert('Please fill in all required fields and upload at least one image');
      return;
    }

    const newPost: InstagramPost = {
      id: Date.now().toString(),
      images,
      caption,
      price: parseFloat(price),
      productName,
      tags
    };

    onPostCreated(newPost);
    
    // Reset form
    setImages([]);
    setCaption('');
    setPrice('');
    setProductName('');
    setTags([]);
    setNewTag('');
  };

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
              Price (₹) *
            </Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price..."
              className="mt-2 bg-black/20 border-luxury-gold/30 text-luxury-champagne"
              required
            />
          </div>

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
            className="w-full bg-luxury-gold text-black hover:bg-luxury-champagne font-bold text-lg py-3"
          >
            Create Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InstagramPostCreator;
