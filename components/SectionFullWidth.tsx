import React, { FC, ReactNode } from "react";

interface SectionFullWidthI {
  image?: string;
  bgImage?: string;
  children: ReactNode;
  bgClass?: string;
  title?: string;
}

const SectionFullWidth: FC<SectionFullWidthI> = ({
  image,
  bgImage,
  bgClass = "bg-gradient-to-b from-owhite/75 to-oaccent-400 dark:from-oblue-900/75 dark:to-oblue-900/75",
  children,
  title,
}) => {
  const style = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      className="w-full relative z-0 w-full py-[6rem] overflow-hidden"
      style={style}
    >
      <div className={`absolute inset-0 ${bgClass}`}></div>
      <div className="relative z-10 mx-auto px-4 sm:max-w-full md:max-w-4xl">
        {title && (
          <header className="font-header text-4xl text-center pb-4 z-20">
            {title}
          </header>
        )}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">{children}</div>
          {image && (
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt="Section image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionFullWidth;
