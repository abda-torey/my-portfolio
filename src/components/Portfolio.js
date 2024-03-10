import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Soundcloud } from "./Popup";
import { FaLink, FaGithub } from "react-icons/fa";


const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".vimeo"
                    onClick={handleFilterKeyChange("vimeo")}
                  >
                    Machine Learning
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    React-Nextjs
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Python
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Tableau
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/ecom.png"
                      />

                      <div className="details">
                        <h3 className="text-[16px] mb-[15px]  text-center   font-semibold">
                          Ecommerce Website
                        </h3>
                        <div className="flex justify-evenly ">
                          <a
                            href="https://merville-ecom.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-8xl " // Adjust the size as needed
                          >
                            <FaLink />
                          </a>
                          <a
                            href="https://github.com/abda-torey/merville"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-8xl"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/preview.png"
                      />
                      <div className="details">
                        <span className="text-[14px]">
                          Whatsapp Group Analysis
                        </span>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-vimeo"
                        href="https://nbviewer.org/github/abda-torey/kenya_group_analysis/blob/main/eire%20kenya%20chat%20group%20analysis.ipynb"
                        target="_blank"
                      />
                    </div>
                  </div>
                </li>
                <li className="soundcloud mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/f1.jpg"
                      />

                      <div className="details">
                        <h3 className="text-[16px] mb-[15px]  text-center   font-semibold">
                          Formula 1 System
                        </h3>
                        <div className="flex justify-evenly ">
                          <a
                            href="https://github.com/abda-torey/F1-flask/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-8xl " // Adjust the size as needed
                          >
                            <FaLink />
                          </a>
                          <a
                            href="https://github.com/abda-torey/F1-flask/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-8xl"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="soundcloud mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/instagram.png"
                      />

                      <div className="details">
                        <h3 className="text-[16px] mb-[15px]  text-center   font-semibold">
                          Instagram Clone
                        </h3>
                        <div className="flex justify-evenly ">
                          <div>
                            <a
                              href="https://github.com/abda-torey/instagram"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-8xl " // Adjust the size as needed
                            >
                              <FaLink />
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://github.com/abda-torey/instagram"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-8xl"
                            >
                              <FaGithub />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
