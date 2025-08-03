import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface SectionFullWidthI {
  image?: string;
  bgImage?: string;
  children: ReactNode;
  bgClass?: string;
  title?: string;
  titleClass?: string;
  fullHeight?: boolean;
}

const SectionFullWidth: FC<SectionFullWidthI> = ({
  image,
  bgImage,
  bgClass = "bg-gradient-to-b from-owhite/75 to-oblue-100 dark:from-oblue-600/75 dark:to-oblue-900/75",
  children,
  title,
  titleClass = "",
  fullHeight = false,
}) => {
  const t = useTranslations();
  const style = bgImage || (fullHeight && image)
    ? {
        backgroundImage: `url(${bgImage || image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      className={`w-full relative z-0 overflow-hidden ${
        bgImage || fullHeight
          ? "lg:h-[700px]" 
          : "py-[1.5rem] sm:py-[3rem]"
      }`}
      style={style}
    >
      <div className={`absolute inset-0 ${
        fullHeight && image && !bgImage 
          ? "bg-black/80" 
          : bgClass
      }`}></div>
      <div className={`relative z-10 mx-auto container ${
        bgImage || fullHeight
          ? "h-full flex flex-col justify-center" 
          : ""
      }`}>
        {title && (
          <h2
            className={`font-roboto font-bold text-2xl leading-8 lg:text-[36px] lg:leading-[48px] capitalize text-[--color-b900-w] text-center pb-6 sm:pb-8 my-0 z-20 ${titleClass}`}
          >
            {t(title)}
          </h2>
        )}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">{children}</div>
          {image && !fullHeight && (
            <div className="w-3/5 lg:w-1/3 lg:mr-20">
              <Image
                width={640}
                height={360}
                src={image}
                alt="Section image"
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionFullWidth;
