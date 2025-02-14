"use client";

import { Button } from "@/components/ui/button";

const SnippetNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="p-6  rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4">Not Found</h1>
          <p className="text-destructive">Could not find requested page</p>
          <Button
            variant="outline"
            className="mt-4 ml-2 "
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SnippetNotFoundPage;
