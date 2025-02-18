import { ReactElement } from "react";

export default interface Step {
  stepNumber: string;
  title: string;
  description: string;
  icon?: ReactElement;
}
