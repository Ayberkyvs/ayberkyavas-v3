import type { CommentsWrapperProps } from "@/types/blog";

import { Separator } from "@/components/ui/separator";
import { CommentForm } from "./comment-form";
import { auth } from "@/auth";
import LoginButton from "../LoginButton";
import CommentSection from "./comment-section";
import { Suspense } from "react";

export const experimental_ppr = true;
export async function CommentsWrapper({
  postId,
  postAuthorId,
}: CommentsWrapperProps) {
  const session = await auth();

  return (
    <div className="w-full space-y-8">
      <div className="relative">
        {!session?.user && (
          <div className="flex-center bg-background/30 absolute top-0 z-[3] flex size-full flex-col gap-5 backdrop-blur-[2px]">
            <h6 className="heading-6-bold">
              You need to log in to leave a comment
            </h6>
            <LoginButton longText />
          </div>
        )}
        <CommentForm postId={postId} session={session} />
      </div>

      <Separator className="border-border-soft" />
      <Suspense fallback={<div>Loading comments...</div>}>
        <CommentSection
          postId={postId}
          session={session}
          postAuthorId={postAuthorId}
        />
      </Suspense>
    </div>
  );
}
