import { useUser } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.emailAddresses[0].emailAddress}</p>
      <p><strong>Clerk ID:</strong> {user.id}</p>
    </div>
  );
}
