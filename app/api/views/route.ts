import { writeClient } from "@/sanity/lib/write-client";

export async function POST(req: Request) {
  const { _id, currentViews } = await req.json();

  try {
    const updated = await writeClient
      .patch(_id)
      .set({ views: currentViews + 1 })
      .commit();

    return new Response(
      JSON.stringify({ success: true, views: updated.views }),
    );
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err }), {
      status: 500,
    });
  }
}
