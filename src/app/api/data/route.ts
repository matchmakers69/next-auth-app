import { auth } from "@/auth";
import { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(function GET(
  req: NextRequest & { auth: Session | null },
): Response | void {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
});
