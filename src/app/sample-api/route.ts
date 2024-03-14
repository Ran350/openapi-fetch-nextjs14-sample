import { NextResponse } from "next/server";

export async function GET() {
  console.log(">>> Called /api/sample-api !!!");
  // ランダムな整数
  const radom = Math.floor(Math.random() * 1000000);
  return NextResponse.json({ data: radom });
}
