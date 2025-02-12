"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Address from "@/components/Address";
import Promotion from "@/components/Promotion";
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
      <div className="bg-oblue-50 dark:bg-oblue-800 py-9">
        <div className="mx-auto sm:max-w-full md:max-w-7xl text-sm text-black flex flex-row flex-wrap sm:flex-nowrap gap-x-8 px-8">
          <div className="flex h-24 mb-8 shrink-0">
            <Logo />
          </div>
          <div className="grid grid-cols-1 gap-4 pb-8 place-content-start shrink-0">
            {navigation.map((nav) => (
              <Link
                key={nav.label}
                href={nav.href ?? "#"}
                className="font-sans hover:underline underline-offset-4 text-blank dark:text-owhite"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col xs:flex-row flex-wrap gap-8 xs:ms-auto">
            {address.map((info) => (
              <Address address={info} key={info.city} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-oblue-400 py-2 px-8">
        <div className="flex mx-auto sm:max-w-full md:max-w-7xl font-sans text-sm text-black px-8">
          <p className="">&copy;&nbsp;2024 Otoshi Judo</p>
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
