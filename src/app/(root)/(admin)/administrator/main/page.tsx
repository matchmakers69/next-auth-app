import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin page",
};

function AdminPage() {
  return (
    <>
      <PageTitle className="mb-16" title="Admin page" />
      {/* Typescript grid here */}
    </>
  );
}

export default AdminPage;
