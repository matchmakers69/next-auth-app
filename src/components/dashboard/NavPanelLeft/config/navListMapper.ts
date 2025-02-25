import { v4 as uuidv4 } from "uuid";
import { sidebarNavigation } from "@/libs/constants";
import paths from "@/utils/paths";

export const navigationLinks = sidebarNavigation.map((item) => {
  let href = "#";
  let icon = "";
  let children = null;
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

    case "finance tracker":
      icon = "wallet-3";
      children = [
        {
          id: uuidv4(),
          label: "Overview",
          icon: "file-chart",
          href: paths.financeTrackerOverview(),
        },
        {
          id: uuidv4(),
          label: "Budget",
          icon: "money-cny-box",
          href: paths.financeTrackerBudget(),
        },
        {
          id: uuidv4(),
          label: "Cashflow",
          icon: "wallet-2",
          href: paths.financeTrackerCashflow(),
        },
      ];
      break;

    default:
      break;
  }
  return { ...item, href: children ? "#" : href, icon, children };
});
