import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
    <div className="border-b border-neutral-500 pb-20">

      <Link to="/"className="flex flex-row items-center gap-3"><FaArrowCircleLeft/>Back</Link>
      <div className="items-center  flex justify-center px-10">

      <div class="p-10 mt-10 bg-[#191917] lg:w-1/3  rounded-2xl flex flex-col gap-5 justify-center w-full">
        <input placeholder="Full name"className="bg-transparent border-b p-2 w-full outline-none" type="text" required/>
        <input placeholder="Email id"className="bg-transparent border-b p-2 w-full outline-none" type="email" required/>
        <textarea rows={2}  placeholder="Message"className="bg-transparent border-b p-2 w-full outline-none" type="text" required/>

        <button className="p-3 bg-[#101010] rounded-2xl w-auto">Submit</button>
       
     
      </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
