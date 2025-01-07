import { NavLink } from "@/components/ui/NavLink";
import paths from "@/utils/paths";

const LeftNavigation = () => {
  return (
    <ul className="mr-6 flex items-center">
      <li>
        <NavLink
          className="relative flex h-[52px] max-w-full cursor-pointer select-none items-center justify-start gap-[10px] rounded-[10px] bg-transparent px-[15px] py-[10px] text-sm text-text-grey transition-all duration-200 ease-out md:hover:bg-[#ffffff13] md:hover:text-text-light"
          classNameActive="text-primary"
          href={paths.topicComments()}
        >
          <span className="text-inherit">Discuss</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default LeftNavigation;
