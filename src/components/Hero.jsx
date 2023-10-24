import React from "react";
import ProfileImage from "../assets/ehis.jpeg";

const Hero = () => {
  return (
    <div
      className="h-screen relative md:mx-14"
      id="home"
      // data-aos="fade-up"
    >
      <div className="absolute inset-0 top-[2rem] 3xl:top-[120px] xl:mt-36 px-5 lg:px-0 max-w-7xl justify-between mx-auto flex flex-wrap items-center gap-5 mt-12 md:mt-16">
        <section className="text-[1.5rem] lg:text-[3.6rem] font-bold text-[#f5f5f5] font-[poppins-extrabold] ">
          Hi 👋, <br /> My name is <br />
          <span className="name">EHIS IRIBHOGBE</span>
          <br />
          I'm a Software Engineer
        </section>
        <section>
          <img
            src={ProfileImage}
            alt=""
            className="rounded-full w-[17rem] h-[17rem] md:w-[27rem] md:h-[27rem] p-3 profile-image md:float-right object-cover mx-auto"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
