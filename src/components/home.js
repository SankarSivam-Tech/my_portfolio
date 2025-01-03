import React from "react";
import heroimage from "../assets/hero.png";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Home = () => {
  const config = {
    subTitle: "Im a Full Stack Developer",
    social:{
      twitter:'',
      facebook:'',
      linkedIn:''
    }
  };
  return (
    <article
      id="home"
      className="bg-primary px-5 py-32 flex flex-col md:flex-row justify-center"
    >
      <section className="md:w-1/2 flex flex-col font-hero-font  ">
        <h1 className="md:text-6xl text-3xl text-white ">
          Hi,
          <br />
          I'm Veera <span className="text-black">Sankar</span>
        </h1>

        <p className="md:text-2xl text-xl text-white">{config.subTitle}</p>

        <section className="flex space-x-4 py-6 ">
          <a className="hover:text-white" href={config.social.facebook}>
            <AiOutlineFacebook size={40} />
          </a>
          <a className="hover:text-white" href={config.social.twitter}>
            <AiOutlineTwitter size={40} />
          </a>
          <a className="hover:text-white" href={config.social.linkedIn}>
            <AiOutlineLinkedin size={40} />
          </a>
        </section>
      </section>

      <img className="md:w-1/3" src={heroimage} alt="hero" loading="lazy" />
    </article>
  );
};

export default Home;
