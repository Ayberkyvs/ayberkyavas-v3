import { CommentItem } from "./comment-item";
import { Badge } from "../ui/badge";
import { GET_COMMENTS_QUERY } from "@/sanity/lib/queries";
import { Session } from "next-auth";
import { sanityFetch } from "@/sanity/lib/live";

const CommentSection = async ({
  postId,
  session,
  postAuthorId,
}: {
  postId: string;
  session: Session | null;
  postAuthorId: string;
}) => {
  const { data: comments }: any = await sanityFetch({
    query: GET_COMMENTS_QUERY,
    params: { postId },
    tags: ["comments", postId],
  });
  console.log(comments);
  return (
    <>
      <div className="flex items-center gap-2">
        <h2 className="heading-6-bold">Comments</h2>
        <Badge className="text-xs">{comments.length}</Badge>
      </div>
      <div className="space-y-4">
        {comments.length <= 0 ? (
          <p className="py-8 text-center text-muted">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment: Comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              currentUserId={session?.user.sanityId}
              postAuthorId={postAuthorId}
            />
          ))
        )}
      </div>
    </>
  );
};

export default CommentSection;
