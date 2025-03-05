import React, { FC, useEffect, useRef, useState } from "react";
import { LuMapPin, LuCalendar, LuPhone } from "react-icons/lu";
import { PiSmiley, PiSmileySad } from "react-icons/pi";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgQuoteForm from "@/assets/img/black_truck.webp";
import Button from "@/components/ui/form/ButtonSubmit";
import Checkbox from "@/components/ui/form/Checkbox";
import DateInput from "@/components/ui/form/Date";
import Input from "@/components/ui/form/Input";
import PhoneInput from "@/components/ui/form/Phone";
import Image from "next/image";

const QuoteForm: FC = () => {
  const t = useTranslations("quoteForm");
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top center+=100",
      },
    });

    // Animate content (left side)
    tl.fromTo(
      contentRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Animate form (right side)
    tl.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.7" // Start slightly before the first animation ends
    );

    return () => {
      tl.kill();
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      originZip: "",
      destinationZip: "",
      movingDate: "",
      phone: "",
      acceptTerms: false,
    },
    validationSchema: Yup.object().shape({
      originZip: Yup.string()
        .required(
          t("validation.required", { field: t("fields.originZip.label") })
        )
        .matches(
          /^[0-9]{5}$/,
          t("validation.mustBeValid", {
            field: t("fields.originZip.name"),
          })
        ),
      destinationZip: Yup.string()
        .required(
          t("validation.required", { field: t("fields.destinationZip.label") })
        )
        .matches(
          /^[0-9]{5}$/,
          t("validation.mustBeValid", {
            field: t("fields.destinationZip.name"),
          })
        ),
      movingDate: Yup.date()
        .required(
          t("validation.required", { field: t("fields.movingDate.label") })
        )
        .min(new Date(), t("validation.pastDate")),
      phone: Yup.string()
        .required(t("validation.required", { field: t("fields.phone.label") }))
        .matches(
          /^[0-9]{10}$/,
          t("validation.mustBeValid", { field: t("fields.phone.name") })
        ),
      acceptTerms: Yup.boolean()
        .required("You must accept the terms")
        .oneOf([true], "You must accept the terms"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        setSubmitted(true);
        formik.resetForm();
      } catch (error) {
        console.error("form submission error", error);
        setSubmissionError(true);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="sm:max-w-[1400px] mx-auto px-2 sm:px-8 2xl:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-8">
        {/* Content Side */}
        <div
          ref={contentRef}
          id="lg:contact-us"
          className="max-w-[580px] lg:w-1/2 space-y-6"
        >
          {" "}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[--color-b900-w]">
            {t("content.title")}
          </h2>
          <p className="font-b1-b2 text-[--color-b900-w]">
            {t("content.description")}
          </p>
          {/* Trust Indicators */}
          <div className="grid grid-cols-[auto_auto] sm:grid-cols-2 gap-2 xs:gap-4 pt-6">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold">{t("content.licensed")}</div>
                <div className="text-sm">{t("content.certified")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold">{t("content.insured")}</div>
                <div className="text-sm">{t("content.coverage")}</div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <Image
              width={640}
              height={360}
              src={imgQuoteForm}
              alt="Section image"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Form Side */}
        <div
          id="contact-us"
          ref={formRef}
          className="max-w-[500px] lg:w-1/2 w-full"
        >
          <div className="bg-[--color-w-b50] rounded-2xl shadow-xl px-3 py-4 sm:p-8">
            <h4 className="font-h4-h5 text-center text-oaccent-800 uppercase mb-4 sm:mb-6">
              {t("formTitle")}
            </h4>
            <form onSubmit={formik.handleSubmit} className="">
              <Input
                placeholder={t("fields.originZip.placeholder")}
                icon={<LuMapPin className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("originZip")}
                touched={formik.touched.originZip}
                error={formik.errors.originZip}
              />

              <Input
                placeholder={t("fields.destinationZip.placeholder")}
                icon={<LuMapPin className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("destinationZip")}
                touched={formik.touched.destinationZip}
                error={formik.errors.destinationZip}
              />

              {/* Use the Tailwind-styled DateInput component */}
              <DateInput
                placeholder={t("fields.movingDate.placeholder")}
                icon={<LuCalendar className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("movingDate")}
                touched={formik.touched.movingDate}
                error={formik.errors.movingDate}
              />

              {/* Use the Tailwind-styled PhoneInput component */}
              <PhoneInput
                placeholder={t("fields.phone.placeholder")}
                icon={<LuPhone className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("phone")}
                touched={formik.touched.phone}
                error={formik.errors.phone}
              />

              <Checkbox
                label={t("fields.acceptTerms.label")}
                {...formik.getFieldProps("acceptTerms")}
                checked={formik.values.acceptTerms}
                touched={formik.touched.acceptTerms}
                error={formik.errors.acceptTerms}
              />

              <Button variant="primary" classNames="w-full py-4">
                {loading ? (
                  <span className="inline-block w-7 h-7 border-4 border-owhite border-t-transparent rounded-full animate-spin mx-auto"></span>
                ) : (
                  t("cta")
                )}
              </Button>

              {submitted && (
                <div className="mt-2 p-2 flex items-center justify-center gap-4 bg-oblue-100 rounded-xl">
                  <PiSmiley className="text-6xl text-oblue-500" />
                  <p className="text-oblue-500">{t("success")}</p>
                </div>
              )}
              {submissionError && (
                <div className="mt-2 p-2 flex items-center justify-center gap-4 bg-oaccent-400 rounded-xl">
                  <PiSmileySad className="text-5xl text-oaccent-700" />
                  <p className="font-b2-b3 font-semibold text-oaccent-700">
                    {t("error.description")}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
