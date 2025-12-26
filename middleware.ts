import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return NextResponse.redirect(new URL("/", req.url));
}