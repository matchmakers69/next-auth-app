import { adminSidebarNavigation } from "@/libs/constants";
import paths from "@/utils/paths";

export const adminNavLinks = adminSidebarNavigation.map((item) => {
  let href = "#";
  let icon = "";
  switch (item.label.toLowerCase()) {
    case "home":
      href = paths.home();
      icon = "home";
      break;

    case "dashboard":
      href = paths.adminDashboard();
      icon = "dashboard";
      break;

    case "blog":
      href = paths.adminBlog();
      icon = "news";
      break;

    default:
      break;
  }
  return { ...item, href, icon };
});
