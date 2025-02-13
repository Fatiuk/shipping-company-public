"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Address from "@/components/Address";
import Promotion from "@/components/Promotion";
import SocialLinks from "@/components/SocialLinks";
import Logo from "@/components/shared/Logo";
import AddressI from "@/types/address";
import { NavigationItemI } from "@/types/navigation";

interface FooterI {
  navigation: NavigationItemI[];
  address: AddressI[];
}

const Footer: FC<FooterI> = ({ navigation, address }) => {
  const t = useTranslations("footer");
  return (
    <>
      {/* <Promotion /> */}
      <div className="bg-oblue-50 dark:bg-oblue-800 py-9 items-center">
        <div className="sm:max-w-full lg:max-w-[1600px] px-8 2xl:px-20 mx-auto flex flex-wrap sm:flex-nowrap justify-between">
          <div className="flex flex-col gap-6 h-24 mb-8">
            <Logo />
            <SocialLinks />
          </div>
          <div className="flex gap-4 justify-between w-full max-w-[460px] mx-auto">
            {navigation.map((section) => (
              <div
                key={section.label}
                className="flex flex-col justify-between mx-auto"
              >
                <h4 className="font-bold text-lg text-[--color-a700-b200]">
                  {t(section.label)}
                </h4>
                {section.submenu &&
                  section.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href ?? "#"}
                      className="font-sans hover:underline underline-offset-4 text-blank dark:text-owhite pl-4"
                    >
                      {t(sub.label)}
                    </Link>
                  ))}
              </div>
            ))}
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
            {t("poweredBy")}{" "}
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
