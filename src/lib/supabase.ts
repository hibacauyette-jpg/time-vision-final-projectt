import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Helpful debug logs so you can verify values in the browser console during dev
console.log('VITE_SUPABASE_URL:', supabaseUrl ? '[set]' : '[missing]');
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '[set]' : '[missing]');

let supabaseClient: any = null;

if (!supabaseUrl || !supabaseAnonKey) {
  // Do not throw in dev — provide a minimal stub to avoid crashing the app.
  // This lets you develop UI while you populate real env vars.
  console.warn(
    'Missing Supabase env vars — Supabase is disabled in this session. Create a .env with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then restart the dev server.'
  );

  supabaseClient = {
    auth: {
      signIn: async () => ({ data: null, error: new Error('Supabase not configured') }),
      signOut: async () => ({ error: new Error('Supabase not configured') }),
      user: () => null,
    },
    from: (_table: string) => ({
      select: async () => ({ data: null, error: new Error('Supabase not configured') }),
      insert: async () => ({ data: null, error: new Error('Supabase not configured') }),
      update: async () => ({ data: null, error: new Error('Supabase not configured') }),
      delete: async () => ({ data: null, error: new Error('Supabase not configured') }),
    }),
  } as any;
} else {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseClient;
