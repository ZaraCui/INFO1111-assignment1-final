import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Residents() {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const res = await fetch("/api/get-all-residents");
      const data = await res.json();
      setResidents(data);
    };
    fetchResidents();
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Residents</h1>
        <div className="bg-white p-6 rounded-2xl shadow">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border-b">#</th>
                <th className="p-2 border-b">Resident Name</th>
                <th className="p-2 border-b">Unit Number</th>
                <th className="p-2 border-b">Outstanding Levies</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((r, i) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{i + 1}</td>
                  <td className="p-2 border-b">{r.name}</td>
                  <td className="p-2 border-b">{r.unit}</td>
                  <td className="p-2 border-b">{r.has_levy ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
