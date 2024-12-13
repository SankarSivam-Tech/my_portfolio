import React from "react";
import resumeImg from "../assets/resume.jpg";

const Resume = () => {
  const config={
    link:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
  return (
    <article id="resume" className="flex flex-col md:flex-row px-5 bg-secondary">
        <section className="py-5 md:w-1/2  flex justify-center md:justify-end  ">
      <img
        className="w-[300px]"
        src={resumeImg}
        alt="Resume"
        loading="lazy"
      />
      </section>

      <section className='md:w-1/2 flex justify-center'>
            <section className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' target="_blank" href={config.link} download> Download</a></p>
            </section>
        </section>
    </article>
  );
};

export default Resume;
