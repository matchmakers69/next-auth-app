import SettingsContainer from "@/components/dashboard/SettingsContainer";
import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

function SettingsPage() {
  return (
    <>
      <PageTitle className="mb-16" title="Settings" />
      <SettingsContainer />
    </>
  );
}

export default SettingsPage;
