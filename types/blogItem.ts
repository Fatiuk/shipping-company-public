import { ReactNode } from "react";

export default interface BlogItemI {
  id: number;
  date: string;
  slug: string;
  tags: string[];
  title: string;
  text: ReactNode;
}
