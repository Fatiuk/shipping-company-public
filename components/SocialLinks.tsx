import { FC } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import SocialLink from "@/components/SocialLink";

const SocialLinks: FC = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      icon: <FaFacebook size={20} />,
      label: "Facebook",
      color: "#1877F2",
    },
    {
      href: "https://www.instagram.com/",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      color: "#E4405F",
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      href: "https://www.youtube.com/",
      icon: <FaYoutube size={20} />,
      label: "YouTube",
      color: "#FF0000",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
          color={link.color}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
