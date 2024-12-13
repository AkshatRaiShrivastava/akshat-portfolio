import logo from "../assets/akshat_logo.png"

const Footer=()=>{
    return(
        <>
        <div className="relative bottom-0 flex flex-row mb-10 items-center justify-between lg:px-10">

        <img src={logo}width={70} />
        <h3 className="tracking-wider text-neutral-400">This website is open source on <a href="">GitHub</a></h3>
        </div>
        </>
    );
}

export default Footer;