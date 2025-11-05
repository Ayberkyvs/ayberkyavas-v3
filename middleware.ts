import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://browser.sentry-cdn.com https://js.sentry-cdn.com https://challenges.cloudflare.com;
    style-src 'self' 'unsafe-inline' https://cdn.sanity.io https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css;
    img-src 'self' blob: data: https://cdn.sanity.io https://hostedscan.com/protected-by-hostedscan.svg https://lh3.googleusercontent.com/;
    connect-src 'self' *.sanity.io *.sentry.io wss://*.api.sanity.io/ https://challenges.cloudflare.com;
    frame-src 'self' https://challenges.cloudflare.com;
    child-src 'self' https://challenges.cloudflare.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // tüm sayfalar için, statik dosyalar ve API hariç
  ],
};
