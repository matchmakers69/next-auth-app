import { sidebarNavigation } from "@/libs/constants";
import paths from "@/utils/paths";

export const navigationLinks = sidebarNavigation.map((item) => {
  let href = "#"; // Default fallback
  let icon = "";
  switch (item.label.toLowerCase()) {
    case "home":
      href = paths.home();
      icon = "home";
      break;

    case "settings":
      href = paths.settings();
      icon = "settings"
      break;
      case "topics":
        href = "#"; // TODO make sure to update it
        icon = "news"
        break;

    default:
      break;
  }
  return { ...item, href, icon };
});
