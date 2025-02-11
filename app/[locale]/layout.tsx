import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Nunito_Sans, Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { groups } from "@/app/data";
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
  params: Promise<{ locale: string }>;
};

const navigation: NavigationItemI[] = [
  {
    label: "videoReviews",
    href: "/video-reviews",
  },
  {
    label: "yelpReviews",
    href: "/yelp-reviews",
  },
  {
    label: "howItWorks",
    href: "/how-it-works",
  },
  {
    label: "team",
    href: "/team",
  },
  {
    label: "company",
    submenu: [
      { label: "blog", href: "/blog" },
      { label: "about", href: "/about" },
      { label: "faq", href: "/faq" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Reliable Car Shipping Across the Nation",
  description:
    "At Diminoble transportations, we stand out in the vehicle relocation sector. We believe in showcasing our excellence, not just making promises. Our services cover the entire country, providing our customers with the transportation of any type of vehicle.",
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!routing.locales.includes(locale as any)) return notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${robotoCondensed.variable} ${nunitoSans.variable} antialiased flex flex-col min-h-screen font-sans text-sm bg-owhite dark:bg-oblue-900`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          console.log("Debug - Messages loaded successfully");
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navigation navigation={navigation} />
            <main className="w-full flex flex-wrap flex-grow mt-[64px] mx-auto px-0">
              {children}
            </main>
            <Footer
              navigation={navigation}
              address={groups.map((group) => ({
                city: group.city.label,
                address: group.location.address,
                mapLink: group.location.mapLink,
              }))}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
