import logo from "../assets/akshat_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative bottom-0 flex flex-row mb-10 items-center justify-between lg:px-10">
        <img className="" src={logo} width={50} />
        <h3 className="sm:text-xs text-sm tracking-wider text-neutral-400">
          Supportive Partner -{" "}
          <a href="https://mokshbhardwaj.netlify.app/">Moksh Bhardwaj ❤️</a>
        </h3>
        <h3 className="sm:text-xs text-sm tracking-wider text-neutral-400">
          This website is open source on{" "}
          <a
            className="text-neutral-200"
            href="https://github.com/AkshatRaiShrivastava/akshat-portfolio"
          >
            GitHub
          </a>
        </h3>
      </div>
    </>
  );
};

export default Footer;
