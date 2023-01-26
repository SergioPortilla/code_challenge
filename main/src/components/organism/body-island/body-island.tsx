import type { FC } from "react";
import MainFrame from "@molecule/main-frame";

const BodyIsland: FC<any> = ({ children }) => {
  return <MainFrame>{children}</MainFrame>;
};

export default BodyIsland;
