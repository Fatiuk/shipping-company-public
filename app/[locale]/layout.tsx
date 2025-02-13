import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Nunito_Sans, Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { location } from "@/app/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { NavigationItemI } from "@/types/navigation";
import "../globals.css";
import NotFound from "./not-found";

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
      { label: "team", href: "/team" },
      { label: "testimonials", href: "/video-reviews" },
      { label: "blog", href: "/company/blog" },
    ],
  },
  {
    label: "features",
    submenu: [
      { label: "faq", href: "/company/faq" },
      { label: "termsAndConditions", href: "/terms-conditions" },
      { label: "accessibilityStatement", href: "/accessibility-statement" },
      { label: "orgPolicy", href: "/organizational-policy" },
      { label: "privacyPolicy", href: "/privacy-policy" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Reliable Car Shipping Across the Nation",
  description:
    "At Diminoble transportations, we stand out in the vehicle relocation sector. We believe in showcasing our excellence, not just making promises. Our services cover the entire country, providing our customers with the transportation of any type of vehicle.",
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

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head></head>
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
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navigation navigation={navigation} />
            <main className="w-full flex flex-wrap flex-grow mt-[64px] mx-auto px-0">
              {children}
            </main>
            <Footer
              navigation={footerNavigation}
              // address={groups.map((group) => ({
              //   city: group.city.label,
              //   address: group.location.address,
              //   mapLink: group.location.mapLink,
              // }))}
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
