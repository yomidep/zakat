import { createClient } from '@supabase/supabase-js'
require('dotenv').config()

const supabaseUrl =   "https://ukyvzuuglhkerdaggvvp.supabase.co"//process.env.NEXT_APP_SUPABASE_URL 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVreXZ6dXVnbGhrZXJkYWdndnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTIwOTcsImV4cCI6MjAxODQ2ODA5N30.aP8opiWdlouKDIUP5SsOER84UXVHC8Vrpb5ks6iP_ws"
const supabase = createClient(supabaseUrl,supabaseKey)

console.log("url ",supabaseUrl)

export default supabase;