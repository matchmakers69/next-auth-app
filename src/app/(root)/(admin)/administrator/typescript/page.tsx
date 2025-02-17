import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typescript",
};

function TypescriptPage() {
  return (
    <>
      <PageTitle className="mb-16" title="Typescript tips" />
      {/* Typescript grid here */}
    </>
  );
}

export default TypescriptPage;
