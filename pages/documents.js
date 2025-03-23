import Navbar from "../components/Navbar";

export default function Documents() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Documents</h2>
      <a href="/strata-guide.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
        View Strata Guide PDF
      </a>
      <div className="mt-6">
        <img src="/banner.jpg" alt="Banner Image" className="rounded-xl shadow-md w-full max-w-md" />
      </div>
    </div>
  );
}

