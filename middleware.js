// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/edge";

const publicRoutes = [ "/", "/sign-in(.*)", "/sign-up(.*)", "/submit-issue" ];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(
  async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  { debug: process.env.NODE_ENV === "development" }
);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
