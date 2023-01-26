import type { FC } from "react";

const MainFrame: FC<any> = ({ children }) => {
  return (
    <div
      style={{
        margin: "1.5rem",
        width: "80vw",
        minHeight: "20rem",
        backgroundColor: "white",
        padding: "3rem 1rem",
        borderRadius: "0.2rem",
      }}
    >
      {children}
    </div>
  );
};

export default MainFrame;
