import Image from "next/image";
import logoLightMode from "@/public/logo/logo_light.webp";
import logoDarkMode from "@/public/logo/logo_dark.webp";
import ActiveLink from "@/components/shared/ActiveLink";

const Logo = () => {
  return (
    <div className="w-32 h-16">
      {/* Light mode logo */}
      <ActiveLink href="/">
        <Image
          src={logoLightMode}
          alt="logo"
          width={358}
          height={184}
          className="w-32 h-16 block dark:hidden"
          priority
        />
      </ActiveLink>

      {/* Dark mode logo */}
      <ActiveLink href="/">
        <Image
          src={logoDarkMode}
          alt="logo"
          width={358}
          height={184}
          className="w-32 h-16 hidden dark:block"
          priority
        />
      </ActiveLink>
    </div>
  );
};

export default Logo;
