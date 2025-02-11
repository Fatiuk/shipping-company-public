"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import LangSwitch from "@/components/LangSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveLink from "@/components/shared/ActiveLink";
import Logo from "@/components/shared/Logo";
import { NavigationI } from "@/types/navigation";

const Navigation: FC<NavigationI> = ({ navigation }: NavigationI) => {
  const t = useTranslations("navbar");

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeMobileSubmenuIndex, setActiveMobileSubmenuIndex] = useState<
    number | null
  >(null);

  const menuMobileRef = useRef<HTMLDivElement>(null);

  const toggleMenuOpen = () => setMenuOpen(!isMenuOpen);

  const toggleMobileSubmenu = (index: number) => {
    setActiveMobileSubmenuIndex(
      activeMobileSubmenuIndex === index ? null : index
    );
  };

  const { theme, resolvedTheme } = useTheme();
  const colorSandwichMenu = resolvedTheme === "dark" ? "#F4F4F2" : "#004EA7";

  const handleClickOutsideMobile = (e: MouseEvent) => {
    if (
      menuMobileRef.current &&
      !menuMobileRef.current.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, []);

  return (
    <>
      <div className="fixed py-2 top-0 z-50 w-full bg-oblue-50 dark:bg-oblue-800 shadow-md">
        <div className="flex justify-between mx-auto sm:max-w-full md:max-w-7xl px-8">
          <div className="min-w-12 min-h-12 self-center">
            <Logo />
          </div>
          <nav className={`hidden lg:flex self-center text-center`}>
            <ul className="flex items-center gap-x-6">
              {navigation.map((nav) => (
                <li key={t(nav.label)} className="relative group">
                  {nav.submenu ? (
                    <>
                      <ActiveLink
                        href={nav.href ?? "#"}
                        className="flex items-center text-oblue-900 dark:text-white hover:dark:text-oaccent-700"
                      >
                        {t(nav.label)}
                        <span className="ml-2 w-2.5 h-2.5 border-t-2 border-l-2 border-oblue-200 relative -top-1 transform -rotate-135 transition-transform group-hover:rotate-45 group-hover:mt-3"></span>
                      </ActiveLink>
                      <ul className="absolute w-max left-0 pt-2 text-black bg-oblue-200 dark:bg-owhite rounded-xl drop-shadow-xl p-2 space-y-2 hidden group-hover:block z-10">
                        {nav.submenu.map((sub) => (
                          <li key={sub.label} className="text-left">
                            <ActiveLink
                              href={nav.href ?? "#"}
                              className="block px-4 py-2 hover:bg-oaccent-900 hover:text-white hover:rounded-xl"
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
										relative after:absolute after:left-0 after:bottom-2 after:origin-right after:scale-x-0 after:w-full after:h-[1px] after:-mb-1 after:dark:bg-white after:transition-transform after:duration-300 hover:after:bg-oaccent-900 hover:after:dark:bg-oaccent-700
										hover:after:origin-left hover:after:scale-x-100 
										${
                      nav.cta === "primary"
                        ? "px-3 rounded-xl font-bold text-black hover:text-white dark:text-white hover:dark:text-black bg-oaccent-700 dark:bg-oaccent-900 hover:bg-oaccent-900 hover:dark:bg-oaccent-700 after:content-none"
                        : nav.cta === "secondary"
                        ? "px-3 rounded-xl font-bold text-black hover:text-white bg-oblue-200 hover:bg-oblue-700 dark:text-oblue-50 dark:bg-oblue-600 hover:dark:text-black hover:dark:bg-oblue-400 after:content-none"
                        : "text-black dark:text-white hover:dark:text-oaccent-700"
                    }`}
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
          <div className={`hidden lg:flex gap-x-8 ms-6`}>
            <ThemeSwitch />
            <LangSwitch />
          </div>
          {!isMenuOpen && (
            <div
              className={`flex lg:hidden items-center p-3 me-[-0.75rem] hover:cursor-pointer`}
              onClick={toggleMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={colorSandwichMenu}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
          {isMenuOpen && (
            <div
              className={`flex lg:hidden items-center p-3 me-[-0.75rem] hover:cursor-pointer`}
              onClick={toggleMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={colorSandwichMenu}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 mt-[64px]
			lg:hidden
			overflow-hidden
			shadow-mobmenu
			border-t-1 border-gray-600
			bg-owhite dark:bg-oblue-700
			text-black dark:text-white
			transition-[max-height] duration-500 ease-in-out
			${isMenuOpen ? "max-h-[2000px]" : "max-h-0"}`}
      >
        <nav
          ref={menuMobileRef}
          className={`flex lg:hidden gap-x-1.5 justify-center text-center text-lg`}
        >
          <ul className="flex flex-col justify-center w-full mx-4">
            {navigation.map((nav, index) => (
              <li key={nav.label} className="flex flex-col relative group py-2">
                {nav.submenu ? (
                  <>
                    <div className="flex justify-center">
                      <ActiveLink
                        href={nav.href ?? "#"}
                        className="flex justify-center py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        {t(nav.label)}
                      </ActiveLink>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileSubmenu(index);
                        }}
                        className={`relative top-5 ml-2 w-2.5 h-2.5 border-t-2 border-l-2 border-oblue-200 hover:cursor-pointer hover:border-oaccent-900 hover:border-t-4 hover:border-l-4 transform transition-transform ${
                          activeMobileSubmenuIndex === index
                            ? "-mt-1 -rotate-135"
                            : "rotate-45"
                        }`}
                      ></span>
                    </div>
                    {activeMobileSubmenuIndex === index && (
                      <ul className="w-full pt-2 p-2 space-y-2">
                        {nav.submenu.map((sub) => (
                          <li key={sub.label} className="text-sm text-center">
                            <ActiveLink
                              href={nav.href ?? "#"}
                              className="inline-block py-2 relative after:absolute after:left-0 after:bottom-2 after:origin-right after:scale-x-0 after:w-full after:h-[1px] after:-mb-1 after:dark:bg-white after:transition-transform after:duration-300 hover:after:bg-oaccent-900 hover:after:dark:bg-oaccent-700 hover:after:origin-left hover:after:scale-x-100 text-black dark:text-white hover:dark:text-oaccent-700"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.label}
                            </ActiveLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <ActiveLink
                    href={nav.href ?? "#"}
                    className={`flex justify-center py-2 self-center rounded-xl hover:rounded-xl transition-colors
											relative after:absolute after:left-0 after:bottom-2 after:origin-right after:scale-x-0 after:w-full after:h-[1px] after:-mb-1 after:dark:bg-white after:transition-transform after:duration-300 hover:after:bg-oaccent-900 hover:after:dark:bg-oaccent-700
											hover:after:origin-left hover:after:scale-x-100 
											${
                        nav.cta === "primary"
                          ? "w-full px-4 rounded-xl font-bold text-black hover:text-white dark:text-white hover:dark:text-black bg-oaccent-700 dark:bg-oaccent-900 hover:bg-oaccent-900 hover:dark:bg-oaccent-700 after:content-none"
                          : nav.cta === "secondary"
                          ? "w-full px-4 rounded-xl font-bold text-black hover:text-white bg-oblue-200 hover:bg-oblue-700 dark:text-oblue-50 dark:bg-oblue-600 hover:dark:text-black hover:dark:bg-oblue-400 after:content-none"
                          : "text-black dark:text-white hover:dark:text-oaccent-700"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(nav.label)}
                  </ActiveLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center gap-x-6 py-6">
          <ThemeSwitch />
          <LangSwitch />
        </div>
      </div>
    </>
  );
};

export default Navigation;
