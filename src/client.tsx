import { createClient } from '@supabase/supabase-js';

const url =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SUPABASE_URL
    : process.env.REACT_APP_DEV_SUPABASE_URL;

const key =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SUPABASE_KEY
    : process.env.REACT_APP_DEV_SUPABASE_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(url as string, key as string);

export { supabase };
