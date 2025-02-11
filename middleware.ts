import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./lib/config";

// List of allowed countries (ISO country codes)
const allowedRegions = [
  // North America
  "US", // United States
  "CA", // Canada
  "MX", // Mexico

  // Europe
  "AT", // Austria
  "BE", // Belgium
  "BG", // Bulgaria
  "HR", // Croatia
  "CY", // Cyprus
  "CZ", // Czech Republic
  "DK", // Denmark
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "DE", // Germany
  "GR", // Greece
  "HU", // Hungary
  "IE", // Ireland
  "IT", // Italy
  "LV", // Latvia
  "LT", // Lithuania
  "LU", // Luxembourg
  "MT", // Malta
  "NL", // Netherlands
  "PL", // Poland
  "PT", // Portugal
  "RO", // Romania
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
  "SE", // Sweden
  "UA", // Ukraine
  "GB", // United Kingdom
  "NO", // Norway
  "IS", // Iceland
  "CH", // Switzerland
];

const defaultLocale = "en";

export function geoMiddleware(req: NextRequest) {
  const country = req.geo?.country || "Unknown";

  console.log(`Incoming request from country: ${country}`);

  // Redirect from `/` to `/en` if no locale is provided
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
  }

  // If geo info is not available or country is unknown, you might want to allow access or set a default behavior.
  if (country === "Unknown") {
    return NextResponse.next(); // Allow or handle it as per your needs
  }

  // Avoid redirect loops by ensuring no further redirects when already on the /blocked page
  if (req.nextUrl.pathname === "/blocked") {
    return NextResponse.next();
  }

  // If the country is not in the allowed list, redirect to the blocked page
  if (!allowedRegions.includes(country)) {
    return NextResponse.redirect(new URL("/blocked", req.url));
  }

  return NextResponse.next(); // Continue for allowed countries
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export function middleware(req: NextRequest) {
  // First, handle the geo-blocking
  const geoResponse = geoMiddleware(req);
  if (geoResponse) return geoResponse;

  // Then, apply next-intl for locale-based routing
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(en|fr)/:path*", "/blocked"],
};
