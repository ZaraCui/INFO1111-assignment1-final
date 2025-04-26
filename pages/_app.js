import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import "../styles/globals.css";

const publicPages = ["/", "/submit-issue"];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      navigateAfterSignIn="/"
      navigateAfterSignUp="/"
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
