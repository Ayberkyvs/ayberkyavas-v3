import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    // const monitors = await getMonitors();
    return NextResponse.json(monitors);
  } catch (error) {
    console.error("Error in monitors API:", error);
    return NextResponse.json(
      { error: "Failed to fetch monitors" },
      { status: 500 },
    );
  }
}
