// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/submit-issue"
];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware((auth, req) => {
  // if this isn’t one of your public paths, enforce auth
  if (!isPublicRoute(req)) {
    auth().protect();
  }
  return NextResponse.next();
});

// only run on “real” pages / API routes (skip _next, static files, etc)
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
