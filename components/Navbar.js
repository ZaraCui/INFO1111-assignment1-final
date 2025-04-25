import Link from "next/link";

export default function Navbar({ username }) {
  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6 text-sm font-medium items-center">
      <Link href="/">Dashboard</Link>
      <Link href="/residents">Residents</Link>
      <Link href="/documents">Documents</Link>
      <Link href="/finances">Finances</Link>
      <Link href="/maintenance">Maintenance</Link>
      <Link href="/announcements">Announcements</Link>
      <Link href="/submit-issue">Submit Issue</Link>

      <div className="ml-auto flex gap-4 items-center">
        {username && <span className="text-gray-600">Hi, {username}</span>}
        <Link href="/api/logout" className="text-red-500 hover:underline">Logout</Link>
      </div>
    </nav>
  );
}
