"use server";

import { createTopicSchema } from "@/components/articles/CreateTopicForm/validation/createTopicValidationSchema";
import { currentUser } from "@/libs/auth";
import type { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { db } from "@/libs/db";

type FormState = {
  success: boolean;
  fields?: Record<string, string>;
  errors?: Record<string, string[]>;
};

export async function createTopic(
  prevState: FormState,
  payload: FormData,
): Promise<FormState> {
  console.log("payload received", payload);
  const user = await currentUser();
  if (!user || !user.id) {
    return {
      success: false,
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }

  if (!(payload instanceof FormData)) {
    return {
      success: false,
      errors: { error: ["Invalid Form Data"] },
    };
  }

  let topic: Topic;

  try {
    const validatedFields = createTopicSchema.safeParse({
      name: payload.get("name"),
      description: payload.get("description"),
    });

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      const fields: Record<string, string> = {};
      return {
        success: false,
        fields,
        errors,
      };
    }

    topic = await db.topic.create({
      data: {
        slug: validatedFields.data.name,
        description: validatedFields.data.description,
      },
    });
  } catch (error: unknown) {
    console.error("Error creating topic:", error);

    if (error instanceof Error) {
      return {
        success: false,
        errors: {
          _form: [error.message],
        },
      };
    }

    return {
      success: false,
      errors: {
        _form: ["Something went wrong."],
      },
    };
  }

  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));
}
