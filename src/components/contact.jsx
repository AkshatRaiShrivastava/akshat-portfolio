import { CONTACT_CONTENT } from "../constants";
import { FaLink, FaLinkedin } from "react-icons/fa";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMessage,
  FaSpotify,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className=" px-10 py-20 pb-4 border-b border-neutral-500 mb-20">
        <h1 className="text-4xl mb-5 tracking-wider">Contact</h1>
        <h3 className="text-xl text-neutral-500 tracking-widest">
          {CONTACT_CONTENT}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 my-20 gap-10">
          <a href="https://www.linkedin.com/in/akshat-rai-shrivastava-186905293/">
            {" "}
            <div className=" p-5 rounded-2xl bg-[#3f3f4a]">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-neutral-200 text-xl">LinkedIn</h1>
                <FaLinkedinIn />
              </div>
              <h3 className="text-neutral-500">Connect with me on LinkedIn</h3>
            </div>
          </a>

          <a href="https://github.com/AkshatRaiShrivastava/">
            {" "}
            <div className=" p-5 rounded-2xl bg-[#3f3f4a]">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-neutral-200 text-xl">GitHub</h1>
                <FaGithub />
              </div>
              <h3 className="text-neutral-500">Follow me on GitHub</h3>
            </div>
          </a>

          <a href="https://www.instagram.com/cloud.crusader/">
            {" "}
            <div className=" p-5 rounded-2xl bg-[#3f3f4a]">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-neutral-200 text-xl">Instagram</h1>
                <FaInstagram />
              </div>
              <h3 className="text-neutral-500">Follow me on Instagram</h3>
            </div>
          </a>

          <a href="https://open.spotify.com/user/314erlctyhbs62oppjaotxq57y3m">
            {" "}
            <div className=" p-5 rounded-2xl bg-[#3f3f4a]">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-neutral-200 text-xl">Spotify</h1>
                <FaSpotify />
              </div>
              <h3 className="text-neutral-500">Follow me on Spotify :)</h3>
            </div>
          </a>

          <Link to="/contact">
            <div className=" p-5 rounded-2xl bg-[#3f3f4a]">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-neutral-200 text-xl">Message</h1>
                <FaMessage />
              </div>
              <h3 className="text-neutral-500">Send me a message directly</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
