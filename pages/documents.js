import Navbar from "../components/Navbar";

export default function Documents() {
  return (
    <div>
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className="p-6">

        {/* Banner image section */}
        <div className="mb-8">
          <img
            src="/banner.jpg"
            alt="Strata Management Banner"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Page title */}
        <h2 className="text-2xl font-bold mb-4">Documents</h2>

        {/* Link to the PDF file */}
        <a
          href="/strata-guide.pdf"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Strata Guide PDF
        </a>

      </div>
    </div>
  );
}
