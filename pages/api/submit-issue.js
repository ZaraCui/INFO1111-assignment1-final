export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, unit, description } = req.body;
    console.log("Received issue:", { name, unit, description });

    res.status(200).json({ status: "received" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
