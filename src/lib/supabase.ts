import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing Supabase URL or Anon Key');
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default supabase;            
//creates a reusable supabase cient that connects to my project
//validates that environment variables are present
//exports the client so you can use it throughout your application
