import logo from "../assets/akshat_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
const Navbar = () => {
  const [pass, setPass] = useState({password:""})
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  };
  const handleSubmit = () =>{
    if(pass.password == `${import.meta.env.VITE_ADMIN_PASS}`){
      navigate("/admin")
      setIsOpen(false); 
    }else{
      toast("Wrong password !")
    }
  }
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
          <a href="https://x.com/AkshShriv2005"><FaSquareXTwitter /></a>
          <a href="https://www.instagram.com/cloud.crusader/">
            <FaInstagram />
          </a>
          <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
            <MdOutlineAdminPanelSettings/>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-neutral-200 opacity-1">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you the admin ?</AlertDialogTitle>
          <AlertDialogDescription>
            <input name="password" value={pass.password} onChange={handleChange} type="password" className="w-full border-b placeholder-black border-black bg-transparent p-2 outline-none" placeholder="Enter the password"/>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <button className="w-auto bg-black text-neutral-200 px-2 rounded-lg" onClick={handleSubmit} >Continue</button>
        </AlertDialogFooter>
      </AlertDialogContent>
          </AlertDialog>
        </div>
      </nav>
    );
  };
  
  export default Navbar;