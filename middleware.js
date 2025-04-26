import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/", 
    "/sign-in(.*)", 
    "/sign-up(.*)", 
    "/submit-issue",
    "/contact", 
    "/api/(.*)" 
  ],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
