"use client";

import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  return (
    <div>
      <div>Child component with title {snippet.title}</div>
    </div>
  );
};

export default SnippetEditForm;
