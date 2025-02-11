import Image from "next/image";
import Input from "@/components/form/Input";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useGlobalContext } from "@/context/context";
import { itemColors, itemSizes, itemPrintLocations } from "@/app/data";
import CartItemI from "@/types/cartItem";
import ColorI from "@/types/color";
import PrintLocationI from "@/types/printLocation";
import Size from "@/types/size";

const StoreItemFull: FC<{
  price: number;
  slug: string;
  title: string;
  thumbs: string[];
}> = ({ price, slug, title, thumbs }) => {
  const { lang, cart, setCart } = useGlobalContext();
  const [amount, setAmount] = useState<number>(1);
  const [color, setColor] = useState<ColorI>(itemColors[0]);
  const [size, setSize] = useState<Size>("L");
  const [printLocation, setPrintLocation] = useState<PrintLocationI>(
    itemPrintLocations[0]
  );
  const [activeImage, setActiveImage] = useState<string>(thumbs[0]);

  const handleColorClick = (color: ColorI) => {
    setColor(color);
  };

  const handleSizeClick = (size: Size) => {
    setSize(size);
  };

  const handlePrintLocationClick = (location: PrintLocationI) => {
    setPrintLocation(location);
  };

  const handleAmountChangeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnClicked = e.currentTarget.textContent;
    if (btnClicked === "–") {
      if (amount === 1) return;
      setAmount(amount - 1);
    } else {
      setAmount(amount + 1);
    }
  };

  const handleAmountChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseInt(e.target.value, 10);
    if (isNaN(inputValue) || inputValue < 1) {
      inputValue = 1;
    }
    setAmount(inputValue);
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:hidden">
        <h2 className="font-bold text-2xl pb-2">{title}</h2>
      </div>

      <div className="flex flex-wrap md:flex-col md:w-1/2">
        <Image
          src={`/store/${slug}/${activeImage}`}
          width={750}
          height={1000}
          alt=""
          className="mb-2 sm:w-3/4 md:w-full rounded-xl"
        />
        <div className="flex flex-row flex-wrap justify-between gap-x-2 w-full sm:w-1/4 sm:flex-col sm:ps-2 md:ps-0 md:flex-row md:w-full">
          {thumbs.map((thumb) => (
            <Image
              key={thumb}
              src={`/store/${slug}/${thumb}`}
              width={75}
              height={100}
              alt=""
              className={`rounded-xl hover:cursor-pointer border border-2 border-transparent hover:border-oaccent-900 mb-1 ${
                activeImage === thumb ? "opacity-50 hover:opacity-100" : ""
              }`}
              onClick={() => setActiveImage(thumb)}
            />
          ))}
        </div>
      </div>

      <div className="md:w-1/2 md:ps-8">
        <div className="flex py-4 md:pt-0 md:flex-col">
          <p className="font-bold text-xl pb-2">{title}</p>
          <p className="font-bold text-xl ms-auto md:ms-0">${price}</p>
        </div>

        <h3 className="font-bold text-lg pb-2">
          {lang === "fr" ? "Couleur" : "Color"}
        </h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {itemColors.map((item) => (
            <div
              key={item.en}
              title={item[lang]}
              className={`rounded-full w-8 h-8 ${
                item.colorClass
              } border hover:border-oaccent-900 hover:cursor-pointer ${
                color === item
                  ? "border-4 border-oaccent-900"
                  : "border-2 border-gray-400/75"
              }`}
              onClick={() => handleColorClick(item)}
            ></div>
          ))}
        </div>

        <h3 className="font-bold text-lg pb-2">
          {lang === "fr" ? "Taille" : "Size"}
        </h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {itemSizes.map((item) => (
            <button
              key={item}
              className={`font-bold text-md border rounded-xl ${
                size === item
                  ? "border-oaccent-900 border-4 hover:bg-oblue-400 bg-oblue-400 text-white px-[14px] py-[6px]"
                  : "border-2 border-gray-400 hover:bg-oblue-100 px-4 py-2"
              }`}
              onClick={() => handleSizeClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <h3 className="font-bold text-lg pb-2">
          {lang === "fr" ? "Emplacement d'impression" : "Print location"}
        </h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {itemPrintLocations.map((item) => (
            <button
              key={item.name}
              className={`font-bold text-md px-4 py-2 border rounded-xl ${
                printLocation === item
                  ? "border-oaccent-900 border-4 hover:bg-oblue-400 bg-oblue-400 text-white px-[14px] py-[6px]"
                  : "border-2 border-gray-400 hover:bg-oblue-100 px-4 py-2"
              }`}
              onClick={() => handlePrintLocationClick(item)}
            >
              {item[lang]}
            </button>
          ))}
        </div>

        <h3 className="font-bold text-lg pb-2">
          {lang === "fr" ? "Montant" : "Amount"}
        </h3>
        <div className="flex flex-nowrap self-center mb-8">
          <button
            onClick={handleAmountChangeButton}
            className="rounded-full bg-oblue-100 hover:bg-oblue-400 dark:bg-oaccent-700 dark:hover:bg-oaccent-900 text-black hover:text-white px-[15px] py-2 self-center mb-7"
          >
            –
          </button>
          <Input
            type="text"
            name="amount"
            classNamesLabel="px-2 border-none max-w-[75px] my-0"
            classNamesInput="rounded-xl p-2"
            value={amount}
            onChange={handleAmountChangeInput}
            min={1}
          />
          <button
            onClick={handleAmountChangeButton}
            className="rounded-full bg-oblue-100 hover:bg-oblue-400 dark:bg-oaccent-700 dark:hover:bg-oaccent-900 text-black hover:text-white px-[15px] py-2 self-center mb-7"
          >
            +
          </button>
        </div>

        <div className="pt-4 pb-8">
          <button
            onClick={() => {
              const tShirt: CartItemI = {
                amount,
                color,
                thumb: thumbs[0],
                price: price,
                printLocation,
                size,
                slug: slug,
                title: title,
              };
              // If the item with the same parameters is already in the cart, update the amount
              if (
                cart.find(
                  (item) =>
                    item.slug === tShirt.slug &&
                    item.color === tShirt.color &&
                    item.size === tShirt.size &&
                    item.printLocation === tShirt.printLocation
                )
              ) {
                setCart((prevCart) =>
                  prevCart.map((item) =>
                    item.slug === tShirt.slug
                      ? { ...item, amount: item.amount + amount }
                      : item
                  )
                );
              } else {
                setCart((prevCart) =>
                  Array.isArray(prevCart) ? [...prevCart, tShirt] : [tShirt]
                );
              }
            }}
            className="flex rounded-xl w-full justify-center bg-oaccent-900 px-4 py-4"
          >
            <span className="w-6 h-6 text-oblue-900 me-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="8" cy="20" r="2"></circle>
                <circle cx="18" cy="20" r="2"></circle>
                <path d="M19 17H7a1 1 0 01-1-.78L3.2 4H2a1 1 0 010-2h2a1 1 0 011 .78L7.8 15h10.4L20 6.78a1 1 0 012 .44l-2 9a1 1 0 01-1 .78z"></path>
                <path d="M16 6h-2V4a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0V8h2a1 1 0 000-2z"></path>
              </svg>
            </span>
            <span className="font-bold text-lg text-oblue-900">
              Add to cart
            </span>
          </button>
        </div>

        <div className="pb-8">
          <Link
            href="/store/cart"
            className="flex rounded-xl w-full justify-center bg-oblue-900 dark:bg-owhite px-4 py-4"
          >
            <span className="font-bold text-lg text-white dark:text-oblue-900">
              Go to Checkout
            </span>
          </Link>
        </div>

        <div className="">
          <h3 className="font-bold text-lg pb-2">
            {lang === "fr" ? "Caractéristiques du produit" : "Product features"}
          </h3>
          <div className="">
            <ul className="list-outside list-disc ms-4 text-md">
              <li>Just your everyday smooth, comfy tee, a wardrobe staple</li>
              <li>
                Slim fit, so size up if you prefer a looser fit, or check out
                the Classic T-Shirt
              </li>
              <li>
                Male model shown is 6&apos;0&quot; / 183 cm tall and wearing
                size Large
              </li>
              <li>
                Female model shown is 5&apos;8&quot; / 173 cm tall and wearing
                size Small
              </li>
              <li>
                Midweight 4.2 oz. / 145 gsm fabric, solid color t-shirts are
                100% cotton, heather grey t-shirts are 90% cotton/10% polyester,
                charcoal heather and green t-shirts are 52% cotton/48% polyester
              </li>
              <li>
                The third party printer of this product is evaluated according
                to International Labor Organization standards
              </li>
              <li>
                The printer of this product sources blanks from manufacturers
                committed to improving cotton farming practices with the Better
                Cotton Initiative
              </li>
              <li>
                Since every item is made just for you by your local third-party
                fulfiller, there may be slight variances in the product received
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItemFull;
