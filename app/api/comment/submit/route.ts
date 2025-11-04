import { auth } from "@/auth";
import { writeClient } from "@/sanity/lib/write-client";
import { commentSchema } from "@/lib/validations/commentSchema";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { validateTurnstileToken } from "next-turnstile";

export async function POST(req: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, error: "User not authenticated" },
      { status: 401 },
    );
  }

  const { values, postId } = await req.json();

  const validationResponse = await validateTurnstileToken({
    token: values.turnstile,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    idempotencyKey: crypto.randomUUID(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return NextResponse.json({ message: "Invalid token" }, { status: 400 });
  }

  const parsed = commentSchema.safeParse(values);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { comment } = parsed.data;

  try {
    await writeClient.create({
      _type: "comment",
      Blog: { _type: "reference", _ref: postId },
      text: comment.toString(),
      authors: {
        _type: "reference",
        _ref: session.user.sanityId!,
      },
      createdAt: new Date().toISOString(),
      likes: [],
      dislikes: [],
    });
    revalidateTag("comments");
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
