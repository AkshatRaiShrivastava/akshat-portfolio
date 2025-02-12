import { DiAndroid, DiJava } from "react-icons/di";
import {
  SiAmazonwebservices,
  SiAndroid,
  SiC,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const Techs = () => {
  return (
    <>
      <div className="px-10 py-20 border-b border-neutral-500 pb-4">
        <h1 className="text-4xl text-neutral-100 tracking-wider">
          Technologies
        </h1>
        <h3 className="text-2xl tracking-widest text-neutral-400 mt-10">
          Tech Stack
        </h3>
        <div className="pt-10 pb-10 grid grid-cols-1 text-neutral-500 gap-x-2 gap-y-2 px-4  md:grid-cols-3 lg:grid-cols-4">
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <DiJava className="text-5xl text-red-500" />{" "}
            <h1 className="text-xl ">Java</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4 ">
            <SiReact className="text-5xl p-2 text-blue-400" />{" "}
            <h1 className="text-xl">ReactJS</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiSpringboot className="text-5xl p-2 text-green-500" />{" "}
            <h1 className="text-xl">Spring boot</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiNextdotjs className="text-5xl p-2 text-black-400" />{" "}
            <h1 className="text-xl">Next.js</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <DiAndroid className="text-5xl p-1 text-[#a5c736]" />{" "}
            <h1 className="text-xl">Android</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiKotlin className="text-4xl p-2 text-purple-700" />{" "}
            <h1 className="text-xl">Kotlin</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-5xl p-2 text-green-500" />{" "}
            <h1 className="text-xl">MongoDb</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiFlutter className="text-5xl p-2 text-[#0b549a]" />{" "}
            <h1 className="text-xl">Flutter</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-5xl p-2 text-yellow-500" />{" "}
            <h1 className="text-xl">Javascript</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiDart className="text-5xl p-2 text-[#00d2b8]" />{" "}
            <h1 className="text-xl">Dart</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiNodedotjs className="text-5xl p-2 text-green-600" />{" "}
            <h1 className="text-xl">NodeJS</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-5xl p-2 text-[#007acc]" />{" "}
            <h1 className="text-xl">TypeScript</h1>
          </div>
        </div>
        <h3 className="text-2xl tracking-widest text-neutral-400">
          Services and Tools
        </h3>
        <div className="p-10 grid grid-cols-1 text-neutral-500 gap-x-2 gap-y-2 px-4 md:grid-cols-3 lg:grid-cols-4">
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostman className="text-5xl p-2 text-orange-500" />{" "}
            <h1 className="text-xl">Postman</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiFirebase className="text-5xl p-2 text-orange-500" />{" "}
            <h1 className="text-xl">Firebase</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiNetlify className="text-5xl p-1 text-cyan-500" />{" "}
            <h1 className="text-xl">Netlify</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiVercel className="text-5xl p-2 text-black-500" />{" "}
            <h1 className="text-xl">Vercel</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiShadcnui className="text-5xl p-2 text-neutral-100" />{" "}
            <h1 className="text-xl">ShadCN UI</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiAmazonwebservices className="text-5xl p-2 text-orange-400" />{" "}
            <h1 className="text-xl">AWS</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-5xl p-2 text-cyan-300" />{" "}
            <h1 className="text-xl">Tailwind CSS</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className="text-5xl p-2 text-neutral-100" />{" "}
            <h1 className="text-xl">GitHub</h1>
          </div>
          <div className=" flex flex-row gap-3 items-center rounded-2xl border-4 border-neutral-800 p-4">
            <SiFramer className="text-5xl p-2 text-neutral-300" />{" "}
            <h1 className="text-xl">Framer Motion</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techs;
