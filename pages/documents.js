import { getAuth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import Layout from "../components/Layout";
import Image from "next/image";

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

export default function Documents() {
  const { user } = useUser();

  return (
    <Layout username={user?.firstName || user?.username}>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Documents</h1>
        <p className="text-gray-700 mb-6">
          Access strata reports and records below.
        </p>

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
