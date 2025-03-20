import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function GlobalNotFound() {
  const headersList = await headers();

  const intlLocale = headersList.get("x-next-intl-locale") || "en";
  // console.log("Current locale from x-next-intl-locale:", intlLocale);

  return redirect(`/${intlLocale}/not-found-page`);
}
