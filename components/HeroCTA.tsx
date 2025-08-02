import React, { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ActiveLink from "./shared/ActiveLink";

const HeroCTA: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-start sm:gap-6 relative z-10">
      <ActiveLink
        href="/#contact-us"
        className="text-center w-full sm:w-auto mt-6 sm:mt-9 px-7 py-4 text-base leading-6 font-bold font-roboto tracking-normal capitalize border border-transparent bg-oaccent-700 text-white hover:bg-oaccent-900 hover:cursor-pointer transition-colors duration-200 rounded-xl"
      >
        {t("quote")}
      </ActiveLink>
      <Link
        className="flex w-full sm:w-auto mt-4 sm:mt-9 px-7 py-4 text-base leading-6 font-bold font-roboto tracking-normal justify-center capitalize border border-transparent text-white hover:cursor-pointer transition-colors duration-200 rounded-xl group"
        style={{ backgroundColor: '#65D072' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#5BB866';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#65D072';
        }}
        href="https://wa.me/14424164400"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("callUs")}
      </Link>
    </div>
  );
};

export default HeroCTA;
