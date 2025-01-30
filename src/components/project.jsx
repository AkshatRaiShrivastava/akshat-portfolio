import ProjectCard from "./projectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="px-10 py-20 border-b border-neutral-500 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
