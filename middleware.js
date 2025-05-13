import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV !== "production";

export default isDev
  ? () => NextResponse.next()
  : withClerkMiddleware(() => NextResponse.next());

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
