import { Briefcase, ExternalLink, Layers, Mail, Sparkles } from "lucide-react";
import ExperiencesCard from "../components/ExperincesCard";
import ProjectCard from "../components/ProjectCard";
import RightPanel from "../components/RightPanel";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { certifications, technicalSkills, toolSkills, workApproach } from "../data/skills";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <Section id="home" title="">
            <div className="gap-10 lg:grid lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-500">Software Engineer</p>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                  Software Engineer
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Frontend-focused developer building modern web applications with Next.js and TypeScript.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
                  >
                    View work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="relative overflow-hidden rounded-[24px]">
                  <img
                    src="/profile.jpg"
                    alt="Shayyanne Marasigan"
                    className="h-[360px] w-full object-cover object-[55%_80%]"
                  />
                  {/* subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* floating badge */}
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-white">
                    Available for work
                  </div>

                  {/* bottom text overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-white">
                      Software Engineer
                    </p>
                    <p className="mt-1 text-xs text-slate-200">
                      Next.js • TypeScript • React • API-driven systems
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Building scalable web applications, dashboard systems, and role-based platforms with modern frontend architecture.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section id="about" title="About">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
              <div className="space-y-6 text-slate-600 dark:text-slate-300">
                <p>
                  I build and maintain frontend applications using Next.js, TypeScript, and modern React tools. Most of my work focuses on dashboard systems, internal tools, and API-driven web applications.
                </p>

                <p>
                  I enjoy turning business requirements into functional interfaces, building reusable components, and working with backend APIs through BFF architecture, authentication, and role-based access systems.
                </p>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Focus
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                    Product-focused frontend
                  </h2>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      label: "UI & UX",
                      description: "Clean, responsive interfaces",
                      icon: Briefcase,
                    },
                    {
                      label: "Performance",
                      description: "Optimized React applications",
                      icon: Layers,
                    },
                    {
                      label: "Teamwork",
                      description: "Reusable and maintainable code",
                      icon: Sparkles,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <item.icon className="mt-0.5 h-4 w-4 text-slate-700 dark:text-slate-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-950 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Core stack</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Workflow & tools</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {toolSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Certifications</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <div className="space-y-6">
              {experiences.map((experience) => (
                <ExperiencesCard key={experience.title} experience={experience} />
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.85fr]">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-base font-semibold text-slate-900 dark:text-white">Let’s build something great together.</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  I’m available for frontend roles, product work, and design system projects. Reach out for remote or hybrid opportunities.
                </p>
                <a
                  href="mailto:shayyannelee@gmail.com"
                  className="mt-8 inline-flex items-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-500"
                >
                  Email me
                </a>
              </div>

              <aside className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Connect</p>
                <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <a href="mailto:shayyannelee@gmail.com" className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                    <Mail className="h-4 w-4" />
                    shayyannelee@gmail.com
                  </a>
                  <a href="https://github.com/staneunbl" className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                    github.com/staneunbl
                  </a>
                  <a href="https://www.linkedin.com/in/shayyanne-dominiq-marasigan-963467259/" className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                    linkedin.com/in/shayyanne-dominiq-marasigan-963467259
                  </a>
                </div>
              </aside>
            </div>
          </Section>

          <footer className="border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>Designed and built by Shayyanne Marasigan.</p>
              <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
            </div>
          </footer>
        </div>
      </main>

      <RightPanel />
    </div>
  );
}
