"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Address from "@/components/Address";
// import SocialLinks from "@/components/SocialLinks";
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
        <div className="max-w-full lg:max-w-[1600px] px-2 xs:px-4 sm:px-12 lg:px-10 2xl:px-20 mx-auto flex flex-col xl:flex-row flex-wrap sm:flex-nowrap justify-between gap-4 xs:gap-6 2xl:gap-8">
          <div className="flex flex-col items-center gap-4 xs:gap-6">
            <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
              <div className="flex flex-row xl:flex-col items-center justify-between md:justify-start md:gap-6 xl:max-w-[350px]">
                <div className="min-w-fit mr-4 md:mr-0">
                  <Logo />
                </div>
                <div className="hidden sm:block font-b3-b4 mx-auto lg:max-w-[550px] xl:max-w-[300px] 2xl:max-w-[300px] text-[--color-b500-b100] text-sm xs:text-base">
                  {t("companyDesc")}
                </div>
                {/* <SocialLinks /> */}
              </div>
              <div className="block sm:hidden font-b3-b4 max-w-[280px] xs:max-w-[400px] mt-2 470:mt-6 text-[--color-b500-b100] text-sm xs:text-base">
                {t("companyDesc")}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto_auto_auto] md:grid-cols-4 gap-y-6 sm:gap-y-0 justify-items-center sm:justify-items-start mx-auto w-full max-w-[860px] lg:max-w-[680px] 2xl:max-w-[860px]">
            {navigation.map((section) => (
              <div key={section.label} className="flex flex-col sm:mx-auto text-center sm:text-left">
                <h4 className="font-h4-h5 text-[--color-b700-w]">
                  {t(section.label)}
                </h4>
                {section.submenu &&
                  section.submenu.map((sub) => (
                    <ActiveLink
                      key={sub.label}
                      href={sub.href ?? "#"}
                      className="pt-2 pl-2 font-b3-b4 text-[--color-b500-b100] hover:underline underline-offset-4 "
                    >
                      {t(sub.label)}
                    </ActiveLink>
                  ))}
              </div>
            ))}
            <div className="flex flex-col sm:mx-auto text-center sm:text-left">
              <h4 className="font-h4-h5 text-[--color-b700-w]">
                {t("contact")}
              </h4>
              <p className="pt-2 pl-2">
                <span className="font-b3-b4 text-[--color-b500-b100]">{`${c(
                  "email.title"
                )}: `}</span>
                <Link
                  href={`mailto:${c("email.value")}`}
                  className="font-b3-b4 text-[--color-b500-b100] hover:underline underline-offset-4"
                >
                  {` ${c("email.value")}`}
                </Link>
              </p>

              <p className="pt-2 pl-2">
                <span className="font-b3-b4 text-[--color-b500-b100]">{`${c(
                  "phone.title"
                )}: `}</span>
                <Link
                  href={`tel:${c("phone.value")}`}
                  className="font-b3-b4 text-[--color-b500-b100] hover:underline underline-offset-4"
                >
                  {` ${c("phone.value")}`}
                </Link>
              </p>
              <div className="pt-8 pl-2">
                <ActiveLink
                  href="/#contact-us"
                  className="whitespace-nowrap h-fit mr-4 py-3 px-4 lg:py-4 lg:px-8 rounded-lg font-bold text-white transition-colors bg-oaccent-700 hover:bg-oaccent-900"
                >
                  {t("quote2")}
                </ActiveLink>
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
      <div className="bg-oblue-700 py-2">
        <div className="px-2 xs:px-6 sm:container flex flex-col xs:flex-row justify-between mx-auto font-b3-b4">
          <p className="text-white text-xs xs:text-sm">&copy;&nbsp;2025 Dimi Noble Inc</p>
          <p className="text-white xs:ms-auto text-xs xs:text-sm">
            {t("poweredBy")}{" "}
            <Link href="https://www.instagram.com/11x001am/" className="underline">
              X001AM
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
