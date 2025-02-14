import { getSnippets } from "@/lib/actions/actions";

const HomePage = async () => {
  const snippets = await getSnippets();

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });
  return <>{renderedSnippets}</>;
};

export default HomePage;
