import SettingsContainer from "@/app/(root)/(dashboard)/settings/_components/SettingsContainer";
import { CurrencyPickerContainer } from "@/app/(root)/(dashboard)/settings/_components/CurrencyPickerContainer";
import PageTitle from "@/components/ui/PageTitle";
import { redirect } from "next/navigation";
import { currentUser } from "@/lib/currentUserAPI";
import { Metadata } from "next";
import paths from "@/utils/paths";
import { getUserCurrency } from "@/app/(root)/(dashboard)/settings/user-currency";

export const metadata: Metadata = {
  title: "Account Settings | Lifecraft",
  description:
    "Manage your account settings, update personal information, change preferences, and enhance security. Customize your experience effortlessly.",
};

export default async function SettingsPage() {
  const user = await currentUser();
  if (!user) {
    redirect(paths.login());
  }

  const currency = await getUserCurrency();

  return (
    <>
      <PageTitle className="mb-16" title="Account Settings" />
      <div className="relative mt-[4rem] grid grid-cols-1 grid-rows-1 gap-[3.06rem] gap-y-[2.5rem] rounded-[7px] sm:grid-cols-2 sm:gap-[2.6rem] md:grid-cols-2 md:gap-[3.06rem]">
        <SettingsContainer user={user} />
        <CurrencyPickerContainer userId={user.id} currency={currency} />
      </div>
    </>
  );
}
