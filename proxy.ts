import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("accessToken")?.value;

  const isAuthRoute =
    pathname.startsWith("/signin") || pathname.startsWith("/signup");

  const isPublicFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api");

  // Allow next internals & api routes
  if (isPublicFile) {
    return NextResponse.next();
  }

  // 🔐 If NOT logged in and trying to access protected route
  if (!token && !isAuthRoute) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // 🚫 If logged in and trying to access signin/signup
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
