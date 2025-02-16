"use server";

import { prisma } from "@/db/prisma";
import { redirect } from "next/navigation";
import { SnippetShowPageProps } from "@/types";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

// Create a Snippet
export async function createSnippet(
  prevState: { message: string } | undefined,
  formData: FormData
) {
  try {
    // Check the users input and make sure they're valid
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "title must be longer",
      };
    }

    if (typeof code !== "string" || code.length < 3) {
      return {
        message: "code must be longer",
      };
    }

    // Create a new record in the database
    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error?.message,
      };
    } else {
      return {
        message: "Something went wrong...",
      };
    }
  }
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
export async function getSingleSnippet(id: string) {
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

// Edit a snippet
export async function editSnippet(id: number, code: string) {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

// Delete a snippet
export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });
  // Disable the cache so that the user gets new data if something is deleted
  revalidatePath("/");
  redirect("/");
}
