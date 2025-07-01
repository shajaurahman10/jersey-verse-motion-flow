
import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InstagramPostCreator from '@/components/InstagramPostCreator';
import InstagramFeedCard from '@/components/InstagramFeedCard';
import { Button } from '@/components/ui/button';
import { Plus, Grid3X3, User } from 'lucide-react';

interface InstagramPost {
  id: string;
  images: string[];
  caption: string;
  price: number;
  productName: string;
  tags: string[];
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [showCreator, setShowCreator] = useState(false);
  const [activeTab, setActiveTab] = useState<'feed' | 'create'>('feed');

  const handlePostCreated = (newPost: InstagramPost) => {
    setPosts(prev => [newPost, ...prev]);
    setShowCreator(false);
    setActiveTab('feed');
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black luxury-text mb-3 sm:mb-4 md:mb-6 animate-gold-shimmer tracking-[0.05em] uppercase">
              J90 KITS FEED
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-luxury-champagne/90 mb-4 sm:mb-6 font-inter font-light tracking-[0.1em] uppercase">
              Instagram Style Product Feed
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="premium-glass gold-border rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab('feed')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-inter font-semibold transition-all ${
                  activeTab === 'feed'
                    ? 'bg-luxury-gold text-black'
                    : 'text-luxury-champagne hover:text-luxury-gold'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
                Feed
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-inter font-semibold transition-all ${
                  activeTab === 'create'
                    ? 'bg-luxury-gold text-black'
                    : 'text-luxury-champagne hover:text-luxury-gold'
                }`}
              >
                <Plus className="h-4 w-4" />
                Create Post
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'create' ? (
            <InstagramPostCreator onPostCreated={handlePostCreated} />
          ) : (
            <div className="space-y-8">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="text-luxury-gold font-orbitron text-2xl font-bold mb-2">
                    No Posts Yet
                  </h3>
                  <p className="text-luxury-champagne/70 font-inter mb-6">
                    Create your first Instagram-style product post to get started!
                  </p>
                  <Button
                    onClick={() => setActiveTab('create')}
                    className="bg-luxury-gold text-black hover:bg-luxury-champagne font-bold"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Post
                  </Button>
                </div>
              ) : (
                <div className="grid gap-8">
                  {posts.map((post) => (
                    <InstagramFeedCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramFeed;
