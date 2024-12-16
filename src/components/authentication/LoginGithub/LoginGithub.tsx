"use client";

import { Button } from "@/components/ui/Button";
import { SocialProviders } from "../types/defs";
import { login } from "@/actions/auth";

const LoginGithub = () => {
  const handleLogin = (provider: SocialProviders) => {
    login(provider);
  };
  return (
    <>
      <Button
        size="sm"
        className="w-full bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200"
        variant="social"
        onClick={() => handleLogin("github")}
      >
        <i className="ri-github-fill text-[2rem]" />
        <span className="ml-3 block">Github</span>
      </Button>
    </>
  );
};

export default LoginGithub;
