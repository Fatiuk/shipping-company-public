import React, { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ActiveLink from "./shared/ActiveLink";

const HeroCTA: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-6 relative z-10">
      <ActiveLink
        href="/#contact-us"
        className="text-center w-full sm:w-auto mt-6 sm:mt-9 px-7 py-4 text-xl font-header capitalize border border-transparent bg-oaccent-900 text-white hover:bg-oaccent-700 hover:cursor-pointer transition-colors duration-200 rounded-xl"
      >
        {t("quote")}
      </ActiveLink>
      <Link
        className="flex w-full sm:w-auto mt-4 sm:mt-9 px-7 py-4 text-xl justify-center font-header capitalize border border-transparent bg-oblue-600 text-oblue-50 hover:bg-oblue-400 hover:cursor-pointer transition-colors duration-200 rounded-xl group"
        href="tel:"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 me-2 text-oblue-50 transition-all rotate-0 group-hover:mt-1 group-hover:-rotate-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        {t("callUs")}
      </Link>
    </div>
  );
};

export default HeroCTA;
