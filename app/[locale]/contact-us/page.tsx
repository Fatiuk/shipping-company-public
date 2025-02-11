"use client";

import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import ButtonSubmit from "@/components/form/ButtonSubmit";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { useGlobalContext } from "@/context/context";
import GroupNinja from "@/assets/img/group-ninjas.jpg";

const ContactUs: FC = () => {
  const { lang } = useGlobalContext();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(
        lang === "fr" ? "Le nom est obligatoire" : "Name is required"
      ),
      email: Yup.string()
        .email(lang === "fr" ? "Courriel non valide" : "Invalid email")
        .required(
          lang === "fr"
            ? "L'adresse courriel est obligatoire"
            : "Email address is required"
        ),
      phone: Yup.string().required(
        lang === "fr"
          ? "Le numéro de téléphone est requis"
          : "Phone number is required"
      ),
      message: Yup.string().required(
        lang === "fr" ? "Le message est obligatoire" : "Message is required"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {lang === "fr" ? "Contactez-nous" : "Contact Us"}
          </h1>
          <p className="text-xl">
            {lang === "fr"
              ? "Transformez votre potentiel avec Otoshi Judo Club !"
              : "Transform your potential with Otoshi Judo Club!"}
          </p>
        </div>
      </SectionFullWidth>

      <Section className="max-w-[600px] mx-auto">
        <h1
          className="font-header text-4xl pb-4 dark:text-oaccent-700"
          tabIndex={-1}
        >
          {lang === "fr" ? "Contactez-nous" : "Contact Us"}
        </h1>

        <form className="pb-6" onSubmit={formik.handleSubmit}>
          <Input
            id="username"
            type="text"
            placeholder={lang === "fr" ? "Nom" : "Name"}
            classNamesInput="px-3 pt-3 pb-2 rounded-xl bg-white text-black"
            {...formik.getFieldProps("username")}
            touched={formik.touched.username}
            error={formik.errors.username}
          />
          <Input
            id="email"
            type="email"
            placeholder={lang === "fr" ? "Adresse courriel" : "Email address"}
            classNamesInput="px-3 pt-3 pb-2 rounded-xl bg-white text-black"
            {...formik.getFieldProps("email")}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <Input
            id="phone"
            type="tel"
            placeholder={lang === "fr" ? "Numéro de téléphone" : "Phone number"}
            classNamesInput="px-3 pt-3 pb-2 rounded-xl bg-white text-black"
            {...formik.getFieldProps("phone")}
            touched={formik.touched.phone}
            error={formik.errors.phone}
          />
          <Textarea
            placeholder={lang === "fr" ? "Message" : "Message"}
            classNamesInput="px-3 pt-3 pb-2 rounded-xl bg-white text-black"
            {...formik.getFieldProps("message")}
            touched={formik.touched.message}
            error={formik.errors.message}
          />
          <ButtonSubmit>Submit</ButtonSubmit>
        </form>
      </Section>
    </>
  );
};

export default ContactUs;
