-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT FALSE,
  confirmation_token UUID DEFAULT uuid_generate_v4(),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Blog post comments table
CREATE TABLE blog_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_slug TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved BOOLEAN DEFAULT FALSE,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Blog post likes/reactions
CREATE TABLE blog_reactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_slug TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  reaction_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_slug, user_id)
);

-- Row level security policies
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_reactions ENABLE ROW LEVEL SECURITY;

-- Policies for newsletter_subscribers
CREATE POLICY "Allow public insert to newsletter_subscribers" 
  ON newsletter_subscribers FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow service role to manage newsletter_subscribers" 
  ON newsletter_subscribers 
  USING (auth.role() = 'service_role');

-- Policies for blog_comments
CREATE POLICY "Allow authenticated users to insert comments" 
  ON blog_comments FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow users to read approved comments" 
  ON blog_comments FOR SELECT 
  USING (approved = true OR auth.uid() = user_id);

CREATE POLICY "Allow users to update their own comments" 
  ON blog_comments FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow service role to manage all comments" 
  ON blog_comments 
  USING (auth.role() = 'service_role');

-- Policies for blog_reactions
CREATE POLICY "Allow authenticated users to manage their reactions" 
  ON blog_reactions 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow anyone to view reactions" 
  ON blog_reactions FOR SELECT 
  USING (true);
