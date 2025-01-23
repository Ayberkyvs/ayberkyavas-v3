import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

	const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-eval' https://cdn.sanity.io https://js.sentry-cdn.com https://browser.sentry-cdn.com;
    style-src 'self' 'unsafe-inline' https://cdn.sanity.io;
    img-src 'self' blob: data: https://cdn.sanity.io https://hostedscan.com/;
    connect-src 'self' https://*.sanity.io https://sentry.io https://o*.ingest.sentry.io;
    font-src 'self' https://cdn.sanity.io;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;
	const contentSecurityPolicyHeaderValue = cspHeader
		.replace(/\s{2,}/g, " ")
		.trim();

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-nonce", nonce);
	requestHeaders.set(
		"Content-Security-Policy",
		contentSecurityPolicyHeaderValue
	);
  request.headers.set("x-sentry-csp-report-only", "true");

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});

	response.headers.set(
		"Content-Security-Policy",
		contentSecurityPolicyHeaderValue
	);

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for:
		 * - api routes
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		{
			source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
			missing: [
				{ type: "header", key: "next-router-prefetch" },
				{ type: "header", key: "purpose", value: "prefetch" },
			],
		},
	],
};
