"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/lib/actions/snippet-actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);
  return (
    <div className="mt-10">
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="p-2 mt-5 w-full bg-orange-600 border rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
