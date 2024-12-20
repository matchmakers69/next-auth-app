import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/Button";

const Logout = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await logout();
        }}
      >
        <Button type="submit" size="sm" variant="outline">
          <LogOut className="size-6 hover:text-navy" />
          <span className="max-sm:hidden ml-3 inline-block">Logout</span>
        </Button>
      </form>
    </>
  );
};

export default Logout;
