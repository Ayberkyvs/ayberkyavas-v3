import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
	const cspHeader = `
		default-src 'self';
		script-src 'self' 'unsafe-inline' 'unsafe-eval' http: https: https://browser.sentry-cdn.com https://js.sentry-cdn.com;
		style-src 'self' 'unsafe-inline' https://cdn.sanity.io https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css;
		img-src 'self' blob: data: https://cdn.sanity.io https://hostedscan.com/protected-by-hostedscan.svg https://lh3.googleusercontent.com/;
		connect-src 'self' *.sanity.io *.sentry.io wss://*.api.sanity.io/;
		font-src 'self';
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
	// requestHeaders.set("x-nonce", nonce);
	requestHeaders.set(
		"Content-Security-Policy",
		contentSecurityPolicyHeaderValue
	);

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
