import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
