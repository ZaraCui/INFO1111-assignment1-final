import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/submit-issue"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
