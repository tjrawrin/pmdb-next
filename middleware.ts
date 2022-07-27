import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const params = new URL(request.url).searchParams;
  const view = params.get("view");

  if (!view || view === "") {
    return NextResponse.redirect(new URL("/movies?view=all", request.url));
  }
}

export const config = {
  matcher: "/movies",
};
