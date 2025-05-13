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
        "/api/fund-summary" // ✅ 必须添加
      ],
    });

export const config = {
  matcher: [
    // ✅ 显式排除 API 路由
    "/((?!api|_next|.*\\..*).*)"
  ],
};
