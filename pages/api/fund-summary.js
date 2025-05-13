import { createClient } from "@supabase/supabase-js";

// 建议使用环境变量安全处理
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from("funds").select("*").limit(1);
    if (error || !data || data.length === 0) {
      throw error || new Error("No fund data");
    }

    const { admin, capital } = data[0];
    res.status(200).json({ admin, capital });
  } catch (err) {
    console.error("API error in /api/fund-summary:", err.message);
    res.status(500).json({
      admin: 0,
      capital: 0,
      error: "Supabase fetch failed or database is inactive.",
    });
  }
}
