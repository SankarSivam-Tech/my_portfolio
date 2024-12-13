import React from "react";
import AboutImage from "../assets/about.png";

const About = () => {
  const config = {
    line1: `Hi, My name is Veera Sankar. I am a Full stack web developer. I built
          beautiful Websites with React.js , Tailwind CSS + Bootstrap`,

    line2: `I am proficient in Frontend skills like React.js, Redux, Redux Tool
          Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.`,

    line3: `In backend I know Node.js, Express.js, MongoDB, and Mongoose`,
  };
  return (
    <article
      id="about"
      className="flex flex-col md:flex-row px-5 py-24 justify-center items-center bg-secondary"
    >
      <img
        className="md:w-1/2 pb-8"
        src={AboutImage}
        alt="About"
        loading="lazy"
      />

      <section className="flex flex-col justify-center md:w-1/2 text-white  ">
        <h1 className="text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold">
          About Me
        </h1>

        <p className="pb-5">{config.line1}</p>

        <p className="pb-5">{config.line2}</p>

        <p className="pb-5">{config.line3}</p>
      </section>
    </article>
  );
};

export default About;
