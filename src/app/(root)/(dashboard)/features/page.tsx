import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
};

function FeaturesPage() {
  return (
    <>
      <PageTitle className="mb-16" title="Main features" />
      {/* Features", grid here */}
    </>
  );
}

export default FeaturesPage;
