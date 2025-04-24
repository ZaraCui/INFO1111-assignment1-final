export default function handler(req, res) {
    res.setHeader("Set-Cookie", "user=; Path=/; Max-Age=0");
    res.status(200).json({ message: "User logged out." });
  }
  