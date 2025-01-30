const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  liveUrl,
  timePer,
}) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl flex flex-col h-full">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2 my-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#2A2A2A] text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          {" "}
          {/* Pushes everything above up */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2A] text-white px-4 py-2 rounded-md hover:bg-[#3A3A3A] transition"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2A2A] text-white px-4 py-2 rounded-md hover:bg-[#3A3A3A] transition"
            >
              Live Demo
            </a>
          )}
        </div>

        {timePer && (
          <p className="text-xs text-gray-500 mt-4 text-right">{timePer}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
