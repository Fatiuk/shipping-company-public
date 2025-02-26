import { FC, useRef } from "react";
import useGsapHover from "@/hooks/useGsapHover";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon, label, color }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGsapHover({
    target: linkRef,
    enterAnimation: { scale: 1.1, duration: 0.3 },
    leaveAnimation: { scale: 1, duration: 0.3 },
  });
  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
      }}
      className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[--color-b100-b700] text-[--color-b900-w] hover:text-white transition-colors duration-300`}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
