import { Experience } from "../types/experiences.types";

export default function ExperiencesCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-500">
          {experience.title}
        </p>

        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
          {experience.company}
        </h3>

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>{experience.location}</span>
          <span>•</span>
          <span>{experience.duration}</span>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {experience.responsibilities.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}