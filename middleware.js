import { authMiddleware } from "@clerk/nextjs/server";

const isDev = process.env.NODE_ENV !== "production"; 

export default isDev
  ? (req) => req.next()  
  : authMiddleware({
      publicRoutes: [
        "/", 
        "/sign-in(.*)", 
        "/sign-up(.*)", 
        "/submit-issue",
        "/api/fund-summary"  // ✅ 加上这一行
      ],
    });

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
