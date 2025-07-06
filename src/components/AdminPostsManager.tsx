
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, Package, PackageX, RotateCcw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  deliveryCharge: number;
  productName: string;
  tags: string[];
  inStock: boolean;
  created_at: string;
}

const AdminPostsManager = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: posts = [], refetch, isLoading: postsLoading } = useQuery({
    queryKey: ['admin-posts-manager'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('instagram_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      
      return data.map(post => ({
        id: post.id,
        images: post.images,
        caption: post.caption,
        price: post.price,
        deliveryCharge: post.delivery_charge,
        productName: post.product_name,
        tags: post.tags || [],
        inStock: post.in_stock,
        created_at: post.created_at
      }));
    }
  });

  const handleStockUpdate = async (postId: string, newStockStatus: boolean) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('instagram_posts')
        .update({ in_stock: newStockStatus })
        .eq('id', postId);
      
      if (error) throw error;
      
      refetch();
    } catch (error) {
      console.error('Error updating stock:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('instagram_posts')
        .delete()
        .eq('id', postId);
      
      if (error) throw error;
      
      refetch();
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (postsLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-luxury-gold">Loading posts...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="premium-glass gold-border">
      <CardHeader>
        <CardTitle className="text-luxury-gold font-orbitron text-2xl">
          Posts Management
        </CardTitle>
        <p className="text-luxury-champagne/70 font-inter">
          Manage stock status and delete posts
        </p>
      </CardHeader>
      <CardContent>
        {posts.length === 0 ? (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-luxury-gold/50 mx-auto mb-4" />
            <p className="text-luxury-champagne/70">No posts found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-luxury-gold/30">
                  <TableHead className="text-luxury-gold">Product</TableHead>
                  <TableHead className="text-luxury-gold">Image</TableHead>
                  <TableHead className="text-luxury-gold">Price</TableHead>
                  <TableHead className="text-luxury-gold">Stock Status</TableHead>
                  <TableHead className="text-luxury-gold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id} className="border-luxury-gold/20">
                    <TableCell>
                      <div>
                        <div className="font-medium text-luxury-champagne">
                          {post.productName}
                        </div>
                        <div className="text-sm text-luxury-champagne/70 max-w-xs truncate">
                          {post.caption}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {post.images[0] && (
                        <img
                          src={post.images[0]}
                          alt={post.productName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-luxury-gold font-bold">
                        ₹{post.price.toLocaleString('en-IN')}
                      </div>
                      {post.deliveryCharge > 0 && (
                        <div className="text-sm text-luxury-champagne/70">
                          +₹{post.deliveryCharge} delivery
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={post.inStock ? "default" : "destructive"}
                        className={
                          post.inStock
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-red-600 hover:bg-red-700"
                        }
                      >
                        {post.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {post.inStock ? (
                          <Button
                            onClick={() => handleStockUpdate(post.id, false)}
                            disabled={isLoading}
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 text-white"
                          >
                            <PackageX className="h-4 w-4 mr-1" />
                            Stock Out
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleStockUpdate(post.id, true)}
                            disabled={isLoading}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Restock
                          </Button>
                        )}
                        <Button
                          onClick={() => handleDeletePost(post.id)}
                          disabled={isLoading}
                          size="sm"
                          variant="destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminPostsManager;
