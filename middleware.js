import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/submit-issue"
];

const isDev = process.env.NODE_ENV !== "production";

export default isDev
  ? (req) => req.next()
  : clerkMiddleware({
      publicRoutes,
    });

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
