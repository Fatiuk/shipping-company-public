"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { getLocalStorageItem, setLocalStorageItem } from "@/components/utils"
import CartItemI from "@/types/cartItem";
import { City } from "@/types/city";
import { Lang } from "@/types/lang";
import { Theme } from "@/types/theme";

export interface GlobalContextI {
  lang: Lang;
  setLang: Dispatch<React.SetStateAction<Lang>>;
  toggleLang: () => void;
  theme: Theme;
  setTheme: Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
  city: City;
  setCity: Dispatch<React.SetStateAction<City>>;
  cart: CartItemI[];
  setCart: Dispatch<React.SetStateAction<CartItemI[]>>;
}

export const GlobalContext = createContext<GlobalContextI | undefined>(
  undefined
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("en");
  const [city, setCity] = useState<City>("Dieppe");
  const [cart, setCart] = useState<CartItemI[]>([]);

  useEffect(() => {
    const storedTheme: Theme =
      (localStorage.getItem("theme") as Theme) ?? "light";
    const storedLang: Lang = (localStorage.getItem("lang") as Lang) ?? "en";
    const storedCity: City = (localStorage.getItem("city") as City) ?? "Dieppe";
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark) "
    ).matches;
    const browserLang: Lang =
      ((navigator.language.indexOf("-") !== -1
        ? navigator.language.split("-")[0]
        : navigator.language) as Lang) ?? "en";
    // setCart(getLocalStorageItem("cart"));
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart") || ""));
    }
    setTheme((storedTheme as Theme) || (userPrefersDark ? "dark" : "light"));
    setLang((storedLang as Lang) || browserLang);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        lang,
        toggleLang,
        setLang,
        city,
        setCity,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextI => {
  const context = useContext(GlobalContext);
  // if (!context) {
  //   throw new Error("useGlobalContext must be used within a GlobalProvider");
  // }
  return context;
};
