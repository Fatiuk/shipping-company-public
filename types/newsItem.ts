import { ReactNode } from "react";

export default interface NewsItemI {
  id: number;
  date: string;
  slug: string;
  tags: string[];
  title: string;
  text: ReactNode;
}
