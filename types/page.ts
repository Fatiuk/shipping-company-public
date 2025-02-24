export default interface PageProps {
  params: Promise<{ locale?: "en" | "fr"; slug?: string }>;
}
