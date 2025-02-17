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
      icon = "settings";
      break;

    case "topics":
      href = paths.topics();
      icon = "news";
      break;

    case "subscriptions":
      href = paths.subscriptions();
      icon = "bank-card";
      break;

    default:
      break;
  }
  return { ...item, href, icon };
});
