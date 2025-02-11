// "use client";
// import React, { FC, ReactElement, useState, useEffect } from "react";
// import { useGlobalContext } from "@/context/context";
// import Features from "@/components/Features";
// import HeroCTA from "@/components/HeroCTA";
// import Instructors from "@/components/Instructors";
// import Quotation from "@/components/Quotation";
// import QuotationI from "@/types/quotation";
// import Section from "@/components/Section";
// import SectionFullWidth from "@/components/SectionFullWidth";
// import { benefits } from "@/app/data";
// import { instructors } from "@/app/data";
// import { quotations } from "@/app/data";
// import imgHero from "@/assets/img/hero.jpg";
// import QuoteBg from "@/assets/img/bg-punch.jpg";

// const About: FC = (): ReactElement => {
//   const { lang } = useGlobalContext();
//   const [quote, setQuote] = useState<QuotationI>(quotations[0]);

//   useEffect(() => {
//     setQuote(quotations[Math.floor(Math.random() * quotations?.length)]);
//   }, []);

//   return (
//     <>
//       <SectionFullWidth bgImage={imgHero.src}>
//         <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
//           <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
//             {lang === "fr" ? "Cours" : "Classes"}
//           </h1>
//           <p className="text-xl">
//             {lang === "fr"
//               ? "Transformez votre potentiel avec Otoshi Judo Club !"
//               : "Transform your potential with Otoshi Judo Club!"}
//           </p>
//         </div>
//         <HeroCTA />
//       </SectionFullWidth>

//       <Section
//         title={
//           lang === "fr" ? "Philosophie et mission" : "Philosophy and Mission"
//         }
//       >
//         <p className="pb-4 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
//           nulla non aliquet lobortis. Nullam eget ligula magna. Nulla facilisis
//           finibus ex sit amet vestibulum. Nunc eu enim at lorem feugiat viverra.
//           Integer vel orci et lectus venenatis vestibulum in non erat. Nulla
//           dapibus dignissim aliquet. Cras porttitor volutpat ex vitae egestas.
//           Praesent sodales viverra dui ac pulvinar. Sed non ipsum molestie,
//           luctus diam eget, euismod turpis.
//         </p>
//         <p className="pb-4 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
//           nulla non aliquet lobortis. Nullam eget ligula magna. Nulla facilisis
//           finibus ex sit amet vestibulum. Nunc eu enim at lorem feugiat viverra.
//           Integer vel orci et lectus venenatis vestibulum in non erat. Nulla
//           dapibus dignissim aliquet. Cras porttitor volutpat ex vitae egestas.
//           Praesent sodales viverra dui ac pulvinar. Sed non ipsum molestie,
//           luctus diam eget, euismod turpis.
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
//           nulla non aliquet lobortis. Nullam eget ligula magna. Nulla facilisis
//           finibus ex sit amet vestibulum. Nunc eu enim at lorem feugiat viverra.
//           Integer vel orci et lectus venenatis vestibulum in non erat. Nulla
//           dapibus dignissim aliquet. Cras porttitor volutpat ex vitae egestas.
//           Praesent sodales viverra dui ac pulvinar. Sed non ipsum molestie,
//           luctus diam eget, euismod turpis.
//         </p>
//       </Section>

//       <SectionFullWidth bgImage={QuoteBg.src}>
//         <Quotation quote={quote} />
//       </SectionFullWidth>

//       <SectionFullWidth
//         title={lang === "fr" ? "Pourquoi choisir Otoshi" : "Why choose Otoshi"}
//         bgClass="bg-oblue-100 dark:bg-owhite"
//       >
//         <Features data={benefits} />
//       </SectionFullWidth>

//       <Section
//         title={lang === "fr" ? "Instructeurs et instructrices" : "Instructors"}
//       >
//         <Instructors instructors={instructors} />
//       </Section>
//     </>
//   );
// };

// export default About;
