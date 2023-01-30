import type { FC } from "react";
import type { HeaderInterface } from "./header.d";
import { background_100 } from "../../../../public/assets/colors/colors";

const Header: FC<HeaderInterface> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: background_100,
        width: "100vw",
        height: "5rem",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "0.2rem",
        top: 0,
        zIndex: 5
      }}
    >
      {children}
    </div>
  );
};

export default Header;
