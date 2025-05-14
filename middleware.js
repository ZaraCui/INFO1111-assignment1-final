import { clerkMiddleware } from '@clerk/nextjs/server';

// 公开访问的路径列表
const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/submit-issue",
  "/thank",
  "/documents",
  "/maintenance",
  "/finances",
  "/api/fund-summary"
];

// 中间件主函数
export default clerkMiddleware({
  publicRoutes,
});

// 配置匹配路径（不作用于静态资源等）
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',  // 排除静态文件和_next
    '/',                       // 首页
    '/(api|trpc)(.*)'          // API 路由
  ],
};
