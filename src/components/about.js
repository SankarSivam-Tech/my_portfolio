import React from "react";
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <article className="flex flex-col md:flex-row px-5 py-24 justify-center bg-secondary">
      <img className="md:w-1/2 pb-8" src={AboutImage} alt="About" loading="lazy" />

      <section className="flex flex-col justify-center md:w-1/2 text-white  ">
        <h1 className="text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold">
          About Me
        </h1>

        <p className="pb-5">
          Hi, My name is JV Logesh. I am a Full stack web developer. I built
          beautiful Websites with React.js , Tailwind CSS + Bootstrap
        </p>

        <p className="pb-5">
          I am proficient in Frontend skills like React.js, Redux, Redux Tool
          Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
        </p>

        <p className="pb-5">
          In backend I know Node.js, Express.js, MongoDB, and Mongoose
        </p>
      </section>
    </article>
  );
};

export default About;
