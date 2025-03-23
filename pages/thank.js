// pages/thanks.js

export default function ThanksPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-gray-700 mb-6">Your maintenance request has been successfully submitted. Our team will contact you shortly.</p>
          <a href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Back to Home</a>
        </div>
      </div>
    );
  }
  