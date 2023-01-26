import type { FC } from "react";
import type { HeaderOptionInterface } from "./header-option.d";

const HeaderOption: FC<HeaderOptionInterface> = ({
  backgroundColor,
  icon,
  title,
}) => {
  return (
    <a
      style={{
        width: "6rem",
        textAlign: "center",
        padding: "0.7rem 0.5rem",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor,
          position: "absolute",
          height: "100%",
          width: "100%",
          bottom: 0,
          left: 0,
          clipPath: "inset(93% 0 0 0)",
          zIndex: -1,
        }}
      ></div>
      <img alt="algo" src={icon} style={{ height: "2.5rem" }} />
      <p
        style={{
          fontSize: "1rem",
          margin: 0,
          color: "#919191",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {title}
      </p>
    </a>
  );
  // filter: 'brightness(20%)'
};

export default HeaderOption;
