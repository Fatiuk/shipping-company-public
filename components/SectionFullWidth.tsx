import React, { FC, ReactNode } from "react"

interface SectionFullWidthI {
	bgImage?: string;
	children: ReactNode;
	bgClass?: string;
	title?: string;
}

const SectionFullWidth: FC<SectionFullWidthI> = ({ bgImage, bgClass = "bg-gradient-to-b from-owhite/75 to-owhite/75 dark:from-oblue-900/75 dark:to-oblue-900/75", children, title }) => {

	const style = bgImage ? {backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {};

	return (
		<div className="w-full relative z-0 w-full py-[6rem] overflow-hidden" style={style}>
			<div className={`absolute inset-0 ${bgClass}`}></div>
			<div className="relative z-10 mx-auto px-4 sm:max-w-full md:max-w-4xl">
				{title && (<header className="font-header text-4xl text-center pb-4 z-20">{title}</header>)}
				{children}
			</div>
		</div>
	);
}

export default SectionFullWidth