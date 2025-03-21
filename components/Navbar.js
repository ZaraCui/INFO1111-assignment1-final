import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6 text-sm font-medium">
      <Link href="/" className="hover:text-blue-600">Dashboard</Link>
      <Link href="/residents" className="hover:text-blue-600">Residents</Link>
      <Link href="/documents" className="hover:text-blue-600">Documents</Link>
      <Link href="/finances" className="hover:text-blue-600">Finances</Link>
      <Link href="/maintenance" className="hover:text-blue-600">Maintenance</Link>
      <Link href="/announcements" className="hover:text-blue-600">Announcements</Link>
      <Link href="/submit-issue" className="hover:text-blue-600">Submit Issue</Link>
    </nav>
  );
}
