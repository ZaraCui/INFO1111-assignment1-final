// pages/submit-form.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SubmitForm() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.submitted === 'true') {
      alert("Your maintenance request has been submitted successfully!");
    }
  }, [router.query]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Submit Maintenance Request</h2>
      <form action="/api/submit-issue" method="POST" className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" required className="w-full border border-gray-300 p-2 rounded-xl" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Unit</label>
          <input type="text" name="unit" required className="w-full border border-gray-300 p-2 rounded-xl" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea name="description" rows="4" required className="w-full border border-gray-300 p-2 rounded-xl"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}
