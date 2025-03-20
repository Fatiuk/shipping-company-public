// import { redirect } from "next/navigation";
// import { headers } from "next/headers";

// export default async function GlobalNotFound() {
//   // Try to determine the locale from the referer
//   const headersList = await headers();
//   const referer = headersList.get("referer") || "";
//   const reqUrl = headersList.get("x-invoke-path") || "";

//   console.log("Referer:", referer);
//   console.log("Request URL:", reqUrl);

//   // Default fallback locale
//   let locale = "en";

//   // First try to extract locale from the request URL
//   if (reqUrl) {
//     const urlMatch = reqUrl.match(/^\/(en|fr)\//);
//     if (urlMatch && urlMatch[1]) {
//       locale = urlMatch[1];
//       console.log("Locale from request URL:", locale);
//     }
//   }

//   // If not found in request URL, try referer
//   if (locale === "en" && referer) {
//     try {
//       const refererPath = new URL(referer).pathname;
//       const localeMatch = refererPath.match(/^\/(en|fr)\//);
//       if (localeMatch && localeMatch[1]) {
//         locale = localeMatch[1];
//         console.log("Locale from referer:", locale);
//       }
//     } catch (e) {
//       console.error("Error parsing referer URL:", e);
//     }
//   }

//   console.log("Final locale:", locale);

//   redirect(`/${locale}/not-found-page`);
// }
// app/not-found.tsx
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function GlobalNotFound() {
  console.log("--- GlobalNotFound function executing ---");

  // Get all headers to check what's available
  const headersList = await headers();

  // Extract the locale from the x-next-intl-locale header, which contains the current locale
  const intlLocale = headersList.get("x-next-intl-locale") || "en";
  console.log("Current locale from x-next-intl-locale:", intlLocale);

  // Use the detected locale for the redirect
  console.log("Redirecting to:", `/${intlLocale}/not-found-page`);
  return redirect(`/${intlLocale}/not-found-page`);
}
