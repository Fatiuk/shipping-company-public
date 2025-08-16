import React, { FC, useEffect, useRef, useState } from "react";
import { LuMapPin, LuCalendar, LuPhone, LuCar, LuMail } from "react-icons/lu";
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
import { trackFormEvent } from "@/lib/gtm";
import emailjs from "@emailjs/browser";

const QuoteForm: FC = () => {
  const t = useTranslations("quoteForm");
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "gJvpE-Ddg2tvF5xOM");
  }, []);

  useEffect(() => {
    trackFormEvent.view('quote_form', 'contact-us');
  }, []);

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackFormEvent.start('quote_form', 'contact-us');
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top center+=100",
      },
    });

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
      "-=0.7"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      originZip: "",
      destinationZip: "",
      vehicleModel: "",
      movingDate: "",
      phone: "",
      email: "",
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
      vehicleModel: Yup.string()
        .required(
          t("validation.required", { field: t("fields.vehicleModel.label") })
        )
        .min(
          2,
          t("validation.tooShort", {
            field: t("fields.vehicleModel.label"),
            min: 2,
          })
        )
        .max(
          40,
          t("validation.tooLong", {
            field: t("fields.vehicleModel.label"),
            max: 40,
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
      email: Yup.string()
        .required(t("validation.required", { field: t("fields.email.label") }))
        .email(t("validation.mustBeValid", { field: t("fields.email.name") })),
      acceptTerms: Yup.boolean()
        .required("You must accept the terms")
        .oneOf([true], "You must accept the terms"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        
        trackFormEvent.submit('quote_form', 'contact-us', 'attempt');

        // Отправка через EmailJS (работает на статических сайтах)
        const templateParams = {
          from_name: values.email,
          from_email: values.email,
          phone: values.phone,
          origin_zip: values.originZip,
          destination_zip: values.destinationZip,
          vehicle_model: values.vehicleModel,
          moving_date: values.movingDate,
          current_date: new Date().toLocaleString(),
          message: `Quote request details:\n\nEmail: ${values.email}\nPhone: ${values.phone}\nFrom ZIP: ${values.originZip}\nTo ZIP: ${values.destinationZip}\nVehicle: ${values.vehicleModel}\nMoving Date: ${values.movingDate}`
        };

        console.log('Sending email with EmailJS...', templateParams);

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_m9h1b6m",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_wnxb7b8",
          templateParams
        );

        setSubmitted(true);
        formik.resetForm();
        
        trackFormEvent.submit('quote_form', 'contact-us', 'success');
        
      } catch (error) {
        console.error("form submission error", error);
        setSubmissionError(true);
        
        trackFormEvent.submit(
          'quote_form', 
          'contact-us', 
          'error', 
          error instanceof Error ? error.message : 'Unknown error'
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="sm:max-w-[1400px] mx-auto px-2 sm:px-8 2xl:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-8">
        <div
          ref={contentRef}
          id="lg:contact-us"
          className="max-w-[580px] lg:w-1/2 space-y-6"
        >
          <h2 className="text-[24px] leading-[32px] sm:text-[36px] sm:leading-[48px] my-0 font-bold font-roboto capitalize text-[--color-b900-w]">
            {t("content.title")}
          </h2>
          <p className="text-[24px] leading-[32px] sm:text-[32px] sm:leading-[48px] font-normal font-roboto capitalize !mt-0">
            {t("content.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 rounded-full bg-gray-300/50 dark:bg-oblue-500/50 flex items-center justify-center">
                <Image
                  src="/icons/check-circle.svg"
                  alt="Licensed"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className="font-semibold">{t("content.licensed")}</div>
                <div className="text-sm">{t("content.certified")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 rounded-full bg-gray-300/50 dark:bg-oblue-500/50 flex items-center justify-center">
                <Image
                  src="/icons/shield-lock.svg"
                  alt="Insured"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className="font-semibold">{t("content.insured")}</div>
                <div className="text-sm">{t("content.coverage")}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 rounded-full bg-gray-300/50 dark:bg-oblue-500/50 flex items-center justify-center">
                <Image
                  src="/icons/top-tier-service.svg"
                  alt="Top-Tier Service"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className="font-semibold">{t("content.topTierService")}</div>
                <div className="text-sm">{t("content.unbeatableValue")}</div>
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

        <div
          id="contact-us"
          ref={formRef}
          className="max-w-[500px] lg:w-1/2 w-f ull"
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
                onFocus={handleFormStart}
                touched={formik.touched.originZip}
                error={formik.errors.originZip}
              />

              <Input
                placeholder={t("fields.destinationZip.placeholder")}
                icon={<LuMapPin className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("destinationZip")}
                onFocus={handleFormStart}
                touched={formik.touched.destinationZip}
                error={formik.errors.destinationZip}
              />

              <Input
                placeholder={
                  t("fields.vehicleModel.placeholder") ||
                  "Enter vehicle model (e.g. Ford F-150)"
                }
                icon={<LuCar className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("vehicleModel")}
                onFocus={handleFormStart}
                touched={formik.touched.vehicleModel}
                error={formik.errors.vehicleModel}
              />

              <DateInput
                placeholder={t("fields.movingDate.placeholder")}
                icon={<LuCalendar className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("movingDate")}
                onFocus={handleFormStart}
                touched={formik.touched.movingDate}
                error={formik.errors.movingDate}
              />

              <PhoneInput
                placeholder={t("fields.phone.placeholder")}
                icon={<LuPhone className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                {...formik.getFieldProps("phone")}
                onFocus={handleFormStart}
                touched={formik.touched.phone}
                error={formik.errors.phone}
              />

              <Input
                placeholder={t("fields.email.placeholder")}
                icon={<LuMail className="ml-3 text-gray-400" size={20} />}
                classNamesInput="px-3 bg-transparent"
                type="email"
                {...formik.getFieldProps("email")}
                onFocus={handleFormStart}
                touched={formik.touched.email}
                error={formik.errors.email}
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
