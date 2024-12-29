import AuthLeftColumnContainer from "@/components/authentication/AuthLeftColumnContainer";
import PageTitle from "@/components/ui/PageTitle";
import GraphicContainer from "@/components/authentication/GraphicContainer";
import ResetPasswordForm from "@/components/authentication/ResetPasswordForm";

function ResetPasswordPage() {
  return (
    <>
      <AuthLeftColumnContainer>
        <PageTitle
          title="Password recovery"
          className="mb-12"
          subtitle="Please enter your email address to receive a password recovery link"
        />
        <ResetPasswordForm />
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

export default ResetPasswordPage;
