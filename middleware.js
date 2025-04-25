import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/submit-issue", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
