import { gsap } from "gsap/all";

const getGSAPtimelineOpacity = (tl, ref) => {
  tl.current = gsap.timeline({
    paused: true,
  });
  tl.current.to(ref.current, {
    opacity: 1,
    duration: 0.25,
  });
};

export default getGSAPtimelineOpacity;
