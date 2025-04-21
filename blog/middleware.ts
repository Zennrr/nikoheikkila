import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    console.log("Middleware triggered for:", url.pathname);

    if (url.pathname.startsWith("/outstatic")) {
        const authToken = req.cookies.get("admin-auth-token")?.value;
        const adminAuthToken = process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN;

        console.log("Auth Token from Cookie:", authToken);
        console.log("Expected Auth Token:", adminAuthToken);

        if (authToken !== adminAuthToken) {
            console.log("Redirecting to /403 due to invalid auth token.");
            url.pathname = "/403";
            return NextResponse.redirect(url);
        }

        const githubUsername = req.cookies.get("github-username")?.value;
        const allowedUsername = "Zennrr";

        console.log("GitHub Username from Cookie:", githubUsername);

        if (githubUsername !== allowedUsername) {
            console.log("Redirecting to /403 due to invalid GitHub username.");
            url.pathname = "/403";
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/outstatic/:path*"]
};
