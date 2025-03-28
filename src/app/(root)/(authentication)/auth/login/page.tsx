import LoginGithub from "@/components/authentication/LoginGithub";
import LoginGoogle from "@/components/authentication/LoginGoogle";
import { IBM_Plex_Sans } from "next/font/google";
import AuthLeftColumnContainer from "@/components/authentication/AuthLeftColumnContainer";
import PageTitle from "@/components/ui/PageTitle";
import LoginForm from "@/components/authentication/LoginForm";
import GraphicContainer from "@/components/authentication/GraphicContainer";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

function LoginPage() {
  return (
    <>
      <AuthLeftColumnContainer>
        <PageTitle
          className="mb-12"
          title="Login"
          slogan="Welcome back!"
          subtitle="Enter your username and password to log in to your admin panel"
        />

        <div className="mb-4 w-full">
          <p
            className={`${IbmPlex.className} mb-4 text-base font-normal text-text-light`}
          >
            Login with one click
          </p>
          <div className="flex w-full flex-col gap-8">
            <LoginGoogle />

            <div className="flex w-full flex-col">
              <LoginGithub />
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-[rgb(175,175,175)]" />
          </div>
          <div className="relative flex justify-center">
            <p className="bg-[rgb(20,20,20)] px-3 text-base text-text-grey dark:bg-neutral-900">
              or provide login details
            </p>
          </div>
        </div>
        <LoginForm />
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

export default LoginPage;
