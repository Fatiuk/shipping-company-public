import createMiddleware from "next-intl/middleware";
import { locales } from "./lib/config";

export default createMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|fr)/:path*"],
};
