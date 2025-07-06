
-- Create a table for Instagram posts that will be visible to everyone
CREATE TABLE public.instagram_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  images TEXT[] NOT NULL,
  caption TEXT NOT NULL,
  price NUMERIC NOT NULL,
  delivery_charge NUMERIC NOT NULL DEFAULT 0,
  product_name TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.instagram_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read posts (public visibility)
CREATE POLICY "Anyone can view posts" 
  ON public.instagram_posts 
  FOR SELECT 
  USING (true);

-- Create policy to allow anyone to insert posts (for now, we'll restrict this later if needed)
CREATE POLICY "Anyone can create posts" 
  ON public.instagram_posts 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow anyone to update posts (for now, we'll restrict this later if needed)
CREATE POLICY "Anyone can update posts" 
  ON public.instagram_posts 
  FOR UPDATE 
  USING (true);

-- Create policy to allow anyone to delete posts (for now, we'll restrict this later if needed)
CREATE POLICY "Anyone can delete posts" 
  ON public.instagram_posts 
  FOR DELETE 
  USING (true);
