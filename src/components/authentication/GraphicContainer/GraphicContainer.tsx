import Link from "next/link";
import { BaseProps } from "@/components/ui/types/defs";
import { Logo } from "@/components/ui/Logo";
import paths from "@/utils/paths";

const GraphicContainer = ({ children }: BaseProps) => {
  return (
    <div className="fixed right-0 top-0 hidden min-h-full w-[50%] bg-authHeroImg bg-cover bg-center bg-no-repeat lg:flex lg:flex-col">
      <div className="inner-wrapper flex w-full flex-col gap-[10px] p-[40px]">
        <div>
          <Link className="logo-link inline-block" href={paths.home()}>
            <Logo width={115} />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GraphicContainer;
