
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import { Session, User } from '@supabase/supabase-js';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Redirect authenticated users to home
        if (session?.user) {
          setTimeout(() => {
            navigate('/');
          }, 100);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { error };
  };

  const handleSignIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { error };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = isSignUp 
        ? await handleSignUp(email, password)
        : await handleSignIn(email, password);

      if (error) {
        if (error.message.includes('User already registered')) {
          setError('This email is already registered. Please sign in instead.');
        } else if (error.message.includes('Invalid login credentials')) {
          setError('Invalid email or password. Please check your credentials.');
        } else {
          setError(error.message);
        }
      } else if (isSignUp) {
        setError('Please check your email for a confirmation link.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  // If user is authenticated, show signed in state
  if (user) {
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        
        <section className="pt-32 pb-20">
          <div className="max-w-md mx-auto px-8">
            <div className="premium-glass rounded-2xl p-8 gold-border text-center">
              <h1 className="font-orbitron text-3xl font-bold luxury-text mb-6">
                Welcome to J90!
              </h1>
              
              <p className="text-luxury-champagne mb-6 font-inter">
                You are signed in as: {user.email}
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={() => navigate('/collection')}
                  className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter"
                >
                  Browse Collection
                </Button>
                
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black"
                >
                  Sign Out
                </Button>
              </div>
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
      
      <section className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-8">
          <div className="premium-glass rounded-2xl p-8 gold-border">
            <h1 className="font-orbitron text-3xl font-bold luxury-text mb-8 text-center">
              {isSignUp ? 'Join J90' : 'Welcome Back'}
            </h1>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-luxury-gold font-inter">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                disabled={loading}
                className="w-full bg-luxury-gold hover:bg-luxury-champagne text-black font-bold font-inter"
              >
                {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-luxury-gold hover:text-luxury-champagne transition-colors font-inter"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
