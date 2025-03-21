export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, unit, description } = req.body;
    console.log("Received issue:", { name, unit, description });
    res.status(302).setHeader('Location', '/?submitted=true');
    res.end();
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
