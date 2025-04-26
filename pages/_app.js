import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      navigateAfterSignIn="/"
      navigateAfterSignUp="/"
      routerPush={(to) => router.push(to)}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
