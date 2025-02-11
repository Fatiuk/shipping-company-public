export default interface CardI {
  src: string;
  ctaLink?: string;
  slug: string;
  age: { min: number; max?: number };
  title: string;
  description: string | JSX.Element;
  alt?: string;
  ctaLabel?: string;
}
