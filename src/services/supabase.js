import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = import.meta.env.supabaseUrl;
const supabaseKey = import.meta.env.supabaseKey;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
