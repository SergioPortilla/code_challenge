import type { FC } from "react";
import type { HeaderOptionInterface } from "./header-option.d";
import { getMenuImage } from '@core/const/menu-options';
import {} from './header-option.css';

const HeaderOption: FC<HeaderOptionInterface> = ({ backgroundColor, name, title, slug, page }) => {
  return (
    <a className={`menu_option ${page === name && 'menu_selected'}`} href={`${slug || ''}`}>
      <div className="menu_option_background" style={{backgroundColor}}/>
      <img alt={title} src={getMenuImage(name)}/>
      <p>{title}</p>
    </a>
  );
};

export default HeaderOption;
