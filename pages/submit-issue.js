import { serialize } from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, unit, description } = req.body;

    res.setHeader('Set-Cookie', serialize('username', name, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    }));

    return res.status(200).json({ message: 'Success' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
