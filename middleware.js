import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de","tr"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|de|tr)/:path*"],
};
