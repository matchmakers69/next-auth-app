import { appLinkLabels } from "./appData";
import { routes } from "./routes";

export const navigation = [
	{
		id: 1,
		label: appLinkLabels.HOME,
		href: routes.HOME,
	},
	{
		id: 2,
		label: appLinkLabels.SETTINGS,
		href: routes.SETTINGS,
	},
	{
		id: 3,
		label: appLinkLabels.ISSUES,
		href: routes.ISSUES,
	},
	{
		id: 4,
		label: appLinkLabels.LOGIN,
		href: routes.LOGIN,
	},
	{
		id: 5,
		label: appLinkLabels.REGISTER,
		href: routes.REGISTER,
	},
];

export const dropDownNav = [
	{
		id: 1,
		label: appLinkLabels.SETTINGS,
		href: routes.SETTINGS,
	},
	{
		id: 2,
		label: appLinkLabels.SIGN_OUT,
		href: "",
	},
];

export const dropDownNavDashboard = [
	{
		id: 1,
		label: appLinkLabels.SIGN_OUT,
		href: "",
	},
];

export const framerSidebarBackground = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0, transition: { delay: 0.2 } },
	transition: { duration: 0.5 },
};

export const framerSidebarPanel = {
	initial: { x: "-100%" },
	animate: { x: 0 },
	exit: { x: "-100%" },
	transition: { duration: 0.3 },
};

export const framerText = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};

const acceptedDocumentTypes = {
	"application/pdf": [".pdf"],
	"application/msword": [".doc"],
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
	"application/rtf": [".rtf"],
	"text/plain": [".txt"],
	"image/tiff": [".tif", ".tiff"],
	"image/jpeg": [".jpeg", ".jpg"],
	"image/png": [".png"],
	"application/vnd.oasis.opendocument.text": [".odt"],
	"image/heic": [".heic"],
	"message/rfc822": [".eml"],
};

export default acceptedDocumentTypes;
