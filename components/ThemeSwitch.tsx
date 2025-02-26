"use client";

import { IoMdMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <label className="flex items-center cursor-pointer mr-2">
      <input
        type="checkbox"
        className="hidden"
        aria-label="Toggle theme"
        checked={resolvedTheme === "dark"}
        onChange={(e) => {
          handleToggleTheme(e);
        }}
      />
      <div className="relative h-[30px] rounded-full transition duration-300">
        <div
          className={
            "bg-[--color-b200-b50] w-[50px] h-[30px] border border-oblue-900 rounded-full transition duration-300"
          }
        >
          {/* Text inside the toggle */}
          <span
            className="absolute top-1.5 right-[2px] left-[4px] dark:-left-[1px] transform transition duration-300 
              translate-x-0 dark:translate-x-8 text-left w-full"
          >
            {resolvedTheme === "dark" ? (
              <IoMdMoon
                className="h-4 w-4 text-oblue-900"
                style={{ stroke: "#020a0d", strokeWidth: 48 }}
              />
            ) : (
              <MdOutlineWbSunny className="h-4 w-4 text-oblue-700" />
            )}
          </span>
        </div>
        <div
          className="absolute top-[2px] -left-[5px] dark:left-[3px] w-6 h-6 bg-oblue-900 rounded-full shadow 
          transform transition duration-300 dark:translate-x-0 translate-x-7"
        />
      </div>
    </label>
  );
};

export default ThemeSwitcher;
