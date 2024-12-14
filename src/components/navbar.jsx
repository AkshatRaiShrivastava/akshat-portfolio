import logo from "../assets/akshat_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
      <nav className=" flex items-center justify-between py-6 mb-10 lg:px-10">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} width={70} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/akshat-rai-shrivastava-186905293/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AkshatRaiShrivastava">
            <FaGithub />
          </a>
          <FaSquareXTwitter />
          <a href="https://www.instagram.com/cloud.crusader/">
            <FaInstagram />
          </a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;