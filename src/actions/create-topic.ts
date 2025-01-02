"use server";

import {
  createTopicSchema,
} from "@/components/articles/CreateTopicForm/validation/createTopicValidationSchema";
import { currentUser } from "@/libs/auth";
import type { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { db } from "@/libs/db";

interface CreateTopicFormState {
  success: boolean;
  fields?: Record<string, string>;
  errors?: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  prevState: CreateTopicFormState,
  formData: FormData,
): Promise<CreateTopicFormState> {
  const user = await currentUser();
  if (!user || !user.id) {
    return {
      success: false,
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }

  let topic: Topic;

  try {
    const validatedFields = createTopicSchema.safeParse({
      name: formData.get("name"),
      description: formData.get("description"),
    });
    
    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
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