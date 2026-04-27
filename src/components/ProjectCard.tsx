import { Project } from "../types/projects.types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-neutral-500 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        {project.github && <a href={project.github}>GitHub</a>}
        {project.demo && <a href={project.demo}>Live</a>}
      </div>
    </div>
  )
}