import type { FC } from "react";
import type { MenuOptionsInterface } from "@core/types/menu-options.type";
import type { PageLayoutProps } from '@layouts/types/layout';
import { MENU_OPTIONS } from "@core/const/menu-options";
import HeaderOption from "@atom/header-option";
import Header from "@molecule/header";

const HeaderIsland: FC<PageLayoutProps> = ({page}) => {
  const headerOption = (option: MenuOptionsInterface) => (
    <HeaderOption key={option.title} page={page} {...option} />
  );

  return <Header>{MENU_OPTIONS.map(headerOption)}</Header>;
};

export default HeaderIsland;
