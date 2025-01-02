"use client";
import { Loader, LogOut } from "lucide-react";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const Logout = () => {
  const [isPending, setIsPending] = useState(false);
  const handleSignOut = async () => {
    setIsPending(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <>
      <Button
        onClick={handleSignOut}
        type="button"
        size="sm"
        variant="outline"
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="size-6 animate-spin" />
        ) : (
          <LogOut className="size-6 hover:text-navy" />
        )}
        <span className="max-sm:hidden ml-3 inline-block">
          {isPending ? "Logging out..." : "Logout"}
        </span>
      </Button>
    </>
  );
};

export default Logout;
