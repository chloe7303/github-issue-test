import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://wsknhbcixphhxnwfgeeh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza25oYmNpeHBoaHhud2ZnZWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1NzI4MzEsImV4cCI6MTk3OTE0ODgzMX0.jzVCnvHHGQeaMfhvbxFsIC5HvoLZ1Nmj7Gsynh5E2S4'
);

export { supabase };
