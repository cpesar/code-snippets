import { Metadata } from "next";
import { getSnippet } from "@/lib/actions/actions";

export const metadata: Metadata = {
  title: "Show Code Snippet",
};

const SnippetShowPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const snippet = await getSnippet(id);

  return <>{snippet.title}</>;
};

export default SnippetShowPage;
