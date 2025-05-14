import { clerkMiddleware } from '@clerk/nextjs/server';
 
const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/submit-issue",
  "/thank",
  "/documents",
  "/maintenance",
  "/finances",
  "/api/fund-summary"  // ✅ 正确路径
];

const isDev = process.env.NODE_ENV !== "production";

export default isDev
  ? (req) => req.next()
  : authMiddleware({ publicRoutes });

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
