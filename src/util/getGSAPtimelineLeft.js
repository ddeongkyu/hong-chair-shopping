import { gsap } from "gsap/all";

const getGSAPtimelineLeft = (tl, ref) => {
  tl.current = gsap.timeline({
    paused: true,
  });
  tl.current.to(ref.current, {
    left: 0,
    duration: 0.25,
  });
};

export default getGSAPtimelineLeft;
