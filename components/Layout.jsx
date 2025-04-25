import Navbar from "./Navbar";

export default function Layout({ children, username }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <Navbar username={username} />
      </header>
      <main className="p-6">{children}</main>
      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 Strata Committee
      </footer>
    </div>
  );
}
