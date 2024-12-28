import { BaseProps } from "@/components/ui/types/defs";

const AuthLeftColumnContainer = ({ children }: BaseProps) => {
  return (
    <div className="flex w-full max-w-[480px] flex-col justify-center p-8 lg:ml-24 lg:mr-24 lg:w-[35vw] lg:max-w-[580px] lg:p-0 lg:shadow-none xl:ml-36 xl:mr-36">
      {children}
    </div>
  );
};

export default AuthLeftColumnContainer;
