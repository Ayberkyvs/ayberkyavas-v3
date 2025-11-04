import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { GET_COMMENT_BY_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || !session.user)
    return new Response("Unauthorized", { status: 401 });

  const { userId, commentId } = await req.json();

  if (session.user.sanityId !== userId) {
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

  const comment = await client.fetch(GET_COMMENT_BY_ID_QUERY, { commentId });

  try {
    const isDisliked = comment.dislikes?.includes(userId) || false;
    let updatedDislikes: string[] = comment.dislikes
      ? [...comment.dislikes]
      : [];
    let updatedLikes: string[] = comment.likes ? [...comment.likes] : [];

    if (isDisliked) {
      updatedDislikes = updatedDislikes.filter((id) => id !== userId);
    } else {
      updatedDislikes.push(userId);
      if (comment.likes?.includes(userId)) {
        updatedLikes = updatedLikes.filter((id: string) => id !== userId);
      }
    }

    await writeClient
      .patch(commentId)
      .set({ dislikes: updatedDislikes, likes: updatedLikes })
      .commit();

    revalidateTag("comments");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to dislike the comment" },
      { status: 500 },
    );
  }
}
