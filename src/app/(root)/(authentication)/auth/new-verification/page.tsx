import { IBM_Plex_Sans } from "next/font/google";
import AuthLeftColumnContainer from "@/components/authentication/AuthLeftColumnContainer";
import PageTitle from "@/components/ui/PageTitle";
import GraphicContainer from "@/components/authentication/GraphicContainer";
import NewVerificationForm from "@/components/authentication/NewVerificationForm";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

function NewVerificationPage() {
  return (
    <>
      <AuthLeftColumnContainer>
        <PageTitle
          title="Welcome back!"
          subtitle="Enter your username and password to log in to your admin panel"
        />
        <div className="mb-4 w-full">
          <p
            className={`${IbmPlex.className} mb-4 text-base font-normal text-text-light`}
          >
            Log in with one click
          </p>
        </div>
        <NewVerificationForm />
      </AuthLeftColumnContainer>
      <GraphicContainer>
        <div className="width-[480px] flex flex-col flex-wrap gap-[15px]">
          <h2 className="mb-5 text-[2.4rem]">
            Start your experience with Lifecraft and change your life!
          </h2>
          <p className="text-text-grey">
            You are one step away from permanently changing the way of your
            life.
          </p>
        </div>
      </GraphicContainer>
    </>
  );
}

export default NewVerificationPage;
