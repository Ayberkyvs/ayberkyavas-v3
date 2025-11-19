import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { GET_COMMENT_BY_ID_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, error: "User not authenticated" },
      { status: 401 },
    );
  }
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

  if (!comment)
    return NextResponse.json(
      { success: false, error: "Comment not found" },
      { status: 404 },
    );

  try {
    const isLiked = comment.likes?.includes(userId) || false;
    let updatedLikes = comment.likes ? [...comment.likes] : [];
    let updatedDislikes = comment.dislikes ? [...comment.dislikes] : [];

    if (isLiked) {
      updatedLikes = updatedLikes.filter((id: string) => id !== userId);
    } else {
      updatedLikes.push(userId);
      if (comment.dislikes?.includes(userId)) {
        updatedDislikes = updatedDislikes.filter((id: string) => id !== userId);
      }
    }

    await writeClient
      .patch(comment._id)
      .set({ likes: updatedLikes, dislikes: updatedDislikes })
      .commit();

    // revalidateTag("comments");

    return NextResponse.json({ success: true, likes: updatedLikes });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
