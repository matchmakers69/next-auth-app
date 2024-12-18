import { BaseProps } from "@/components/ui/types/defs";

const AuthLeftColumnContainer = ({ children }: BaseProps) => {
  return (
    <div className="relative bottom-0 top-0 flex flex-col flex-nowrap items-center justify-start gap-[50px] px-[15px] py-0 sm:px-[30px] md:px-[90px] xl:px-[120px]">
      <div className="flex w-full max-w-[100%] flex-col flex-wrap items-center justify-start gap-[35px] xl:max-w-[580px]">
        {children}
      </div>
    </div>
  );
};

export default AuthLeftColumnContainer;
