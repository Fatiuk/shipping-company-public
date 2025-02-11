import Link from "next/link";
import React, { FC } from "react";

const Promotion: FC = () => {
  const lang = "en";

  const text = {
    en: {
      slogan: "Achieve Your Fitness Goals!",
      cta: "Get Two Weeks Free!",
    },
    fr: {
      slogan: "Atteignez vos objectifs de mise en forme !",
      cta: "Obtenez deux semaines gratuites !",
    },
  };

  return (
    <div className="bg-oaccent-900 text-black py-9">
      <section className="flex flex-wrap mx-auto sm:max-w-full md:max-w-7xl px-8 text-md">
        <div className="text-center lg:text-start w-full lg:w-auto md:max-w-7xl">
          <p className="font-header text-3xl pb-2">{text[lang]["slogan"]}</p>
          <Link
            href="https://www.google.com/maps/dir//567+Coverdale+Rd,+Riverview,+NB+E1B+3K7/@46.0632826,-64.809984,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4ca0b9a5ed44b689:0x60698adf7e777bb6!2m2!1d-64.809984!2d46.0632826?entry=ttu"
            target="_blank"
            className="relative font-sans
							after:absolute after:left-0 after:bottom-0 after:origin-right after:scale-x-0 after:w-full after:h-[1px] after:-mb-1 after:bg-black after:transition-transform after:duration-300
							hover:after:origin-left hover:after:scale-x-100
						"
          >
            567 Coverdale Road, Riverview, NB, E1B 3K7
          </Link>
        </div>
        <div className="flex self-center text-lg mx-auto content-center mt-8 lg:mt-0 lg:mx-0 lg:ms-auto">
          <Link
            href="/try-for-free"
            className="
							px-4 py-2
							font-header text-2xl text-oblue-900 hover:text-black text-center
							border border-transparent hover:border-black
							rounded-xl
							bg-white hover:bg-transparent 
							transition-colors duration-200
						"
          >
            {text[lang]["cta"]}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Promotion;
