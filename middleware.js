// middleware.js
import { withClerkMiddleware } from "@clerk/nextjs/api";

export default withClerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)",
  ],
};
