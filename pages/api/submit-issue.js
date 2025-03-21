export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, unit, description } = req.body;
    console.log("Received issue:", { name, unit, description });
    res.writeHead(302, { Location: '/?submitted=true' });
    res.end();
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Method not allowed" }));
  }
}