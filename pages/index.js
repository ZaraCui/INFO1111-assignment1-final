export default function Home() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Strata</h1>
      <p className="text-gray-600 mb-8">Your strata management portal for Oceanview Heights</p>

      {/* botton */}
      <button className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Explore More
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* hover */}
        <div className="bg-white rounded-2xl shadow p-5 transition-transform duration-300 hover:shadow-2xl hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Total Funds</h2>
          <p className="text-2xl font-bold text-green-600">$245,678</p>
          <p className="text-sm text-gray-500">Admin: $78,450 | Capital: $167,228</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-5 transition-transform duration-300 hover:shadow-2xl hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Residents</h2>
          <p className="text-2xl font-bold">86</p>
          <p className="text-sm text-gray-500">42 units | 12 with outstanding levies</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-5 transition-transform duration-300 hover:shadow-2xl hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Next Meeting</h2>
          <p className="text-2xl font-bold">15 Apr</p>
          <p className="text-sm text-gray-500">7:00 PM Committee Meeting</p>
        </div>
      </div>
    </main>
  );
}
