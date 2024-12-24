import NextAuth, { type Session } from "next-auth";
import { type NextRequest } from "next/server";

import { apiAuthPrefix, publicRoutes, authRoutes, DEFAULT_LOGIN_REDIRECT } from "../routes";
import authConfig from "./auth.config";
import paths from "./utils/paths";

const { auth } = NextAuth(authConfig);

export default auth((req: NextRequest & { auth: Session | null }): Response | void => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return;
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return;
	}

	if (!isLoggedIn && !isPublicRoute) {
		let callbackUrl = nextUrl.pathname;
		if (nextUrl.search) {
			callbackUrl += nextUrl.search;
		}
		const encodedCallbackUrl = encodeURIComponent(callbackUrl);
		return Response.redirect(new URL(`${paths.login()}?callbackUrl=${encodedCallbackUrl}`, nextUrl));
	}

	return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // matcher used from Clerk
};