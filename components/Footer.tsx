"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Address from "@/components/Address";
import SocialLinks from "@/components/SocialLinks";
import Logo from "@/components/shared/Logo";
import AddressI from "@/types/address";
import { NavigationItemI } from "@/types/navigation";
import ActiveLink from "@/components/shared/ActiveLink";

interface FooterI {
  navigation: NavigationItemI[];
  address: AddressI[];
}

const Footer: FC<FooterI> = ({ navigation, address }) => {
  const t = useTranslations("footer");
  const c = useTranslations("contactData");
  return (
    <footer className="flex flex-col">
      <div className="bg-oblue-50 dark:bg-oblue-800 py-4 md:py-6">
        <div className="max-w-full lg:max-w-[1600px] px-4 px-12 lg:px-10 2xl:px-20 mx-auto flex flex-col xl:flex-row flex-wrap sm:flex-nowrap justify-between gap-6 2xl:gap-8">
          <div className="flex flex-row xl:flex-col gap-6 xl:max-w-[350px] items-center justify-between md:justify-start">
            <div className="w-fit">
              <Logo />
            </div>
            <div className="hidden sm:block font-b3-b4 mx-auto lg:max-w-[550px] xl:max-w-[300px] 2xl:max-w-[300px]">
              {t("companyDesc")}
            </div>
            <SocialLinks />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-[auto_auto_auto] md:grid-cols-3 justify-items-start mx-auto w-full max-w-[860px] lg:max-w-[680px] 2xl:max-w-[860px]">
            {navigation.map((section) => (
              <div key={section.label} className="flex flex-col sm:mx-auto">
                <h4 className="font-bold text-lg text-[--color-a700-b200]">
                  {t(section.label)}
                </h4>
                {section.submenu &&
                  section.submenu.map((sub) => (
                    <ActiveLink
                      key={sub.label}
                      href={sub.href ?? "#"}
                      className="pt-2 pl-2 font-b3-b4 text-[--foreground] hover:underline underline-offset-4 "
                    >
                      {t(sub.label)}
                    </ActiveLink>
                  ))}
              </div>
            ))}
            <div className="flex flex-col sm:mx-auto">
              <h4 className="font-bold text-lg text-[--color-a700-b200]">
                {t("contact")}
              </h4>
              <p className="pt-2 pl-2">
                <span className="font-b3-b4">{`${c("email.title")}: `}</span>
                <Link
                  href={`mailto:${c("email.value")}`}
                  className="font-b3-b4 text-[--foreground] hover:underline underline-offset-4"
                >
                  {` ${c("email.value")}`}
                </Link>
              </p>

              <p className="pt-2 pl-2">
                <span className="font-b3-b4">{`${c("phone.title")}: `}</span>
                <Link
                  href={`tel:${c("phone.value")}`}
                  className="font-b3-b4 text-[--foreground] hover:underline underline-offset-4"
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
          <div className="hidden xl:flex flex-col xs:flex-row flex-wrap gap-8">
            {address.map((info) => (
              <Address address={info} key={info.city} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-oblue-700 py-2 px-8">
        <div className="container flex mx-auto max-w-full md:max-w-[1600px] px-8 xl:px-20 font-sans text-sm text-white">
          <p className="">&copy;&nbsp;2025 Dimi Noble</p>
          <p className="ms-auto">
            {t("poweredBy")}
            <Link href="https://theclicks.ca/" className="underline">
              TheClicks
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
