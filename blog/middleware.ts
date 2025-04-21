import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    if (url.pathname.startsWith("/outstatic")) {
        const authToken = req.cookies.get("admin-auth-token")?.value;

        const adminAuthToken = process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN;

        if (authToken !== adminAuthToken) {
            url.pathname = "/403";
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/outstatic/:path*"]
};
