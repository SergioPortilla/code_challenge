import type { FC } from "react";
import type { HeaderOptionInterface } from "./header-option.d";

const HeaderOption: FC<HeaderOptionInterface> = ({
  backgroundColor,
  icon,
  title,
}) => {
  return (
    <a className="menu_option">
      <div className="menu_option_background" style={{backgroundColor}}/>
      <img alt={title} src={icon}/>
      <p>{title}</p>
    </a>
  );
};

export default HeaderOption;
