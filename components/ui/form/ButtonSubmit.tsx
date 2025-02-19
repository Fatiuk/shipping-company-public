import React, { FC, MouseEventHandler } from "react";

const Button: FC<{
  classNames?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "chosen";
}> = ({ classNames, variant = "primary", children }) => {
  return (
    <button
      type="submit"
      className={`
        p-3 rounded-md
        ${
          variant === "primary"
            ? "px-6 font-bold text-lg bg-oaccent-800 text-owhite hover:bg-oaccent-700 rounded-xl"
            : ""
        }
        ${
          variant === "secondary"
            ? "bg-white text-darkBlue border-2 border-blue"
            : ""
        }
        ${variant === "ghost" ? "text-darkBlue border-none bg-none" : ""}
        ${
          variant === "chosen"
            ? "bg-lightBlue text-darkBlue border-2 border-blue"
            : ""
        }
        ${classNames}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
