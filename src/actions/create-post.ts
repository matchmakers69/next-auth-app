"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { db } from "@/libs/db";
import { createPostSchema } from "@/components/articles/CreatePostContainer/CreatePostForm/validation/createPostValidationSchema";
import { currentUser } from "@/libs/currentUserAPI";
import { Article } from "@prisma/client";

interface CreatePostFormState {
  errors?: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  prevState: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  const user = await currentUser();
  if (!user || !user.id) {
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find topic"],
      },
    };
  }
  let article: Article;
  try {
    article = await db.article.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: user.id,
        topicId: topic.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    }
    return {
      errors: {
        _form: ["Failed to create post"],
      },
    };
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, article.id));
}
