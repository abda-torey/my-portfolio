import Isotope from "isotope-layout";
import { useContext, useEffect, useRef } from "react";
import { CavaniContext } from "../Context";
import SectionContainer from "../layout/SectionContainer";
import TypingAnimation from "./AnimationText";

const Home = () => {
  const { navChange } = useContext(CavaniContext);
  const isotope = useRef();
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    var imgLoad = imagesLoaded(".portfolio_list");
    imgLoad.on("done", function (instance) {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".item__",
        percentPosition: true,
        masonry: {
          columnWidth: ".item__",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });
  });
  return (
    <SectionContainer navName="home">
      <div className="cavani_tm_home relative w-full h-full flex items-center">
        <div className="content pl-[100px]">
          <h3 className="name text-[68px] font-bold uppercase mb-[30px]">
            Abdiaziz Mohamed
          </h3>
          <span className="line inline-block w-[70px] h-[5px] bg-[#333] mb-[30px]" />
          <TypingAnimation />
          <div className="flex">
            <div className="cavani_tm_button transition_link">
              <a href="#contact" onClick={() => navChange("contact")}>
                Get in Touch
              </a>
            </div>
            <div className="cavani_tm_button_download transition_link">
              <a
                href="https://drive.google.com/uc?export=download&id=1fSqg4lIE35dI-3_p860GtPd5faHhS57u"
                download
               
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
