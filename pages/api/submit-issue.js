export default function handler(req, res) {
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

  return res.status(200).json({ message: "Request received", submitted: true });
}
