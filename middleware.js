// middleware.js
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/submit-issue", "/thank", "/documents", "/maintenance", "/finances"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
