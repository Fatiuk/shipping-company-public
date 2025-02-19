import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone" as const,
  experimental: {
    middleware: true,
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "x-vercel-ip-country",
          value: "1",
        },
      ],
    },
  ],
};

export default withNextIntl(nextConfig);
