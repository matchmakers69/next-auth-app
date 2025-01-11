import { ShowPostProps } from "./defs";
import CreateCommentForm from "../CommentsContainer/CreateCommentForm";
import CommentsList from "../CommentsContainer/CommentsList";

export default function ShowPost({ post }: ShowPostProps) {
  return (
    <>
      <h1 className="mb-[4rem] text-[2.4rem] font-semibold sm:text-[2.6rem] md:text-[4rem] lg:text-2xl">
        {post.title}
      </h1>
      <section className="grid-rows-auto grid h-auto w-full grid-cols-[100%] md:grid-cols-[30%_60%_10%] lg:grid-cols-[30%_40%_10%_10%]">
        <div className="left-col mr-[2rem] hidden h-auto w-full sm:block" />
        <div className="comment-content col-span-2 scroll-smooth">
          <div className="comment-text-wrapper mb-6">
            <p className="text-text-light">{post.content}</p>
          </div>
          <CreateCommentForm postId={post.id} startOpen />
          <CommentsList postId={post.id} />
        </div>
      </section>
    </>
  );
}
