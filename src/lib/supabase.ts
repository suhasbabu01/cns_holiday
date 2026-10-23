import { createClient } from '@supabase/supabase-js';

/**
 * Supabase project credentials.
 *
 * These keys are safe to expose in the browser: the publishable/anon key only
 * grants the access allowed by the table's Row Level Security policies.
 * Values can be overridden with VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY.
 */
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://apzsazfjmxmsvumjgknl.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_LvE_FgwzO8FtcpcRdGvQBg_i8-mbW_m';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
