import { serialize } from "cookie";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const recipient = process.env.EMAIL_RECIPIENT || "admin@default.com";
  const secret = process.env.API_SECRET;
  const providedSecret = req.headers["x-api-secret"];

  if (secret && providedSecret !== secret) {
    return res.status(403).json({ error: "Unauthorized: Invalid API secret" });
  }

  const { name, unit, description } = req.body;

  console.log("📬 Maintenance request received:");
  console.log("To:", recipient);
  console.log("Name:", name);
  console.log("Unit:", unit);
  console.log("Description:", description);

  const { error } = await supabase.from("issues").insert([
    { name, unit, description }
  ]);

  if (error) {
    console.error("❌ Supabase error:", error);
    return res.status(500).json({ error: "Database insert failed", detail: error });
  }


  // ✅ 设置 cookie，保留用户姓名
  res.setHeader("Set-Cookie", serialize("username", name, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: false,
    sameSite: "lax",
  }));

  return res.status(200).json({ message: "Request received", submitted: true });
}
