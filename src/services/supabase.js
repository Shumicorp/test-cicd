import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lbcxdkiprbcmahvxppse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiY3hka2lwcmJjbWFodnhwcHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2MjM5MzAsImV4cCI6MjAzNjE5OTkzMH0.JrmxAt-X4IRRUvy4D3w2qWYIHHJVnK7r36vNZYZ02AE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
