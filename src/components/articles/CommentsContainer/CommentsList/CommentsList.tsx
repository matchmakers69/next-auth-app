import { fetchCommentsByPostId } from "@/queries/comments";
import { CommentsListProps } from "./defs";
import { CommentShow } from "../CommentShow";

const CommentsList = async ({ postId }: CommentsListProps) => {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter((comment) => !comment.parentId);

  if (!comments) return <div>No comments</div>;

  return (
    <>
      <h2 className="mb-10 text-[2.2rem] font-bold md:text-[2.6rem]">
        {comments.length} comments
      </h2>
      {topLevelComments.map((comment) => (
        <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
      ))}
    </>
  );
};

export default CommentsList;
