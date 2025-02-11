import ColorI from "@/types/color";
import PrintLocationI from "@/types/printLocation";
import Size from "@/types/size";

export default interface CartItemI {
  amount: number;
  color: ColorI;
  // image: string;
  price: number;
  printLocation: PrintLocationI;
  size: Size;
  slug: string;
  thumb: string;
  title: string;
}
