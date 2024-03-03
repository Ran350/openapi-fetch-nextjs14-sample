import { NextResponse } from "next/server";

export async function GET() {
  console.log(">>> Called /api/sample-api !!!");
  return NextResponse.json({ data: Math.random() });
}
