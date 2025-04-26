import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/submit-issue"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
