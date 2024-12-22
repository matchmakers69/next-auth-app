import AuthLeftColumnContainer from "@/components/authentication/AuthLeftColumnContainer";
import PageTitle from "@/components/ui/PageTitle";
import GraphicContainer from "@/components/authentication/GraphicContainer";
import NewPasswordForm from "@/components/authentication/NewPasswordForm";

function NewPasswordPage() {
  return (
    <>
      <AuthLeftColumnContainer>
        <PageTitle
          title="New password"
          subtitle="Please enter your new email password"
        />
        <NewPasswordForm />
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

export default NewPasswordPage;
