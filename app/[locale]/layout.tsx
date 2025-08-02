import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Nunito_Sans, Roboto_Condensed } from "next/font/google";
import { notFound } from "next/navigation";
import { location } from "@/app/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { NavigationItemI } from "@/types/navigation";
import "../globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-header",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale?: "en" | "fr" }>;
};

const navigation: NavigationItemI[] = [
  // {
  //   label: "videoReviews",
  //   href: "/video-reviews",
  // },
  // {
  //   label: "yelpReviews",
  //   href: "/yelp-reviews",
  // },
  {
    label: "reviews",
    href: "/reviews",
  },
  {
    label: "howItWorks",
    href: "/how-it-works",
  },
  // {
  //   label: "team",
  //   href: "/team",
  // },
  {
    label: "company",
    submenu: [
      { label: "blog", href: "/company/blog" },
      { label: "about", href: "/company/about" },
      { label: "faq", href: "/company/faq" },
    ],
  },
];

const footerNavigation: NavigationItemI[] = [
  {
    label: "company",
    submenu: [
      { label: "about", href: "/company/about" },
      // { label: "team", href: "/team" },
      { label: "reviews", href: "/reviews" },
      { label: "blog", href: "/company/blog" },
    ],
  },
  {
    label: "features",
    submenu: [
      { label: "faq", href: "/company/faq" },
      { label: "termsAndConditions", href: "/terms-and-conditions" },
      { label: "accessibilityStatement", href: "/accessibility-statement" },
      { label: "orgPolicy", href: "/organizational-policy" },
      { label: "privacyPolicy", href: "/privacy-policy" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Reliable Car Shipping Across the Nation",
  description:
    "At Dimi Noble Inc, we stand out in the vehicle relocation sector. We believe in showcasing our excellence, not just making promises. Our services cover the entire country, providing our customers with the transportation of any type of vehicle.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-167x167.png",
        sizes: "167x167",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.ico" }], // fallback
  },
};

export default async function RootLayout(props: Props) {
  const { children } = props;
  const params = await props.params;
  const locale = params.locale;

  if (!locale || !routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head></head>
      <body
        className={`${robotoCondensed.variable} ${nunitoSans.variable} antialiased flex flex-col min-h-screen font-sans text-sm bg-owhite dark:bg-oblue-900`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme-preference"
          forcedTheme="dark"
        >
          {/* Force dark theme only - overrides any previously saved user preferences */}
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navigation navigation={navigation} />
            <main className="w-full flex flex-wrap flex-grow mt-[64px] mx-auto px-0">
              {children}
            </main>
            <Footer
              navigation={footerNavigation}
              address={[
                {
                  city: location.city.label,
                  address: location.address,
                  mapLink: location.mapLink,
                },
              ]}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
