import { writeClient } from "@/sanity/lib/write-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { _id, currentViews } = await req.json();

  try {
    const updated = await writeClient
      .patch(_id)
      .set({ views: currentViews + 1 })
      .commit();

    return NextResponse.json(
      { success: true, views: updated.views },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
