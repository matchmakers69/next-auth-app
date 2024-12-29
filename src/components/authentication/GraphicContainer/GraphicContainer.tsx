import Link from "next/link";
import { BaseProps } from "@/components/ui/types/defs";
import { Logo } from "@/components/ui/Logo";

// relative hidden h-[calc(100vh-40px)] max-h-[780px] w-full max-w-[630px] rounded-[24px] border border-[hsla(0,0%,100%,0.05)] bg-authHeroImg bg-cover bg-center bg-no-repeat md:block

const GraphicContainer = ({ children }: BaseProps) => {
  return (
    <div className="fixed right-0 top-0 hidden min-h-full w-[50%] bg-authHeroImg bg-cover bg-center bg-no-repeat lg:flex lg:flex-col">
      <div className="inner-wrapper flex w-full flex-col gap-[10px] p-[40px]">
        <div>
          <Link className="logo-link inline-block" href="/">
            <Logo width={115} />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GraphicContainer;
