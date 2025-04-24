import { createClient } from '@supabase/supabase-js';
import { serialize } from 'cookie';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, unit, description } = req.body;

  const { error } = await supabase
    .from("issues")
    .insert([{ name, unit, description }]);

  if (error) {
    console.error("❌ Insert failed:", error.message);
    return res.status(500).json({ message: "Submission failed", error });
  }

  res.setHeader(
    "Set-Cookie",
    serialize("username", name, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7天
    })
  );

  return res.status(200).json({ message: "Submitted successfully" });
}
