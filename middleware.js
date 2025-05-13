import { authMiddleware } from "@clerk/nextjs/server";

const publicRoutes = [
  "/", 
  "/sign-in(.*)", 
  "/sign-up(.*)", 
  "/submit-issue",
  "/thank",
  "/documents",
  "/maintenance",
  "/finances",
  "/pages/api/fund-summary"
];

const isDev = process.env.NODE_ENV !== "production";

export default isDev
  ? (req) => req.next()
  : authMiddleware({ publicRoutes });

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
