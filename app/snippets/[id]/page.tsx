import { Metadata } from "next";
import {
  getSingleSnippet,
  deleteSnippet,
  getSnippets,
} from "@/lib/actions/snippet-actions";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Show Code Snippet",
};

const SnippetShowPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const snippet = await getSingleSnippet(id);

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;

export async function generateStaticParams() {
  const snippets = await getSnippets();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
