export default function Documents() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Shared Documents</h1>
      <ul className="list-disc list-inside">
        <li><a href="/bylaws.pdf" download className="text-blue-600 underline">Download Strata By-laws (PDF)</a></li>
        <li><a href="/meeting-minutes.pdf" download className="text-blue-600 underline">Download Meeting Minutes (PDF)</a></li>
      </ul>
    </div>
  );
}