import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
