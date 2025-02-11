import { useEffect } from "react";
import { gsap } from "gsap";

interface UseGsapHoverI {
  target: React.RefObject<HTMLElement | null>;
  enterAnimation: gsap.TweenVars;
  leaveAnimation: gsap.TweenVars;
}

const useGsapHover = ({
  target,
  enterAnimation,
  leaveAnimation,
}: UseGsapHoverI) => {
  useEffect(() => {
    const element = target.current;

    if (element) {
      const handleMouseEnter = () => gsap.to(element, enterAnimation);
      const handleMouseLeave = () => gsap.to(element, leaveAnimation);

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [target, enterAnimation, leaveAnimation]);
};

export default useGsapHover;
