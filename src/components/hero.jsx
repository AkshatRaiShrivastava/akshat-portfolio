import { HERO_CONTENT } from "../constants";
import akshat from "../assets/akshat_1.png";
import { motion } from "motion/react";
const Hero = () => {
  // const { scrollYProgress } = useScroll()
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <>
      <div className="border-b border-neutral-500 flex lg:flex-row flex-col-reverse items-center px-10 mb-10 pb-16 lg:gap-40 gap-20">
        <div className="">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="lg:text-7xl text-5xl text-neutral-100 mb-5 "
          >
            Hi, I am Akshat Rai
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-[#ba4d17] via-[#fdbf53] to-[#ba4d17] bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Full-Stack Developer and an Android Enthusiast
          </motion.span>
          <p>
            <motion.h3
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="tracking-tighter mt-5"
            >
              {HERO_CONTENT}
            </motion.h3>
          </p>
        </div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          src={akshat}
          className=" rounded-full lg:w-1/3 w-9/10"
        />
      </div>
    </>
  );
};

export default Hero;

// <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

// <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
