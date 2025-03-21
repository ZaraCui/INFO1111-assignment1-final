import Navbar from "../components/Navbar";

export default function Documents() {
  return (
    <>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Documents</h1>
        <ul className="bg-white rounded-2xl shadow p-4 space-y-2">
          <li><a href="/docs/strata_rules.pdf" className="text-blue-600 underline">Strata Rules (PDF)</a></li>
          <li><a href="/docs/financial_report.pdf" className="text-blue-600 underline">Financial Report (PDF)</a></li>
        </ul>
      </main>
    </>
  );
}
