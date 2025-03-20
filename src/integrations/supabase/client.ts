
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://sgbixazmoprqrfvugqqi.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnYml4YXptb3BycXJmdnVncXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NTY0NDEsImV4cCI6MjA1NDMzMjQ0MX0.0zaITk13su7SB3eto6l-Flt2LAykIsDajWueKhr1VNM';

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
