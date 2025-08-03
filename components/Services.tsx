"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div>
      <div className="w-11 h-11 mb-4 flex items-center justify-center sm:gap-13 rounded-full bg-[#082545]">
        <Image 
          src={icon} 
          alt={title} 
          width={24} 
          height={24} 
          className="filter brightness-0 invert"
        />
      </div>
      <h3 className="font-nunito text-xl font-bold leading-tight text-[--color-b900-w] mb-4">{title}</h3>
      <p className="font-nunito text-base font-normal leading-relaxed text-[--color-b700-b300]">{description}</p>
    </div>
  );
};

const Services: FC = () => {
  const t = useTranslations("home.services");
  
  const services = [
    {
      icon: "/services/user.svg",
      title: t("items.0.title"),
      description: t("items.0.description"),
    },
    {
      icon: "/services/store.svg",
      title: t("items.1.title"),
      description: t("items.1.description"),
    },
    {
      icon: "/services/boat.svg",
      title: t("items.2.title"),
      description: t("items.2.description"),
    },
    {
      icon: "/services/home.svg",
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
