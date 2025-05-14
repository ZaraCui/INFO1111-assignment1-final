// middleware.js
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",                // your homepage
    "/sign-in(.*)",     // the Clerk sign-in widget
    "/sign-up(.*)",     // the Clerk sign-up widget
    "/submit-issue"     // your issue form
  ],
});

export const config = {
  // protect everything except _next/static, files, etc
  matcher: ["/((?!_next|.*\\..*).*)"],
};
