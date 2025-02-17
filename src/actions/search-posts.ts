"use server";

import { redirect } from "next/navigation";

export async function searchPosts(formData: FormData) {
  const term = formData.get("term");
  console.log("term", term);

  if (typeof term !== "string" || !term) {
    redirect("/");
  }

  redirect(`/topics/search?term=${term}`);
}
