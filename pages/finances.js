import { useUser } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import Layout from "../components/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const { userId } = getAuth(context.req);
  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false
      }
    };
  }
  return { props: {} };
}

export default function Finances() {
  const { user } = useUser();
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
    <Layout>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Finances</h1>

        {user && (
          <p className="mb-4 text-gray-600">
            Welcome, <span className="font-medium">{user.fullName}</span>
          </p>
        )}

        <p className="text-gray-700 mb-8">
          Review financial summaries, levies, and budgets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Admin Fund</h2>
            <p className="text-2xl text-green-600 font-bold">
              ${funds.admin.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Capital Works Fund</h2>
            <p className="text-2xl text-blue-600 font-bold">
              ${funds.capital.toLocaleString()}
            </p>
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
    </Layout>
  );
}
