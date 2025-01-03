"use server";

import { createTopicSchema } from "@/components/articles/CreateTopicForm/validation/createTopicValidationSchema";
import { currentUser } from "@/libs/auth";
import type { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { db } from "@/libs/db";

type FormState = {
  errors?: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
};

export async function createTopic(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
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
    const errors = result.error.flatten().fieldErrors;

    return {
      errors,
    };
  }

  let topic: Topic;

  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));
}
