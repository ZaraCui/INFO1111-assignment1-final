import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/submit-issue"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
