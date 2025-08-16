"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LocaleSwitcherMobile from "@/components/LocaleSwitcherMobile";
import ActiveLink from "@/components/shared/ActiveLink";
import Logo from "@/components/shared/Logo";
import { NavigationI } from "@/types/navigation";
import { TrackablePhoneLink } from "@/components/TrackableComponents";

const Navigation: FC<NavigationI> = ({ navigation }: NavigationI) => {
  const t = useTranslations("navbar");
  const { resolvedTheme } = useTheme();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeMobileSubmenuIndex, setActiveMobileSubmenuIndex] = useState<
    number | null
  >(null);

  const menuMobileRef = useRef<HTMLDivElement>(null);

  const toggleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleMobileSubmenu = (index: number) => {
    setActiveMobileSubmenuIndex(
      activeMobileSubmenuIndex === index ? null : index
    );
  };

  const handleClickOutsideMobile = (e: MouseEvent) => {
    if (
      menuMobileRef.current &&
      !menuMobileRef.current.contains(e.target as Node) &&
      isMenuOpen
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) setMenuOpen(false);
  }, [resolvedTheme]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, []);

  return (
    <>
      <div className="fixed py-2 top-0 z-50 w-full bg-[--color-b50-b950] shadow-md">
        <div className="flex justify-between mx-auto container">
          <div className="min-w-12 min-h-12 self-center">
            <Logo />
          </div>
          <nav className={`hidden lg:flex self-center text-center`}>
            <ul className="flex items-center gap-x-4 xl:gap-x-6">
              {navigation.map((nav) => (
                <li key={t(nav.label)} className="relative group">
                  {nav.submenu ? (
                    <>
                      <ActiveLink
                        href={nav.href ?? ""}
                        activeClassName="text-[--color-a-b200]"
                        className="flex items-center text-[--color-b900-w]"
                      >
                        {t(nav.label)}
                        <span className="ml-2 w-2.5 h-2.5 border-t-2 border-l-2 border-oblue-200 relative -top-0.5 transform -rotate-135 transition-transform group-hover:rotate-45 origin-center"></span>
                      </ActiveLink>
                      <ul className="absolute w-max left-0 pt-2 bg-[--color-b50-b900] rounded-xl drop-shadow-xl dark:shadow-light-lg p-2 space-y-2 hidden group-hover:block z-10">
                        {nav.submenu.map((sub) => (
                          <li key={sub.label} className="text-left">
                            <ActiveLink
                              href={sub.href ?? ""}
                              className="block px-4 py-2 hover:bg-oaccent-900 hover:text-white hover:rounded-lg text-[--color-black-w]"
                            >
                              {t(sub.label)}
                            </ActiveLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ActiveLink
                      href={nav.href ?? "#"}
                      className={`flex justify-center py-2 self-center rounded-xl hover:rounded-xl transition-colors
										relative after:absolute after:left-0 after:bottom-2 after:origin-right after:scale-x-0 after:w-full after:h-[1px] after:-mb-1 
                    after:dark:bg-white after:transition-transform after:duration-300 hover:after:bg-[--color-a900-b200]
										hover:after:origin-left hover:after:scale-x-100 
										${
                      nav.cta === "primary"
                        ? "ml-6 px-6 py-3 rounded-xl font-bold text-white bg-oaccent-700 hover:bg-oaccent-900 after:content-none"
                        : nav.cta === "secondary"
                        ? "px-3 rounded-xl font-bold text-[--color-black-b50]  hover:text-[--color-w-black] bg-[--color-b200-b600] hover:bg-[--color-b700-b400] after:content-none"
                        : "text-[--color-b900-w]"
                    }`}
                      activeClassName="!text-[--color-a900-b200]"
                    >
                      {t(nav.label)}
                    </ActiveLink>
                  )}
                </li>
              ))}
            </ul>
            <button
              className={`lg:hidden`}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5"></span>
                <span className="block w-6 h-0.5"></span>
                <span className="block w-6 h-0.5"></span>
              </div>
            </button>
          </nav>

          <div className={`hidden lg:flex items-center lg:gap-10`}>
            <div className="flex items-center gap-x-1">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <img 
                  src="/phone.svg" 
                  alt="Support" 
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white opacity-50">
                  {t("support24")}
                </span>
                <TrackablePhoneLink 
                  phoneNumber="+15618945331"
                  section="header_navigation"
                  className="text-sm font-bold text-[--color-b900-w] hover:text-[--color-a700-a500] transition-colors"
                >
                  (561) 894-5331
                </TrackablePhoneLink>
              </div>
            </div>
            <ActiveLink
              href="/#contact-us"
              className="whitespace-nowrap h-fit py-3 px-4 lg:py-4 lg:px-8 rounded-lg font-bold text-white bg-oaccent-700 hover:bg-oaccent-900 transition-colors"
            >
              {t("quote")}
            </ActiveLink>
            <div className="flex items-center gap-x-4 xl:ms-6">
              {/* <ThemeSwitch /> */}
              <LocaleSwitcher />
            </div>
          </div>

          <div
            className={`flex lg:hidden justify-center items-center sm:gap-x-8 ms-2 sm:ms-6`}
          >
            <div className="flex items-center gap-x-2 mr-8">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white opacity-50">
                  {t("support24")}
                </span>
                <TrackablePhoneLink 
                  phoneNumber="+15618945331"
                  section="mobile_navigation"
                  className="text-sm font-bold text-[--color-b900-w] hover:text-[--color-a700-a500] transition-colors"
                >
                  (561) 894-5331
                </TrackablePhoneLink>
              </div>
            </div>
            <div
              className={`flex lg:hidden items-center p-3 me-[-0.75rem] hover:cursor-pointer`}
              onClick={toggleMenuOpen}
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--color-b500-w)"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--color-b500-w)"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={menuMobileRef}
        className={`fixed top-0 left-0 right-0 z-50 mt-[72px]
          lg:hidden
          overflow-hidden
          shadow-mobmenu
          border-t-1 border-gray-600
          bg-[--color-w-b700]
          text-[--color-black-w]
          transition-[max-height] duration-500 ease-in-out
          ${isMenuOpen ? "max-h-[2000px]" : "max-h-0"}`}
      >
        <nav
          className={`flex lg:hidden gap-x-1.5 justify-center text-center text-lg`}
        >
          <ul className="flex flex-col justify-center w-full mx-4">
            {navigation.map((nav, index) => (
              <li key={nav.label} className="flex flex-col relative group py-2">
                {nav.submenu ? (
                  <>
                    <div className="flex justify-center">
                      <div 
                        className="flex items-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileSubmenu(index);
                        }}
                      >
                        <ActiveLink
                          href={nav.href ?? "#"}
                          className="flex justify-center py-1"
                          activeClassName="text-[--color-a900-b200]"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMobileSubmenu(index);
                          }}
                        >
                          {t(nav.label)}
                        </ActiveLink>
                        <span
                          className={`ml-2 w-2.5 h-2.5 border-t-2 border-l-2 border-oblue-200 hover:cursor-pointer hover:border-oaccent-900 hover:border-t-4 hover:border-l-4 transform transition-transform origin-center ${
                            activeMobileSubmenuIndex === index
                              ? "rotate-45"
                              : "-rotate-135"
                          }`}
                        ></span>
                      </div>
                    </div>
                    {activeMobileSubmenuIndex === index && (
                      <ul className="w-full pt-2 p-2 space-y-2">
                        {nav.submenu.map((sub) => (
                          <li key={sub.label} className="text-sm text-center">
                            <ActiveLink
                              href={sub.href ?? ""}
                              className="inline-block py-2 relative 
                              after:absolute after:left-0 after:bottom-2 after:origin-right after:scale-x-0 after:w-full 
                              after:h-[1px] after:-mb-1 after:dark:bg-white after:transition-transform after:duration-300 
                              hover:after:bg-[--color-a900-b100] hover:after:origin-left hover:after:scale-x-100"
                              activeClassName="text-[--color-a900-b200]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {t(sub.label)}
                            </ActiveLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <ActiveLink
                    href={nav.href ?? "#"}
                    className={`flex justify-center py-2 self-center rounded-xl hover:rounded-xl transition-colors relative 
                      after:absolute after:left-0 after:bottom-2 after:origin-right after:scale-x-0 after:w-full 
                      after:h-[1px] after:-mb-1 after:dark:bg-white after:transition-transform after:duration-300 
                      hover:after:bg-[--color-a900-b100] hover:after:origin-left hover:after:scale-x-100 
											${
                        nav.cta === "primary"
                          ? "w-full px-4 rounded-lg font-bold text-[--color-black-w] hover:text-[--color-w-black] bg-[--color-a700-a900] hover:bg-[--color-a900-a700] after:content-none"
                          : nav.cta === "secondary"
                          ? "w-full px-4 rounded-xl font-bold text-[--color-black-b50] hover:text-[--color-w-black] bg-[--color-b200-b600] hover:bg-[--color-b700-b400] after:content-none"
                          : "text-[--color-black-w]"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(nav.label)}
                  </ActiveLink>
                )}
              </li>
            ))}
            {/* Get a Quote button in mobile menu */}
            <li className="flex flex-col relative group py-2 mt-4">
              <ActiveLink
                href="/#contact-us"
                className="w-full py-3 px-6 rounded-lg font-bold text-white bg-oaccent-700 hover:bg-oaccent-900 transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                {t("quote")}
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-6">
          <div className="flex justify-center gap-x-6">
            {/* <ThemeSwitch /> */}
            <LocaleSwitcherMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
