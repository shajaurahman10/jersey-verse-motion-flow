
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import InstagramPostCreator from '@/components/InstagramPostCreator';
import { Lock, User, LogOut } from 'lucide-react';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  deliveryCharge: number;
  productName: string;
  tags: string[];
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsLoggedIn(true);
    }

    // Load existing posts from localStorage
    const savedPosts = localStorage.getItem('instagramPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'j90ceo' && password === 'jersey123') {
      setIsLoggedIn(true);
      localStorage.setItem('adminLoggedIn', 'true');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
    setUsername('');
    setPassword('');
  };

  const handlePostCreated = (newPost: InstagramPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('instagramPosts', JSON.stringify(updatedPosts));
  };

  // Calculate total value including delivery charges
  const totalProductValue = posts.reduce((acc, post) => acc + post.price, 0);
  const totalDeliveryValue = posts.reduce((acc, post) => acc + (post.deliveryCharge || 0), 0);
  const totalValue = totalProductValue + totalDeliveryValue;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        
        <section className="pt-32 pb-20">
          <div className="max-w-md mx-auto px-8">
            <div className="premium-glass rounded-2xl p-8 gold-border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-luxury-gold" />
                </div>
                <h1 className="font-orbitron text-3xl font-bold luxury-text mb-2">
                  Admin Access
                </h1>
                <p className="text-luxury-champagne/70 font-inter">
                  Sign in to manage your Instagram feed
                </p>
              </div>
              
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="username" className="text-luxury-gold font-inter">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-black/50 border-luxury-gold/30 text-luxury-champagne focus:border-luxury-gold"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-luxury-gold font-inter">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-black/50 border-luxury-gold/30 text-luxury-champagne focus:border-luxury-gold"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter"
                >
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-luxury-gold" />
              </div>
              <div>
                <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black luxury-text animate-gold-shimmer tracking-[0.05em] uppercase">
                  Admin Dashboard
                </h1>
                <p className="text-base sm:text-lg text-luxury-champagne/90 font-inter font-light tracking-[0.1em] uppercase">
                  Manage Your Instagram Feed
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="premium-glass gold-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">{posts.length}</div>
              <div className="text-luxury-champagne font-inter">Total Posts</div>
            </div>
            <div className="premium-glass gold-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                {posts.reduce((acc, post) => acc + post.images.length, 0)}
              </div>
              <div className="text-luxury-champagne font-inter">Total Images</div>
            </div>
            <div className="premium-glass gold-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                ₹{totalProductValue.toLocaleString('en-IN')}
              </div>
              <div className="text-luxury-champagne font-inter">Product Value</div>
            </div>
            <div className="premium-glass gold-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                ₹{totalValue.toLocaleString('en-IN')}
              </div>
              <div className="text-luxury-champagne font-inter">Total Value</div>
            </div>
          </div>

          {/* Post Creator */}
          <InstagramPostCreator onPostCreated={handlePostCreated} />
        </div>
      </section>
    </div>
  );
};

export default Admin;
