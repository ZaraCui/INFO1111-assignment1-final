// middleware.js
import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: [
    '/', 
    '/sign-in(.*)', 
    '/sign-up(.*)', 
    '/thank', 
    '/api/fund-summary'
  ]
});

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|.*\\..*).*)'
  ],
};
