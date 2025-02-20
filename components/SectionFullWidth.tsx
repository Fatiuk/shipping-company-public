import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
  bgClass = "bg-gradient-to-b from-owhite/75 to-oblue-100 dark:from-oblue-600/75 dark:to-oblue-900/75",
  children,
  title,
}) => {
  const t = useTranslations();
  const style = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      className="w-full relative z-0 w-full py-[4rem] overflow-hidden"
      style={style}
    >
      <div className={`absolute inset-0 ${bgClass}`}></div>
      {/* <div className="relative z-10 mx-auto px-4 sm:max-w-full md:max-w-4xl"> */}
      <div className="relative z-10 mx-auto px-4 xl:max-w-[2000px]">
        {title && (
          <header className="font-header text-oblue-900 text-4xl text-center pb-4 z-20">
            {t(title)}
          </header>
        )}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full flex-1">{children}</div>
          {image && (
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
