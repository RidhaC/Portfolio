const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition duration-300">
      <h3 className="text-xl text-blue-400 font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-400">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="inline-flex items-center bg-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:underline text-sm"
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default ProjectCard;
