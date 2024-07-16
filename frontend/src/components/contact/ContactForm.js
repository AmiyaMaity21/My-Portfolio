import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState();
  const [successfull, setSuccessfull] = useState();
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  const handleSend = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      userName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };
    if (!formData.userName) {
      newErrors.userName = "Name is required";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setError(newErrors);

    if (isValid) {
      console.log(formData);
      setFormData("");
      setSuccessfull(`Thank you dear ${formData.userName}, Your message has been sent succesfully!`);
    }
  };
  return (
    <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-4">
      <div className="w-full flex flex-col lgl:flex-row gap-10">
        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            Your Name
          </label>
          <input
            className={`${
              error?.userName && "outline-designColor"
            } contactInput`}
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleFormDataChange}
          />
          {error && (
            <p className="text-orange-500 text-base tracking-wide">
              {error.userName}
            </p>
          )}
        </div>
        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            Phone number
          </label>
          <input
            className={`${error?.phone && "outline-designColor"} contactInput`}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleFormDataChange}
          />
          {error && (
            <p className="text-orange-500 text-base tracking-wide">
              {error.phone}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-sm text-gray-400 uppercase tracking-wide">
          Email
        </label>
        <input
          className={`${error?.email && "outline-designColor"} contactInput`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormDataChange}
        />
        {error && (
          <p className="text-orange-500 text-base tracking-wide">
            {error.email}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-sm text-gray-400 uppercase tracking-wide">
          Subject
        </label>
        <input
          className={`${error?.subject && "outline-designColor"} contactInput`}
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleFormDataChange}
        />
        {error && (
          <p className="text-orange-500 text-base tracking-wide">
            {error.subject}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-sm text-gray-400 uppercase tracking-wide">
          Message
        </label>
        <textarea
          className={`${
            error?.message && "outline-designColor"
          } contactTextArea`}
          cols="30"
          rows="8"
          name="message"
          value={formData.message}
          onChange={handleFormDataChange}
        />
        {error && (
          <p className="text-orange-500 text-base tracking-wide">
            {error.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <button
          onClick={handleSend}
          className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
        >
          Send Message
        </button>
      </div>
      {successfull && (
        <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
          {successfull}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
