import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Finances() {
  const [funds, setFunds] = useState({ admin: 0, capital: 0 });

  useEffect(() => {
    fetch("/api/fund-summary")
      .then((res) => res.json())
      .then((data) => setFunds(data));
  }, []);

  const data = [
    { name: "Admin Fund", amount: funds.admin },
    { name: "Capital Fund", amount: funds.capital }
  ];

  return (
    <>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Finances</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Admin Fund</h2>
            <p className="text-2xl text-green-600 font-bold">${funds.admin.toLocaleString()}</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Capital Works Fund</h2>
            <p className="text-2xl text-blue-600 font-bold">${funds.capital.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Fund Comparison Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#60A5FA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
}
