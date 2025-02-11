import { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import CardI from "@/types/card";

const Card: FC<CardI> = ({ item }) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col p-6 items-center text-center rounded-xl border border-2 shadow-lg sm:w-[40%] bg-white dark:bg-owhite hover:bg-blue-200 hover:border-oblue-700 hover:dark:border-oblue-300 transition group">
      <picture className="overflow-hidden mb-4 rounded-xl">
        <Link href={item.ctaLink ?? "#"}>
          <Image
            src={item.src}
            width={1024}
            height={682}
            alt={item.alt || ""}
            className="group-hover:rotate-6 group-hover:scale-125 transition"
          />
        </Link>
      </picture>
      <h3 className="text-xl font-bold pb-2 text-black">{item.title}</h3>
      <p className="font-bold pb-2 text-oblue-900">{`${item.age.min}${
        item.age.max ? "–" + item.age.max : "+"
      } ${item.ageYears}`}</p>
      <div className="pb-4 text-oblue-700">{item.description}</div>
      <Link href={item.ctaLink ?? "#"}>
        <div className="bg-blue-900 text-owhite text-xl font-bold px-4 py-3 rounded-xl shadow group-hover:text-black group-hover:bg-oaccent-900">
          "Essayez gratuitement" "Try For Free"
        </div>
      </Link>
    </div>
  );
};

export default Card;
