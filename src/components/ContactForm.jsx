"use client";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/post", formData);
      console.log("Response:", response.data);
      toast("Message sent successfully !")
      // alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <>
      <div className="border-b border-neutral-500 pb-20">
        <Link to="/" className="flex flex-row items-center gap-3">
          <FaArrowCircleLeft />
          Back
        </Link>
        <div className="items-center  flex justify-center px-10">
          <div class="p-10 mt-10 bg-[#191917] lg:w-1/3  rounded-2xl flex flex-col gap-5 justify-center w-full">
            <input
              placeholder="Full name"
              className="bg-transparent border-b p-2 w-full outline-none"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
            />
            <input
              placeholder="Email id"
              className="bg-transparent border-b p-2 w-full outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
            <textarea
              rows={2}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-transparent border-b p-2 w-full outline-none"
              type="text"
              required
            />

            <button onClick={handleSubmit} className="p-3 bg-[#101010] rounded-2xl w-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContactForm;
