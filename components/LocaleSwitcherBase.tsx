"use client";
import React, { useState, useTransition } from "react";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { usePathname, useRouter } from "@/i18n/routing";

type LocaleSwitcherBaseProps = {
  defaultValue: string;
  label: string;
  localeOptions: {
    value: string;
    label: string;
    abbr?: string;
  }[];
  variant?: "desktop" | "mobile";
};

export default function LocaleSwitcherBase({
  defaultValue,
  label,
  localeOptions,
  variant = "desktop",
}: LocaleSwitcherBaseProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    startTransition(() => {
      router.replace(
        //@ts-expect-error (okay)
        { pathname, params },
        { locale: value }
      );
    });
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // current locale option
  const selectedOption = localeOptions.find(
    (opt) => opt.value === selectedValue
  );

  return (
    <div
      className={clsx(
        "relative",
        variant === "desktop" && "inline-block",
        variant === "desktop" && { zIndex: 50, position: "relative" }
      )}
    >
      <label
        className={clsx(
          "block",
          variant === "desktop" ? "b2 mr-2" : "text-lg mr-2"
        )}
      >
        <p className="sr-only">{label}</p>
        <div
          onClick={toggleDropdown}
          className={clsx(
            "inline-flex items-center justify-between cursor-pointer",
            isPending && "opacity-50 cursor-not-allowed"
          )}
        >
          {variant === "desktop" ? (
            <>
              <span className="text-[--color-b400-b200] pr-1 hidden xl:inline">
                {selectedOption?.label}
              </span>
              <span className="text-[--color-b400-b200] pr-1 md:inline xl:hidden">
                {selectedOption?.abbr || selectedOption?.label}
              </span>
            </>
          ) : (
            <span className="text-[--color-b400-b200] pr-1">
              {selectedOption?.label}
            </span>
          )}
          <span
            className={clsx(
              "ml-1 w-2.5 h-2.5 border-t-2 border-l-2 border-oblue-200 relative -top-1 transition-transform duration-200 hover:border-oaccent-900 hover:border-t-4 hover:border-l-4 ",
              isOpen ? "rotate-45 mt-3" : "-rotate-135"
            )}
          ></span>
        </div>
      </label>

      {isOpen && (
        <ul
          className={clsx(
            variant === "desktop"
              ? "absolute right-0 z-[999] min-w-fit bg-[--color-b50-b900] rounded-md shadow-lg mt-1"
              : "w-full mt-2"
          )}
        >
          {localeOptions.map(
            (option) =>
              option.value !== selectedValue && (
                <li
                  key={option.value}
                  className={clsx(
                    "cursor-pointer hover:text-[--color-a900-b200]",
                    variant === "desktop" ? "py-2 px-3 b2" : "py-2 px-4 b2"
                  )}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {variant === "desktop" ? (
                    <>
                      <span className="text-[--color-b400-b200] md:hidden xl:inline">
                        {option.label}
                      </span>
                      <span className="text-[--color-b400-b200] hidden md:inline xl:hidden">
                        {option.abbr || option.label}
                      </span>
                    </>
                  ) : (
                    <span className="text-[--color-b400-b200]">
                      {option.label}
                    </span>
                  )}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}
