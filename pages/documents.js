import Layout from "../components/Layout";
import Image from "next/image";
import { parse } from "cookie";

export async function getServerSideProps({ req }) {
  const cookies = parse(req.headers.cookie || "");
  const username = cookies.username || null;
  return { props: { username } };
}

export default function Documents({ username }) {
  return (
    <Layout username={username}>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Documents</h1>
        <p className="text-gray-700 mb-6">Access strata reports and records below.</p>
        <Image
          src="/banner.jpg"  
          alt="Apartment building"
          width={1000}
          height={600}
          className="rounded-lg shadow"
        />
      </main>
    </Layout>
  );
}
