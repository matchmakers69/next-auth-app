import { adminSidebarNavigation } from "@/libs/constants";
import paths from "@/utils/paths";

export const navigationLinks = adminSidebarNavigation.map((item) => {
  let href = "#"; // Default fallback
  let icon = "";
  switch (item.label.toLowerCase()) {
    case "home":
      href = paths.home();
      icon = "home";
      break;

    case "admin":
      href = paths.adminMain();
      icon = "home";
      break;

    case "typescript":
      href = paths.adminTypescript();
      icon = "settings";
      break;

    default:
      break;
  }
  return { ...item, href, icon };
});
