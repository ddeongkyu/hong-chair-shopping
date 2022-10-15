import { gsap } from "gsap/all";

const getGSAPopacity = (className) => {
  gsap.to(className, {
    opacity: 1,
    duration: 0.3,
  });
};

export default getGSAPopacity;
