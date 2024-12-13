"use client";

import { login } from "@/actions/auth";
import { Button } from "@/components/ui/Button";
import { SocialProviders } from "./defs";

const Social = () => {
  const handleLogin = (provider: SocialProviders) => {
    login(provider);
  };
  return (
    <>
      <Button
        size="lg"
        className="w-full"
        variant="social"
        onClick={() => handleLogin("github")}
      >
        <span className="mr-2 block">Github</span>
      </Button>
    </>
  );
};

export default Social;
