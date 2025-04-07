"use client";

import { Button } from "@/components/ui/Button";
import { SocialButtonsText, SocialProviders } from "../types/defs";
import { login } from "@/app/(root)/(authentication)/auth/_actions/auth";

const LoginGoogle = ({ text = "Login with Google" }: SocialButtonsText) => {
  const handleLogin = (provider: SocialProviders) => {
    login(provider);
  };
  return (
    <>
      <Button
        size="sm"
        className="w-full bg-bg-google hover:bg-[#4285F4]/90 hover:bg-opacity-30 focus:ring-[#4285F4]/50"
        variant="social"
        onClick={() => handleLogin("google")}
      >
        <i className="ri-google-fill text-[2rem]" />
        <span className="ml-3 block">{text}</span>
      </Button>
    </>
  );
};

export default LoginGoogle;
