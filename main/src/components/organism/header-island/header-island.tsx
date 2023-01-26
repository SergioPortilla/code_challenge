import type { FC } from "react";
import type { MenuOptionsType } from "@core/types/menu-options.type";
import { MENU_OPTIONS } from "@core/const/menu-options";
import HeaderOption from "@atom/header-option";
import Header from "@molecule/header";

const HeaderIsland: FC<any> = () => {
  const headerOption = (option: MenuOptionsType) => (
    <HeaderOption key={option.title} {...option} />
  );

  return <Header>{MENU_OPTIONS.map(headerOption)}</Header>;
};

export default HeaderIsland;
