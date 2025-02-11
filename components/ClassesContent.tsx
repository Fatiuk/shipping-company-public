// "use client";
// import Link from "next/link";
// import React, { FC, useEffect, useState } from "react";
// import { useGlobalContext } from "@/context/context";
// import Features from "@/components/Features";
// import HeroCTA from "@/components/HeroCTA";
// import Instructors from "@/components/Instructors";
// import FaqItem from "@/components/FaqItem";
// import { Lang } from "@/types/lang";
// import Quotation from "@/components/Quotation";
// import QuotationI from "@/types/quotation";
// import Schedule from "@/components/Schedule";
// import Section from "@/components/Section";
// import SectionFullWidth from "@/components/SectionFullWidth";
// import { benefits } from "@/app/data";
// import { quotations } from "@/app/data";
// import { instructors } from "@/app/data";
// import GroupNinja from "@/assets/img/group-ninjas.jpg";
// import QuoteBg from "@/assets/img/bg-punch.jpg";
// import CardI from "@/types/card";
// import FAQItem from "@/components/FaqItem";

// const ClassesContent: FC<{ item: CardI }> = ({ item }) => {
//   const { lang } = useGlobalContext();
//   const [quote, setQuote] = useState<QuotationI>(quotations[0]);

//   useEffect(() => {
//     setQuote(quotations[Math.floor(Math.random() * quotations.length)]);
//   }, []);

//   return (
//     <>
//       <SectionFullWidth bgImage={GroupNinja.src}>
//         <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
//           <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
//             {item.title}
//           </h1>
//           <p className="text-xl">
//             {lang === "fr"
//               ? "Transformez votre potentiel avec Otoshi Judo Club !"
//               : "Transform your potential with Otoshi Judo Club!"}
//           </p>
//         </div>
//         <HeroCTA />
//       </SectionFullWidth>

//       <Section title={lang === "fr" ? "Bénéfices" : "Benefits"}>
//         <Features data={benefits} />
//       </Section>

//       <Section
//         title={lang === "fr" ? "Instructeurs et instructrices" : "Instructors"}
//       >
//         <Instructors instructors={instructors} />
//       </Section>

//       <SectionFullWidth bgImage={QuoteBg.src}>
//         <Quotation quote={quote} />
//       </SectionFullWidth>

//       <Section
//         title={
//           lang === "fr"
//             ? `Calendrier des ${item[lang as Lang].title}`
//             : `${item[lang as Lang].title} Schedule`
//         }
//       >
//         <Schedule slug={item.slug} />
//       </Section>

//       <Section className="mx-auto text-center">
//         <Link
//           href="/try-for-free"
//           className="px-5 py-2 text-xl font-header capitalize border border-transparent bg-oaccent-900 text-white hover:text-black hover:bg-oaccent-700 hover:cursor-pointer transition-colors duration-200 rounded-xl"
//         >
//           {lang === "fr"
//             ? "Commencez votre essai gratuit"
//             : "Start your free trial"}
//         </Link>
//       </Section>

//       <Section title="FAQ">
//         <FAQItem />
//       </Section>
//     </>
//   );
// };

// export default ClassesContent;
