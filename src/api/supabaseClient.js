import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getSupabaseAccessToken = async () => {
    const session = (await supabase.auth.getSession()).data.session;
    return session?.access_token || null;
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
};
