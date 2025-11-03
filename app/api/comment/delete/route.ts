import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { GET_COMMENT_BY_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, error: "User not authenticated" },
      { status: 401 },
    );
  }
  const { userId, commentId } = await req.json();
  const comment = await client.fetch(GET_COMMENT_BY_ID_QUERY, {
    commentId: commentId,
  });

  if (comment.authors._id !== session.user.sanityId) {
    return NextResponse.json(
      { success: false, error: "Not authorized" },
      { status: 403 },
    );
  }

  if (!userId)
    return NextResponse.json(
      { success: false, error: "User not authenticated" },
      { status: 401 },
    );
  if (!commentId)
    return NextResponse.json(
      { success: false, error: "Comment ID is required" },
      { status: 400 },
    );
  await writeClient.delete(commentId);
  revalidateTag("comments");
  return NextResponse.json({ success: true }, { status: 200 });
}
