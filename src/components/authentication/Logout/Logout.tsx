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
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="bg-button-brown-bg"
        >
          <span className="max-sm:hidden">Logout</span>
          <LogOut className="size-6 text-red-500 sm:hidden" />
        </Button>
      </form>
    </>
  );
};

export default Logout;
