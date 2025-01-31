import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://clidxtfqlhmfaqmgltkh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsaWR4dGZxbGhtZmFxbWdsdGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNzM2NDMsImV4cCI6MjA1Mzg0OTY0M30.RZAixSu9tawFiYk7UaXFh8VfnNhRN8eJ5qdcB-bswK4')