
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const supabaseUrl = "https://nucpepnorgppteisbptj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51Y3BlcG5vcmdwcHRlaXNicHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDM4NDIsImV4cCI6MjA1NTYxOTg0Mn0.XUZ-3t7nHlSafiJbgqrooUrQrBLrNGytWTkcl4gDJ1U";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
