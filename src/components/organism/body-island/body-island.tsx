import type { FC } from "react";
import MainFrame from "@molecule/main-frame";
import type { PageLayoutProps } from '@layouts/layout';

const BodyIsland: FC<PageLayoutProps> = ({ children }) => {
  return <MainFrame>{children}</MainFrame>;
};

export default BodyIsland;
