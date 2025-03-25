import Link from "next/link";
import { ArrowLeft, CircleIcon } from "lucide-react";
import paths from "@/utils/paths";
import { Button } from "@/components/ui/Button/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <CircleIcon className="size-12 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-text-light">
          Page Not Found
        </h1>
        <p className="text-base text-text-grey">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="back-button-container mb-12 flex flex-col items-center justify-center">
          <Button
            className="max-w-[20rem] rounded-lg border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent text-[rgba(var(--white),1)] hover:opacity-60"
            asChild
            variant="link"
            size="sm"
          >
            <Link className="flex items-center" href={paths.home()}>
              <ArrowLeft />
              <span className="ml-3 inline-block">Back to home page</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
