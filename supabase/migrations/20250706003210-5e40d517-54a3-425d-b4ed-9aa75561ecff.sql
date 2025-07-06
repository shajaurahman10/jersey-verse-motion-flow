
-- Add in_stock column to instagram_posts table
ALTER TABLE public.instagram_posts 
ADD COLUMN in_stock BOOLEAN NOT NULL DEFAULT true;
