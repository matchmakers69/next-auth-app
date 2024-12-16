"use client";

import { Button } from "@/components/ui/Button";
import { SocialProviders } from "../types/defs";
import { login } from "@/actions/auth";

const LoginGoogle = () => {
  const handleLogin = (provider: SocialProviders) => {
    login(provider);
  };
  return (
    <>
      <Button
        size="sm"
        className="bg-bg-google w-full hover:bg-[#4285F4]/90 hover:bg-opacity-30 focus:ring-[#4285F4]/50"
        variant="social"
        onClick={() => handleLogin("google")}
      >
        <i className="ri-google-fill text-[2rem]" />
        <span className="ml-3 block">Google</span>
      </Button>
    </>
  );
};

export default LoginGoogle;
