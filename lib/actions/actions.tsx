"use server";

import { prisma } from "@/db/prisma";

import { redirect } from "next/navigation";
import { SnippetShowPageProps } from "@/types";
import { notFound } from "next/navigation";

// Create a Snippet
export async function createSnippet(formData: FormData) {
  // Check the users input and make sure they're valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  // Create a new record in the database
  const snippet = await prisma.snippet.create({
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
  const snippets = await prisma.snippet.findMany();

  if (!snippets) {
    return notFound();
  }

  return snippets;
}

// Get a single snippet
export async function getSnippet(id: string) {
  const snippet = await prisma.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return snippet;
}
