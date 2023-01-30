import type { FC } from "react";
import type { MainFrameInterface } from './main-frame.d';
import {} from './main-frame.css';

const MainFrame: FC<MainFrameInterface> = ({children}) => {
  return <div className="main_frame_container">{children}</div>;
};

export default MainFrame;
