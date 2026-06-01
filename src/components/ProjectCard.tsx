import { Project } from "../types/projects.types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">
            {project.type ?? "Project"}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {project.title}
          </h3>
        </div>
        {project.date ? (
          <time className="text-xs text-slate-400 dark:text-slate-500">{project.date}</time>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {/* {project.github && (
          <a
            href={project.github}
            className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            GitHub
          </a>
        )} */}
        {/* {project.demo && (
          <a
            href={project.demo}
            className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            Live demo
          </a>
        )} */}
      </div>
    </article>
  );
}
