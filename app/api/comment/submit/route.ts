import { auth } from "@/auth";
import { writeClient } from "@/sanity/lib/write-client";
import { commentSchema } from "@/lib/validations/commentSchema";
import { NextRequest, NextResponse } from "next/server";
import { validateTurnstileToken } from "next-turnstile";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, error: "User not authenticated" },
      { status: 401 },
    );
  }

  const { values, postId, postTitle, name } = await req.json();

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
    // revalidateTag("comments");

    const { error: resendErr } = await resend.emails.send({
      from: "YAVAS <support@ayberkyavas.com>",
      to: ["contact@ayberkyavas.com"],
      subject: `New comment on ${postTitle}`,
      react: EmailTemplate({
        name,
        comment: comment.toString(),
        postTitle,
        logoUrl: "https://ayberkyavas.com/logo.svg",
      }),
    });
    if (resendErr) {
      return NextResponse.json(resendErr, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
