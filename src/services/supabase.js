import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wpdxfjgpzszdnikrsmdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZHhmamdwenN6ZG5pa3JzbWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzM0MjgsImV4cCI6MjAyODc0OTQyOH0.Ym3j4u3t19bAjdQCIltmDn-DjhEO42FufrA4fE1oRGs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
