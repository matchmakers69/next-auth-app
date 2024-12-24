"use client";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/Button";

const Logout = () => {
  const handleSignOut = async () => {
    await logout();
  };
  return (
    <>
      <Button onClick={handleSignOut} type="button" size="sm" variant="outline">
        <LogOut className="size-6 hover:text-navy" />
        <span className="max-sm:hidden ml-3 inline-block">Logout</span>
      </Button>
    </>
  );
};

export default Logout;
