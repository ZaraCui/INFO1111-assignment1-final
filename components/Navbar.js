import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/finance">Finance</Link></li>
        <li><Link href="/meetings">Meetings</Link></li>
        <li><Link href="/committee">Committee</Link></li>
      </ul>
    </nav>
  );
}
