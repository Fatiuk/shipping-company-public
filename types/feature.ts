import { JSX } from "react";

export default interface FeatureI {
  src: string;
  title: string;
  description: string | JSX.Element;
  alt?: string;
}
