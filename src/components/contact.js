import React from "react";

const Contact = () => {
  const config={
    email:'sankarsivam@gamil.com',
    phone:'+91 9876543210'
  }
  return (
    <article id="contact" className="bg-primary  py-32 text-white">
      <section className="flex flex-col items-center">
        <h1 className="font-bold text-4xl  border-b-4 border-[#2b2d77] w-[140px] mb-4">
          Contact
        </h1>

        <p className="text-center px-2" >
          If you want to discuss more in detail,please contact me
        </p>

        <p className="py-4">
          <span className="font-bold ">Email:</span> {config.email} 
        </p>

        <p>
          <span className="font-bold ">Phone:</span> {config.phone} 
        </p>
      </section>
    </article>
  );
};

export default Contact;
