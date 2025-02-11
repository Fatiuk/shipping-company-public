import { useEffect } from "react"
import { gsap } from "gsap"

interface UseGsapI {
	target: React.RefObject<HTMLElement>;
	animation: gsap.TweenVars;
	dependencies?: React.DependencyList;
}

const useGsap = ({ target, animation, dependencies = [] }: UseGsapI) => {
	useEffect(() => {
		if (target.current) {
			gsap.to(target.current, animation);
		}
	}, [target, animation, ...dependencies]);
}

export default useGsap