import { getSingleSnippet } from "@/lib/actions/actions";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}
const EditSnippetPage = async (props: SnippetEditPageProps) => {
  const { id } = await props.params;

  const snippet = await getSingleSnippet(id);

  return <SnippetEditForm snippet={snippet} />;
};

export default EditSnippetPage;
