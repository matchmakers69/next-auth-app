import { fetchCommentsByPostId } from "@/libs/commentsAPI";
import Image from "next/image";
import { CommentShowProps } from "./defs";
import CreateCommentForm from "../CreateCommentForm";

const CommentShow = async ({ commentId, postId }: CommentShowProps) => {
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((comment) => comment.id === commentId);
  const children = comments.filter((comment) => comment.parentId === commentId);

  if (!comment) {
    return null;
  }
  return (
    <>
      <div className="comment-block mb-12 border-b border-gray-500/60 pb-8 last:mb-0 last:border-b-0 last:pb-0">
        <div className="mb-6 flex w-full items-center gap-6">
          <Image
            src={comment.user.image || "/icons/avatar.svg"}
            alt="user image"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <p className="text-sm font-semibold text-secondary">
            {comment.user.name}
          </p>
        </div>

        <p className="text-sm text-text-light">{comment.content}</p>

        <CreateCommentForm postId={comment.postId} parentId={comment.id} />
      </div>

      <>
        {children.map((child) => (
          <CommentShow key={child.id} commentId={child.id} postId={postId} />
        ))}
      </>
    </>
  );
};

export default CommentShow;
