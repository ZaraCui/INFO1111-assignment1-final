import { withClerkMiddleware } from "@clerk/nextjs";  // ✅ Correct import for Clerk v6
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
