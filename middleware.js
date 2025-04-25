import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/submit-issue", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
