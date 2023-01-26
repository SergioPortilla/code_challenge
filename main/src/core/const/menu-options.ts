import type { MenuOptionsType } from "../types/menu-options.type";
import all from "/assets/svg/all-option.svg";
import detail from "/assets/svg/detail-option.svg";
import info from "/assets/svg/info-option.svg";
import settings from "/assets/svg/settings-option.svg";

export const MENU_OPTIONS: Array<MenuOptionsType> = [
  { icon: all, backgroundColor: "#D6C44A", title: "See all" },
  { icon: detail, backgroundColor: "#C90F0F", title: "Details" },
  { icon: info, backgroundColor: "#4C9DB2", title: "Info" },
  { icon: settings, backgroundColor: "#51A74F", title: "Settings" },
];
