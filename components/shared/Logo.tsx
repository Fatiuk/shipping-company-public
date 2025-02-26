import Image from "next/image";
import logoLightMode from "@/public/logo/logo_light.png";
import logoDarkMode from "@/public/logo/logo_dark.png";
import ActiveLink from "@/components/shared/ActiveLink";

const Logo = () => {
  return (
    <div className="w-fit h-fit">
      {/* Light mode logo */}
      <ActiveLink href="/">
        <Image
          src={logoLightMode}
          alt="logo"
          width={300}
          height={184}
          className="w-auto h-12 sm:h-16 block dark:hidden"
          priority
        />
      </ActiveLink>

      {/* Dark mode logo */}
      <ActiveLink href="/">
        <Image
          src={logoDarkMode}
          alt="logo"
          width={337}
          height={205}
          className="w-auto h-12 sm:h-16 hidden dark:block"
          priority
        />
      </ActiveLink>
    </div>
  );
};

export default Logo;
