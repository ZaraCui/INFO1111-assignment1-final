import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/submit-issue"
];

// build a function to detect “public” requests
const isPublicRoute = createRouteMatcher(publicRoutes);

const isDev = process.env.NODE_ENV !== "production";

export default isDev
  ? (req) => req.next()
  : clerkMiddleware(
      // only protect routes that are NOT in `publicRoutes`
      async (auth, req) => {
        if (!isPublicRoute(req)) {
          await auth.protect();
        }
      },
      // optional: enable debug logs when developing
      { debug: process.env.NODE_ENV === "development" }
    );

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
