import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = process.env.NEXT_APP_SUPABASE_URL 
const supabaseKey = process.env.NEXT_APP_ANON_KEY
const supabase = createClient(supabaseKey,supabaseUrl)

export default supabase;