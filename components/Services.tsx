"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-oblue-100 dark:bg-oblue-800 rounded-full">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-[--color-b900-w]">{title}</h3>
      <p className="text-[--color-b700-b300] leading-relaxed">{description}</p>
    </div>
  );
};

const Services: FC = () => {
  const t = useTranslations("home.services");
  
  const services = [
    {
      icon: "🚗",
      title: t("items.0.title"),
      description: t("items.0.description"),
    },
    {
      icon: "🚛",
      title: t("items.1.title"),
      description: t("items.1.description"),
    },
    {
      icon: "🚤",
      title: t("items.2.title"),
      description: t("items.2.description"),
    },
    {
      icon: "🏠",
      title: t("items.3.title"),
      description: t("items.3.description"),
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[--color-b900-w]">
          {t("title")}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
