import Layout from "../components/Layout";
import { parse } from "cookie";

// 获取 cookie 中的 username
export async function getServerSideProps({ req }) {
  const cookies = parse(req.headers.cookie || "");
  const username = cookies.username || null;
  return { props: { username } };
}

export default function Maintenance({ username }) {
  const issues = [
    { title: "Water Leakage", status: "Urgent", unit: "105" },
    { title: "Broken Light in Hallway", status: "Standard", unit: "109" },
    { title: "Garage Door Fault", status: "Urgent", unit: "103" }
  ];

  return (
    <Layout username={username}>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Maintenance Requests</h1>
        <p className="text-gray-700 mb-6">
          Report and review ongoing maintenance tasks.
        </p>

        <div className="space-y-4">
          {issues.map((issue, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow">
              <h2 className="text-lg font-semibold">{issue.title}</h2>
              <p className="text-gray-600">Unit: {issue.unit}</p>
              <p
                className={`font-bold ${
                  issue.status === "Urgent"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {issue.status}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
