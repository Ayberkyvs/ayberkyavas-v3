"use client";
import type { CommentItemProps } from "@/types/blog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowBigDown,
  ArrowBigUp,
  Heart,
  Loader,
  Loader2,
  Trash,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";

export function CommentItem({
  comment,
  currentUserId,
  postAuthorId,
}: CommentItemProps) {
  const { toast } = useToast();
  const [likes, setLikes] = useState<string[]>(comment.likes);
  const [dislikes, setDislikes] = useState<string[]>(comment.dislikes);
  const [isLikeProcessing, setIsLikeProcessing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isDislikeProcessing, setIsDislikeProcessing] =
    useState<boolean>(false);

  const isLiked = currentUserId ? likes.includes(currentUserId) : false;
  const isDisliked = currentUserId ? dislikes.includes(currentUserId) : false;
  const isCommentOwner = currentUserId === comment.authors._id;
  const isPostAuthor = postAuthorId === comment.authors._id;

  const handleLike = async () => {
    if (isLikeProcessing || !currentUserId) return;
    // 1️⃣ Optimistic update
    setLikes(
      isLiked
        ? likes.filter((id) => id !== currentUserId)
        : [...likes, currentUserId],
    );
    setDislikes(
      isLiked ? dislikes : dislikes.filter((id) => id !== currentUserId),
    );

    setIsLikeProcessing(true);

    // 2️⃣ Server call
    const res = await fetch("/api/comment/like", {
      method: "POST",
      body: JSON.stringify({ commentId: comment._id, userId: currentUserId }),
    }).then((r) => r.json());

    if (!res.success) {
      // server hata verirse rollback
      setLikes(likes);
      setDislikes(dislikes);
      toast({
        title: "Error",
        description: res.error || "An error occurred while liking the comment.",
        variant: "destructive",
      });
    }

    setIsLikeProcessing(false);
  };

  const handleDislike = async () => {
    if (isDislikeProcessing || !currentUserId) return;
    // 1️⃣ Optimistic update
    setDislikes(
      isDisliked
        ? dislikes.filter((id) => id !== currentUserId)
        : [...dislikes, currentUserId],
    );
    setLikes(isDisliked ? likes : likes.filter((id) => id !== currentUserId));
    setIsDislikeProcessing(true);
    // 2️⃣ Server call
    const res = await fetch("/api/comment/dislike", {
      method: "POST",
      body: JSON.stringify({ commentId: comment._id, userId: currentUserId }),
    }).then((r) => r.json());

    if (!res.success) {
      // server hata verirse rollback
      setDislikes(dislikes);
      setLikes(likes);
      toast({
        title: "Error",
        description:
          res.error || "An error occurred while disliking the comment.",
        variant: "destructive",
      });
    }
    setIsDislikeProcessing(false);
  };

  const handleDelete = async () => {
    if (!currentUserId || !isCommentOwner || isDeleting) return;
    // Optimistic update could be implemented here by removing the comment from UI immediately
    setIsDeleting(true);
    const res = await fetch("/api/comment/delete", {
      method: "DELETE",
      body: JSON.stringify({ commentId: comment._id, userId: currentUserId }),
    }).then((r) => r.json());
    if (!res.success) {
      toast({
        title: "Error",
        description:
          res.error || "An error occurred while deleting the comment.",
        variant: "destructive",
      });
      setIsDeleting(false);
      return;
    }
    // Optionally, you can remove the comment from the UI here or trigger a re-fetch
    setIsDeleting(false);
  };

  return (
    <Card className="flex gap-5 border border-card-border bg-background p-4">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={comment.authors.image || ""}
          alt={comment.authors.name}
        />
        <AvatarFallback>
          {comment.authors.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="flex w-fit flex-col gap-2 md:flex-row md:items-center">
          <div className="flex w-fit gap-2">
            <span className="text-sm font-semibold">
              {comment.authors.name}
            </span>
            <div className="flex items-center gap-1 text-xs">
              {isPostAuthor && <Badge variant="default">Content Creator</Badge>}
              {isCommentOwner && "(You)"}
            </div>
          </div>
          <span className="w-fit text-xs text-muted">
            {formatDistanceToNow(new Date(comment.createdAt), {
              addSuffix: true,
              locale: enUS,
            })}
          </span>
        </div>
        <p className="paragraph text-sm leading-relaxed">{comment.text}</p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className="w-fit gap-2 rounded-full"
            disabled={isLikeProcessing}
          >
            <ArrowBigUp
              className={cn("size-5", {
                "fill-brand-500 text-brand-500": isLiked,
                "animate-pulse": isLikeProcessing,
              })}
            />

            <span className="text-xs">{likes?.length || 0}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDislike}
            className="w-fit gap-2 rounded-full"
            disabled={isDislikeProcessing}
          >
            <ArrowBigDown
              className={cn("size-5", {
                "fill-brand-500 text-brand-500": isDisliked,
                "animate-pulse": isDislikeProcessing,
              })}
            />

            <span className="text-xs">{dislikes?.length || 0}</span>
          </Button>
          {isCommentOwner && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="!w-fit gap-2"
              disabled={!currentUserId || isDeleting}
            >
              <Trash className={cn("size-2 text-red-500")} />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
