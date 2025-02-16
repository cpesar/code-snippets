"use client";

import { createSnippet } from "@/lib/actions/snippet-actions";
import Editor from "@monaco-editor/react";
import { useState } from "react";

const SnippetCreatePage = () => {
  const [code, setCode] = useState("");

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          {/* <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          /> */}
          <Editor
            height="40vh"
            theme="vs-dark"
            language="javascript"
            defaultValue=""
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
          />
        </div>

        <button type="submit" className=" rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
