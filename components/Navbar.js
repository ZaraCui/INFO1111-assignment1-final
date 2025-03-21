import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6 text-sm font-medium">
      <Link href="/">Dashboard</Link>
      <Link href="/residents">Residents</Link>
      <Link href="/documents">Documents</Link>
      <Link href="/finances">Finances</Link>
      <Link href="/maintenance">Maintenance</Link>
      <Link href="/announcements">Announcements</Link>
      <Link href="/submit-issue">Submit Issue</Link>
    </nav>
  );
}
