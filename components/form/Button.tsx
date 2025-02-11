import React, { FC, MouseEventHandler } from "react"

const Button: FC<{
	classNames?: string,
	onClick?: MouseEventHandler<HTMLButtonElement>,
	children?: React.ReactNode,
	variant?: "primary" | "secondary" | "ghost" | "chosen",
	type?: "submit" | "button"
}> = ({
	classNames,
	onClick,
	variant = "primary",
	children,
	type = "button"
}) => {
		return (
			<button
				type={type}
				className={`
        p-3 rounded-md
        ${variant === "primary" ? "px-6 font-bold text-lg bg-oaccent-900 text-black hover:bg-oaccent-700" : ""}
        ${variant === "secondary" ? "bg-white text-darkBlue border-2 border-blue" : ""}
        ${variant === "ghost" ? "text-darkBlue border-none bg-none" : ""}
        ${variant === "chosen" ? "bg-lightBlue text-darkBlue border-2 border-blue" : ""}
        ${classNames}
      `}
				onClick={onClick}
			>
				{children}
			</button>
		)
	}

export default Button
