import React from "react";
import eCommerceWeb from "../assets/ecommerce-websites.jpg";
import foodeCommerceWeb from "../assets/food-ecommerce.jpg";
import blogWeb from "../assets/website-blog.jpg";

const Project = () => {
  const config = {
    projects: [
      {
        image: eCommerceWeb,
        description: " A Ecommerce Website. Built with MERN Stack.",
        link: "",
      },

      {
        image: foodeCommerceWeb,
        description:
          "Food Ecommerce website like Swiggy, Built with Angular & .Net",
        link: " ",
      },

      {
        image: blogWeb,
        description: "Basic Blog Website . Built with Next JS and MongoDB",
        link: "",
      },
    ],
  };
  return (
    <article id="project" className="flex flex-col bg-primary px-5 py-20">
      <section className="px-5 py-5 text-white">
        <h1 className="border-b-4 border-[#2b2d77] w-[140px] mb-4 text-4xl  font-bold">
          Projects
        </h1>

        <p>
          These are some of my best projects.I have built these with React,MERN
          and vanilla CSS.check them out.
        </p>
      </section>

      <section className="flex flex-col md:flex-row px-5 gap-5">
        {config.projects.map((project) => (
          <section className="relative  ">
            <img
              className="h-[200px] w-[500px] "
              src={project.image}
              loading="lazy"
              alt=""
            />

            <div className="absolute bottom-0 top-0 left-0 right-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5 text-white">
                {project.description}
              </p>

              <div className="flex justify-center">
                <a className="btn" target="_blank" href={project.link}>
                  View Project
                </a>
              </div>
            </div>
          </section>
        ))}
      </section>
    </article>
  );
};

export default Project;
