import { authMiddleware } from "@clerk/nextjs";  
import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV !== "production";

export default isDev
  ? () => NextResponse.next()  
  : authMiddleware({
      publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/submit-issue"],
    });

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

