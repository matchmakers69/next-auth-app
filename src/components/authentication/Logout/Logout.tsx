"use client";

import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import paths from "@/utils/paths";

const Logout = () => {
  const { update } = useCurrentSession();
  const router = useRouter();

  const handleLogout = async () => {
    await logout(); // Call server action to log out
    await update(); // 🔄 Refresh session state
    router.push(paths.login()); // ✅ Manually navigate to login page
  };
  return (
    <>
      <Button
        className="border-[hsla(0,0%,100%,0.1)] text-[rgba(var(--white),1)]"
        onClick={handleLogout}
        type="button"
        size="sm"
        variant="outline"
      >
        <LogOut className="hover:text-navy size-6" />

        <span className="ml-3 inline-block">Logout</span>
      </Button>
    </>
  );
};

export default Logout;
