import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import TechnologyBadge from "./TechnologyBadge";

export default function ProjectEntry({ project }: { project: Project }) {
  return (
    <div className="p-6 max-w-sm rounded-lg h-full border shadow-md bg-gray-700 border-gray-700 hover:border-gray-400 hover:scale-[1.02] transition duration-100 group">
      <div className="flex flex-row items-center justify-between">
        <a href={project.liveLink}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white hover:underline">
            {project.title}
          </h5>
        </a>
        <div className="flex items-center gap-1">
          <a href={project.githubLink}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 hover:text-blue-200"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-300 text-md">
        {project.description}
      </p>
      <div className="visible md:invisible md:group-hover:visible">
        {project.technologies.map((technology) => {
          return (
            <TechnologyBadge
              technology={technology}
              size="text-xs"
              key={technology.name}
            />
          );
        })}
      </div>
    </div>
  );
}