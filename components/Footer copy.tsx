"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Address from "@/components/Address";
import SocialLinks from "@/components/SocialLinks";
import Logo from "@/components/shared/Logo";
import AddressI from "@/types/address";
import { NavigationItemI } from "@/types/navigation";
import ActiveLink from "./shared/ActiveLink";

interface FooterI {
  navigation: NavigationItemI[];
  address: AddressI[];
}

const Footer: FC<FooterI> = ({ navigation, address }) => {
  const t = useTranslations("footer");
  const c = useTranslations("contactData");
  return (
    <>
      <div className="bg-oblue-50 dark:bg-oblue-800 py-6 md:py-9 items-center">
        <div className="sm:max-w-full lg:max-w-[1600px] px-8 2xl:px-20 mx-auto flex flex-row flex-wrap sm:flex-nowrap justify-between">
          <div className="flex flex-col gap-6 h-24 mb-8 max-w-[300px] xl:max-w-[400px]">
            <Logo />
            {t("companyDesc")}
            <SocialLinks />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-between w-full lg:max-w-[560px] xl:max-w-[700px] mx-auto">
            {navigation.map((section) => (
              <div key={section.label} className="flex flex-col mx-auto">
                <h4 className="font-bold text-lg text-[--color-a700-b200]">
                  {t(section.label)}
                </h4>
                {section.submenu &&
                  section.submenu.map((sub) => (
                    <ActiveLink
                      key={sub.label}
                      href={sub.href ?? "#"}
                      className="pt-2 font-sans hover:underline underline-offset-4 text-blank dark:text-owhite pl-2"
                    >
                      {t(sub.label)}
                    </ActiveLink>
                  ))}
              </div>
            ))}
            <div className="flex flex-col mx-auto">
              <h4 className="font-bold text-lg text-[--color-a700-b200]">
                {t("contact")}
              </h4>
              <p className="pt-2 pl-2">
                <span>{`${c("email.title")}: `}</span>
                <Link
                  href={`mailto:${c("email.value")}`}
                  className="font-sans hover:underline underline-offset-4 text-blank dark:text-owhite"
                >
                  {` ${c("email.value")}`}
                </Link>
              </p>

              <p className="pt-2 pl-2">
                <span>{`${c("phone.title")}: `}</span>
                <Link
                  href={`tel:${c("phone.value")}`}
                  className="font-sans hover:underline underline-offset-4 text-blank dark:text-owhite"
                >
                  {` ${c("phone.value")}`}
                </Link>
              </p>
              <div className="pt-8 pl-2">
                <ActiveLink
                  href="/#contact-us"
                  className="h-fit mr-4 py-3 px-8 px-4 lg:py-4 lg:px-8 rounded-lg font-bold text-[--color-w-black] transition-colors bg-[--color-a700-a900] hover:bg-[--color-a900-a700]"
                >
                  {t("quote2")}
                </ActiveLink>
                {/* <div className="mt-8">
                  <SocialLinks />
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row flex-wrap gap-8">
            {address.map((info) => (
              <Address address={info} key={info.city} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-oblue-700 py-2 px-8">
        <div className="flex mx-auto sm:max-w-full md:max-w-[1600px] font-sans text-sm text-white px-8 2xl:px-20">
          <p className="">&copy;&nbsp;2025 Dimi Noble</p>
          <p className="ms-auto">
            {t("poweredBy")}
            <Link href="https://theclicks.ca/" className="underline">
              TheClicks
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
