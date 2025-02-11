import Image from "next/image";
import InstructorI from "@/types/instructor";
import { Lang } from "@/types/lang";
import Link from "next/link";
import React, { FC } from "react";
import { useGlobalContext } from "@/context/context";

interface InstructorPropsI {
  instructor: InstructorI;
}

const Instructor: FC<InstructorPropsI> = ({ instructor }) => {
  const { lang } = useGlobalContext() ?? { lang: "en" };
  return (
    <div className="flex flex-col align-center p-4 group">
      <Link
        href={`/about/instructors/${instructor.slug}`}
        className="mb-3 sm:max-w-[450px] md:w-[250px] "
      >
        <Image
          src={instructor.img}
          width={600}
          height={800}
          alt=""
          className="w-full sm:h-[600px] md:h-[350px] object-cover group-hover:rotate-105 border border-transparent border-2 group-hover:border-oaccent-900 rounded-xl"
        />
      </Link>
      <Link
        href={`/about/instructors/${instructor.slug}`}
        className="text-center"
      >
        <p
          className="
					relative inline-block font-bold text-lg text-center dark:text-oaccent-700
					after:absolute after:left-0 after:bottom-0 after:origin-right after:scale-x-0 after:w-full after:h-[1px] after:mb-1 after:bg-black after:transition-transform after:duration-300
					hover:after:origin-left hover:after:scale-x-100
				"
        >
          {instructor.name}
        </p>
      </Link>
      <p className="text-center">{instructor[lang as Lang].title}</p>
    </div>
  );
};

export default Instructor;
