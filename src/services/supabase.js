import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lfwhpjvjuavfatqdrivk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmd2hwanZqdWF2ZmF0cWRyaXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3Mzc2NTMsImV4cCI6MjA3MDMxMzY1M30.sHpmFBVccUAFW0st150NUzdS3XpY6d0jbYMOZz3cqUU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
