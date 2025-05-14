// middleware.js

// 1️⃣ Import from the Edge entrypoint
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/edge";

const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/submit-issue"
];
const isPublicRoute = createRouteMatcher(publicRoutes);

// 2️⃣ (Optional) force this file to run as an Edge function
export const runtime = "experimental-edge";

export default clerkMiddleware(
  // only protect requests *not* on your public list
  async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  // you can turn on debug to see which routes Clerk skips or protects
  { debug: process.env.NODE_ENV === "development" }
);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
