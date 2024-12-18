"use client";

import { Button } from "@/components/ui/Button";
import { SocialProviders } from "../types/defs";
import { login } from "@/actions/auth";

const LoginFacebook = () => {
  const handleLogin = (provider: SocialProviders) => {
    login(provider);
  };
  return (
    <Button
      size="sm"
      className="w-full bg-bg-facebook hover:bg-[#0866ff]/90 hover:bg-opacity-30 focus:ring-[#0866ff]/50"
      variant="social"
      onClick={() => handleLogin("facebook")}
    >
      <i className="ri-facebook-fill text-[2rem]" />
      <span className="ml-3 block">Log in with Facebook</span>
    </Button>
  );
};

export default LoginFacebook;
