export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 text-xl font-bold">
        Zara Strata Treasurer
      </header>
      <main className="p-6">{children}</main>
      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 Strata Committee
      </footer>
    </div>
  );
}
