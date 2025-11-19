import { Session } from "next-auth";

interface CommentItemProps {
  comment: {
    _id: string;
    text: string;
    createdAt: string;
    authors: {
      _id: string;
      name: string;
      image?: string;
    };
    likes: string[];
    dislikes: string[];
  };
  postAuthorId: string;
  currentUserId?: string;
}

interface CommentFormProps {
  postId: string;
  session: Session | null;
  postTitle: string;
}

interface CommentsWrapperProps {
  postAuthorId: string;
  postId: string;
  postTitle: string;
}

export { CommentItemProps, CommentFormProps, CommentsWrapperProps };
