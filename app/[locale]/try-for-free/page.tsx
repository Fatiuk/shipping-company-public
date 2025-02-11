// "use client";
// import React, { FC, useEffect, useState } from "react";
// import Features from "@/components/Features";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ButtonSubmit from "@/components/form/ButtonSubmit";
// import Dropdown from "@/components/form/Dropdown";
// import Input from "@/components/form/Input";
// import Textarea from "@/components/form/Textarea";
// import Section from "@/components/Section";
// import Quotation from "@/components/Quotation";
// import QuotationI from "@/types/quotation";
// import SectionFullWidth from "@/components/SectionFullWidth";
// import { useGlobalContext } from "@/context/context";
// import { benefits } from "@/app/data";
// import { groups } from "@/app/data";
// import { quotations } from "@/app/data";
// import GroupNinja from "@/assets/img/group-ninjas.jpg";
// import QuoteBg from "@/assets/img/bg-punch.jpg";

// const Register: FC = () => {
//   const { lang } = useGlobalContext();
//   const [quote, setQuote] = useState<QuotationI>(quotations[0]);

//   useEffect(() => {
//     setQuote(quotations[Math.floor(Math.random() * quotations.length)]);
//   }, []);

//   const cityOptions = groups.map((group) => ({
//     value: group.city.value,
//     label: group.city.label,
//   }));

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       phone: "",
//       city: "",
//       message: "",
//     },
//     validationSchema: Yup.object().shape({
//       username: Yup.string().required(
//         lang === "fr" ? "Le nom est obligatoire" : "Name is required"
//       ),
//       email: Yup.string()
//         .email(lang === "fr" ? "Courriel non valide" : "Invalid email")
//         .required(
//           lang === "fr"
//             ? "L'adresse courriel est obligatoire"
//             : "Email address is required"
//         ),
//       phone: Yup.string().required(
//         lang === "fr"
//           ? "Le numéro de téléphone est requis"
//           : "Phone number is required"
//       ),
//       city: Yup.string().required(
//         lang === "fr" ? "Le club est obligatoire" : "Club is required"
//       ),
//       message: Yup.string().required(
//         lang === "fr" ? "Le message est obligatoire" : "Club is required"
//       ),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <>
//       <SectionFullWidth bgImage={GroupNinja.src}>
//         <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
//           <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
//             {lang === "fr" ? "Essayez gratuitement" : "Try for Free"}
//           </h1>
//           <p className="text-xl">
//             {lang === "fr"
//               ? "Transformez votre potentiel avec Otoshi Judo Club !"
//               : "Transform your potential with Otoshi Judo Club!"}
//           </p>
//         </div>
//       </SectionFullWidth>

//       <SectionFullWidth
//         bgClass="bg-oblue-100 dark:bg-owhite"
//         title={lang === "fr" ? "Avantages du judo" : "Benefits of Judo"}
//       >
//         <Features data={benefits} />
//       </SectionFullWidth>

//       <SectionFullWidth bgImage={QuoteBg.src}>
//         <Quotation quote={quote} />
//       </SectionFullWidth>

//       <Section className="max-w-[600px] mx-auto">
//         <h1
//           className="font-header text-4xl pb-4 dark:text-oaccent-700"
//           tabIndex={-1}
//         >
//           {lang === "fr"
//             ? "Inscrivez-vous gratuitement pendant deux semaines au Otoshi Judo Club"
//             : "Register for free two weeks at Otoshi Judo Club"}
//         </h1>

//         <form className="pb-6" onSubmit={formik.handleSubmit}>
//           <Input
//             type="text"
//             placeholder={lang === "fr" ? "Nom" : "Name"}
//             classNamesInput="px-3 pt-3 pb-2 bg-white text-black"
//             {...formik.getFieldProps("username")}
//             touched={formik.touched.username}
//             error={formik.errors.username}
//           />
//           <Input
//             type="email"
//             placeholder={lang === "fr" ? "Adresse courriel" : "Email address"}
//             classNamesInput="px-3 pt-3 pb-2 bg-white text-black"
//             {...formik.getFieldProps("email")}
//             touched={formik.touched.email}
//             error={formik.errors.email}
//           />
//           <Input
//             type="tel"
//             placeholder={lang === "fr" ? "Numéro de téléphone" : "Phone number"}
//             classNamesInput="px-3 pt-3 pb-2 bg-white text-black"
//             {...formik.getFieldProps("phone")}
//             touched={formik.touched.phone}
//             error={formik.errors.phone}
//           />

//           {groups && (
//             <Dropdown
//               options={cityOptions}
//               {...formik.getFieldProps("city")}
//               touched={formik.touched.city}
//               error={formik.errors.city}
//               placeholder={
//                 lang === "fr"
//                   ? "Club auquel vous souhaitez participer pendant les deux semaines d'essai"
//                   : "Club you want to participate in during the two week trial"
//               }
//               classNamesInput="mt-4"
//             />
//           )}

//           <Textarea
//             placeholder="Message"
//             classNamesInput="px-3 pt-3 pb-2 bg-white text-black"
//             {...formik.getFieldProps("message")}
//             touched={formik.touched.message}
//             error={formik.errors.message}
//           />

//           <ButtonSubmit>{lang === "fr" ? "Soumettre" : "Submit"}</ButtonSubmit>
//         </form>
//       </Section>
//     </>
//   );
// };

// export default Register;
