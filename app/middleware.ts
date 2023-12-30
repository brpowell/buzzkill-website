import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next({
    request: {
      // New request headers
      "x-pathname": request.nextUrl.pathname,
    },
  });
}
