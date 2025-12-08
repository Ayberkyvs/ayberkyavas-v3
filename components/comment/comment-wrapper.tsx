import type { CommentsWrapperProps } from "@/types/blog";

import { Separator } from "@/components/ui/separator";
import { CommentForm } from "./comment-form";
import { auth } from "@/auth";
import LoginButton from "../LoginButton";
import CommentSection from "./comment-section";
import { Suspense } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export const experimental_ppr = true;
export async function CommentsWrapper({
  postId,
  postAuthorId,
  postTitle,
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
        {session?.user && (
          <div className="mb-4 flex items-center gap-2">
            <Avatar className="size-10">
              <AvatarImage
                src={session.user.image || ""}
                alt={`${session.user.name || "User"} avatar`}
                className="object-fit"
              />
              <AvatarFallback>
                {session.user.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <p className="small font-medium text-white">
              {session.user.name || "User"}
            </p>
          </div>
        )}
        <CommentForm postId={postId} session={session} postTitle={postTitle} />
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
