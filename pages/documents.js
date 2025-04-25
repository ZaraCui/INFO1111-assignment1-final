import Layout from "../components/Layout";
import { parse } from "cookie";

export async function getServerSideProps({ req }) {
  const cookies = parse(req.headers.cookie || "");
  const username = cookies.username || null;
  return {
    props: { username },
  };
}

export default function DocumentsPage({ username }) {
  return (
    <Layout username={username}>
      <img src="/building.jpg" className="w-full h-auto" />
    </Layout>
  );
}
