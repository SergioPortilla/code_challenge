import type { FC } from "react";
import type { HeaderInterface } from "./header.d";
import {} from './header.css';

const Header: FC<HeaderInterface> = ({ children }) => {
  return  <div className="header_container">{children}</div>;
};

export default Header;
