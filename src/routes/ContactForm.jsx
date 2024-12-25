"use client";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion, useScroll } from "motion/react";

const ContactForm = () => {
  const [sent , setSent] = useState[true]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const payload ={
    ...formData
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSent(false)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/post`, payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        });
      console.log("Response:", response.data);
      toast("Message sent successfully !");
      // alert("Form submitted successfully!");
      setSent(true)
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("An error occurred !");
      // alert("There was an error submitting the form.");
    }
  };

  return (
    <>
      <div className="border-b border-neutral-500 pb-20">
        <Link to="/" className="flex flex-row items-center gap-3">
          <FaArrowCircleLeft />
          Back
        </Link>
        <motion.div whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -400}}
        transition={{ duration: 1 }} className="items-center  flex justify-center px-10">
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

            <button
              onClick={handleSubmit}
              className="p-3 bg-[#101010] rounded-2xl w-auto"
            >
              {sent?"Send":"Sending..."}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;
