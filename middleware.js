import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    // authorize roles
    const url = req.nextUrl.pathname;
    const userAdmin = req?.nextauth?.token?.user?.isAdmin;

    if (url.startsWith("/api")) {
      NextResponse.next().headers.append("Access-Control-Allow-Origin", "*");
    }

    if (url?.startsWith("/dashboard") && userAdmin !== true) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/shipping", "/profile", "/payment"],
};
