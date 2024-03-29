import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 95 },
    { language: "Swahili", progress: 90 },
    { language: "Somali", progress: 100 },
  ];

  const progressBarData = [
    { bgcolor: "#7d7789", completed: 90, title: "Javascript" },
    { bgcolor: "#7d7789", completed: 85, title: "React" },
    { bgcolor: "#7d7789", completed: 90, title: "NextJs" },
    { bgcolor: "#7d7789", completed: 90, title: "Python" },
  ];

  const services = [
    {
      desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
      img: "img/testimonials/1.jpg",
      info1: "Alexander Walker",
      info2: "Graphics Designer",
    },
    {
      desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      img: "img/testimonials/2.jpg",
      info1: "Baraka Clinton",
      info2: "Construction Engineering",
    },
    {
      desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
      img: "img/testimonials/3.jpg",
      info1: "Armin Van Buuren",
      info2: "Content Manager",
    },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]">
                  Hi, I'm <strong>Abdiaziz.</strong> With over{" "}
                  <strong>5 years </strong> of experience in software
                  development, my journey began with Vue.js, and I quickly
                  transitioned to <strong>React</strong> and then Next.js
                  framework, gaining proficiency in various front-end
                  technologies along the way. However, my passion for data
                  science led me to pursue a new path.
                </p>
                <p>
                  I have completed my <strong>Master's degree</strong> in Big
                  Data Analytics at Griffith College Dublin, graduating with
                  second-class honors. Throughout my academic journey, I've
                  honed my skills in Python, particularly utilizing Flask for
                  various projects. Additionally, I have acquired extensive
                  expertise in a multitude of machine learning models, including
                  regression, classification, as well as advanced techniques
                  such as deep learning with{" "}
                  <strong>KNN, NLP, and generative AI </strong> models like
                  Keras.
                </p>
                <p>
                  In addition to my academic pursuits, I'm also an{" "}
                  <strong>AWS Solutions Architect </strong> certified
                  professional. I have hands-on experience in deploying models
                  on AWS and scaling solutions to meet evolving needs.
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">
                      Abdiaziz Mohamed
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Address:
                    </span>
                    <span className="second inline-block">Dublin, Ireland</span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Study:
                    </span>
                    <span className="second inline-block">
                      Griffith College
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Degree:
                    </span>
                    <span className="second inline-block">
                      Msc. Big Data Analytics
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="#"
                      >
                        abdatorey@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">
                      +353 87 333 13 34
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Skills
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Pandas
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Sci-kit Learn
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Generative AI
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      NLP
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      SQL
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      Tableau
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      Pytorch
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service_list w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Data Tools
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      AWS
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Cassandra
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Spark
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Pyspark
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skills w-full h-auto clear-both float-left mb-[65px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="programming w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[3px]">
                    Programming &amp; Libraries
                  </span>
                </div>
                <div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
                  {progressBarData.map((item, idx) => (
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
              <div className="language w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Language
                  </span>
                </div>
                <div className="circular_progress_bar w-full h-auto clear-both float-left mt-[62px]">
                  <ul>
                    {circleProgressData.map((item, idx) => (
                      <li key={idx}>
                        <div className="list_inner">
                          <div
                            className="myCircle"
                            style={{ width: 120, height: 120 }}
                          >
                            <CircularProgressbar
                              width={120}
                              value={item.progress}
                              strokeWidth={3}
                              styles={buildStyles({
                                pathColor: "#7d7789",
                                trailColor: "rgba(0,0,0,0)",
                              })}
                            />
                            <span className="number">{item.progress}%</span>
                            <div className="title">
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume w-full h-auto clear-both float-left mb-[75px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="education w-[60%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Education
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2023 - 2024
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Griffith College
                            </h3>
                            <span className="text-[14px]">
                              Msc. Big Data Analytics
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2013 - 2018
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Kenyatta Univercity
                            </h3>
                            <span className="text-[14px]">
                              Bsc. Computer Science
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="experience w-full">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Experience
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className=" middle:hidden laptop:hidden w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex  relative">
                          <div className="time w-1/3 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2023 - Part-time
                            </span>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <h3 className="text-[16px] md:text-[16px] mb-[2px] font-semibold">
                              Developer - Merville
                            </h3>
                            <span className="text-[14px]">
                              Used NextJs to Eengineer a comprehensive fashion website for
                              Merville, incorporating Stripe for secure payment
                              processing. Designed an admin dashboard to
                              streamline order, sales, and user management.
                              Implemented Clerk.js for robust authentication
                              across both the main website and admin dashboard.
                            </span>
                          </div>
                        </div>
                      </li>
                      {/* mobile view */}
                      <li className=" hidden middle:block w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex flex-col  relative">
                          <div className=" flex ">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="w inline-block py-[5px] px-[15px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                                2023 - Part-time
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px] ">
                              <h3 className="text-[14px] mb-[2px] mt-2  font-semibold">
                                Developer - Merville
                              </h3>
                            </div>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <span className="text-[14px]">
                            Used NextJs to Eengineer a comprehensive fashion website for
                              Merville, incorporating Stripe for secure payment
                              processing. Designed an admin dashboard to
                              streamline order, sales, and user management.
                              Implemented Clerk.js for robust authentication
                              across both the main website and admin dashboard.
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className=" middle:hidden laptop:hidden w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex  relative">
                          <div className="time w-1/3 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] tracking-widest bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2021 - 2023
                            </span>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <h3 className="text-[16px] md:text-[16px] mb-[2px] font-semibold">
                              Full-Stack - Afrigate Cargo
                            </h3>
                            <span className="text-[14px]">
                              Leveraged Next.js to engineer a comprehensive
                              website, incorporating a real-time package
                              tracking system and an advanced cost estimation
                              tool for clients, enhancing user experience and
                              operational efficiency.
                            </span>
                          </div>
                        </div>
                      </li>
                      {/* mobile view */}
                      <li className=" hidden middle:block w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex flex-col  relative">
                          <div className=" flex ">
                            <div className="time w-1/3 pr-[20px]">
                              <span className="w inline-block py-[5px] px-[15px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                                2021 - 2023
                              </span>
                            </div>
                            <div className="place w-2/3 pl-[20px] ">
                              <h3 className="text-[14px] mb-[2px] mt-2  font-semibold">
                                Full-Stack - Afrigate Cargo
                              </h3>
                            </div>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <span className="text-[14px]">
                              Leveraged Next.js to engineer a comprehensive
                              website, incorporating a real-time package
                              tracking system and an advanced cost estimation
                              tool for clients, enhancing user experience and
                              operational efficiency.
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className=" middle:hidden laptop:hidden w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex  relative">
                          <div className="time w-1/3 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2019 - 2021
                            </span>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <h3 className="text-[16px] md:text-[16px] mb-[2px] font-semibold">
                              FrontEnd Dev - Mega WholeSalers
                            </h3>
                            <span className="text-[14px]">
                              Worked alongside backend developers to develop a
                              fleet management system using react enabling
                              real-time vehicle tracking, remote vehicle
                              shutdown, and real-time fuel monitoring.
                            </span>
                          </div>
                        </div>
                      </li>
                      {/* mobile view */}
                      <li className=" hidden middle:block w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex flex-col  relative">
                          <div className=" flex ">
                            <div className="time w-1/3 pr-[20px]">
                              <span className="w inline-block py-[5px] px-[15px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                                2019 - 2021
                              </span>
                            </div>
                            <div className="place w-2/3 pl-[20px] ">
                              <h3 className="text-[14px] mb-[2px] mt-2  font-semibold">
                                FrontEnd Dev - Mega 
                              </h3>
                            </div>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <span className="text-[14px]">
                              Worked alongside backend developers to develop a
                              fleet management system using react enabling
                              real-time vehicle tracking, remote vehicle
                              shutdown, and real-time fuel monitoring.
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className=" middle:hidden laptop:hidden w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex  relative">
                          <div className="time w-1/3 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2018 - 2019
                            </span>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <h3 className="text-[16px] md:text-[16px] mb-[2px] font-semibold">
                              Internship - Mega WholeSalers
                            </h3>
                            <span className="text-[14px]">
                              Contributed to the development of a Vue.js-based
                              dashboard for the Product Design team,
                              streamlining the process of uploading images for
                              the e-commerce site. Crafted a user-friendly
                              interface to guarantee image uploads adhered to
                              established criteria. Utilized an API, provided by
                              the backend team, for secure image storage on an
                              in-house cloud server.
                            </span>
                          </div>
                        </div>
                      </li>
                      {/* mobile view */}
                      <li className=" hidden middle:block w-full float-left relative pl-[20px] pb-[45px]">
                        <div className=" list_inner w-full h-auto clear-both flex flex-col  relative">
                          <div className=" flex ">
                            <div className="time w-1/3 pr-[20px]">
                              <span className="w inline-block py-[5px] px-[15px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                                2018 - 2019
                              </span>
                            </div>
                            <div className="place w-2/3 pl-[20px] ">
                              <h3 className="text-[14px] mb-[2px] mt-2  font-semibold">
                                Internship - Mega 
                              </h3>
                            </div>
                          </div>
                          <div className="place w-2/3 pl-[20px]">
                            <span className="text-[14px]">
                              Contributed to the development of a Vue.js-based
                              dashboard for the Product Design team,
                              streamlining the process of uploading images for
                              our e-commerce site. Crafted a user-friendly
                              interface to guarantee image uploads adhered to
                              established criteria. Utilized an API, provided by
                              the backend team, for secure image storage on an
                              in-house cloud server
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
