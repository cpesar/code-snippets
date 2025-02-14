"use server";

import { db } from "@/app/db";
import { redirect } from "next/navigation";
import { SnippetShowPageProps } from "@/types";
import { notFound } from "next/navigation";

// Create a Snippet
export async function createSnippet(formData: FormData) {
  // Check the users input and make sure they're valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  // Create a new record in the database
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log("Snippet created", snippet);
  // redirect the user back to the root route
  redirect("/");
}

// Get all snippets
export async function getSnippets() {
  const snippets = await db.snippet.findMany();

  if (!snippets) {
    return notFound();
  }

  return snippets;
}

// Get a single snippet
export async function getSnippet(id: string) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return snippet;
}
