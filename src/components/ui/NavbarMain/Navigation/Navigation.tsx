import { NavLink } from "../../NavLink";
import paths from "@/utils/paths";

const Navigation = () => {
  return (
    <nav className="mr-20">
      <ul className="m-0 flex w-full items-center gap-6">
        <li>
          <NavLink
            className="relative flex h-[42px] max-w-full cursor-pointer select-none items-center justify-start gap-[10px] rounded-[10px] bg-transparent px-[15px] py-[10px] text-sm text-text-grey transition-all duration-200 ease-out md:hover:bg-[#ffffff13] md:hover:text-text-light"
            classNameActive="text-primary bg-[#ffffff0d]"
            href={paths.home()}
          >
            <span className="text-inherit">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="relative flex h-[42px] max-w-full cursor-pointer select-none items-center justify-start gap-[10px] rounded-[10px] bg-transparent px-[15px] py-[10px] text-sm text-text-grey transition-all duration-200 ease-out md:hover:bg-[#ffffff13] md:hover:text-text-light"
            classNameActive="text-primary bg-[#ffffff0d]"
            href={paths.topics()}
          >
            <span className="text-inherit">Topics</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
