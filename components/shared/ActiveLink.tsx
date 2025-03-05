"use client";
import { LinkProps } from "next/link";
import { Link, usePathname, useRouter } from "@/i18n/routing";

type ActiveLinkProps = Omit<LinkProps, "locale"> & {
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
  scroll?: boolean;
  offset?: number;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  className,
  href,
  scroll = true,
  offset = -120,
  ...props
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const isHashLink = typeof href === "string" && href.startsWith("/#");
  const isActive = pathname === href; // Check if the current path matches the href

  const handleScroll = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isHashLink && typeof href === "string") {
      const hash = href.split("#")[1];
      if (pathname === "/") {
        handleScroll(hash); // Scroll immediately if already on the same page
      } else {
        router.push("/"); // Navigate to the home page first
        setTimeout(() => handleScroll(hash), 1000); // Delay to ensure the DOM updates
      }
    } else {
      router.push(href as string); // Navigate normally for non-hash links
    }
  };

  // Prevent the link from rendering or handling the click if it links to the current page
  if (isActive) {
    return (
      <span className={`${className ?? ""} ${activeClassName}`.trim()}>
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      scroll={isHashLink ? true : scroll}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
