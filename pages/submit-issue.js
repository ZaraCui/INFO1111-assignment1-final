import Navbar from "../components/Navbar";

export default function SubmitIssue() {
  return (
    <>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Submit a Maintenance Issue</h1>
        <form action="/api/submit-issue" method="POST" className="bg-white p-6 rounded-2xl shadow space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input name="name" required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Unit Number</label>
            <input name="unit" required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Issue Description</label>
            <textarea name="description" required className="w-full border rounded p-2" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </main>
    </>
  );
}
