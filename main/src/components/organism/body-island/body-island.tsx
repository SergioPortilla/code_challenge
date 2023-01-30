import type { ConsumerProps, FC } from "react";
import MainFrame from "@molecule/main-frame";

const BodyIsland: FC<ConsumerProps<unknown>> = ({ children }) => {
  return <MainFrame>{children}</MainFrame>;
};

export default BodyIsland;
