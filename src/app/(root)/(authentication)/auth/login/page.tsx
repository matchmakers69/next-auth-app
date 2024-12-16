import PageTitle from "@/components/ui/PageTitle";
import LoginFacebook from "@/components/authentication/LoginFacebook";
import LoginGithub from "@/components/authentication/LoginGithub";
import LoginGoogle from "@/components/authentication/LoginGoogle";

function LoginPage() {
  return (
    <section className="pb-pb-3xl pt-pt-3xl text-text-light">
      <PageTitle
        subtitle="Login to get full access to the app!"
        title="Login"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <LoginFacebook />
        <LoginGoogle />
        <LoginGithub />
      </div>
    </section>
  );
}

export default LoginPage;
