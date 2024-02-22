import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Data Scientist", "Machine Learning Engineer", "Python Developer","Front-End Developer"], // Strings to display
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 250,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h3 className="job text-[25px] mb-[35px] font-light">
      <span className="cd-headline clip">
        {" "}
        {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
        <span className="blc">Creative</span>{" "}
        <span className="cd-words-wrapper">
          <b className="is-visible" ref={el}></b>
        </span>
      </span>
    </h3>
  );
};
export default TypingAnimation;
