import ExperiencesCard from "../components/ExperincesCard";
import ProjectCard from "../components/ProjectCard";
import RightPanel from "../components/RightPanel";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <Section id="home" title="">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-500">Associate Software Engineer</p>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                  Crafting polished frontend systems for product-led teams
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I build thoughtful, scalable web experiences with Next.js, TypeScript and refined UI systems that feel fast, accessible, and confident.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
                  >
                    View selected work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              {/* <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Featured outcomes</p>
                <div className="mt-8 grid gap-4">
                  <div className="rounded-[24px] bg-slate-50 p-5 dark:bg-slate-950/80">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Faster launch cycles</p>
                    <p className="mt-3 text-3xl font-semibold text-sky-600">3 weeks</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">MVP frontend shipped with reusable components and polished UI.</p>
                  </div>
                  <div className="rounded-[24px] bg-slate-50 p-5 dark:bg-slate-950/80">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Accessible interfaces</p>
                    <p className="mt-3 text-3xl font-semibold text-sky-600">WCAG AA</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Built with focus states, keyboard journeys and semantic structure.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </Section>

          <Section id="about" title="About">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
              <div className="space-y-6 text-slate-600 dark:text-slate-300">
                <p>
                  I partner with product teams to design and build elegant frontend experiences that feel fast and intuitive. My work blends pragmatic engineering with strong visual systems, so interfaces are memorable without being noisy.
                </p>
                <p>
                  I enjoy turning complex product requirements into clean interactions, shipping accessible components, and optimizing pages for performance and maintainability.
                </p>
              </div>

              <div className="space-y-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="rounded-[24px] bg-slate-50 p-5 dark:bg-slate-900">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">What I bring</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Frontend craftsmanship, thoughtful component systems, and polished product-ready interfaces.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    "Component-driven UI systems",
                    "Next.js + TypeScript performance",
                    "Responsive, accessible experiences",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                      {item}
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
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Primary toolkit</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                  ].map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Tooling & process</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Vercel",
                    "Git",
                    "Figma",
                    "ESLint",
                    "Playwright",
                  ].map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
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
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="mt-2">shayyannelee@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">GitHub</p>
                    <p className="mt-2 text-sky-600">https://github.com/staneunbl</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                    <p className="mt-2 text-sky-600">https://www.linkedin.com/in/shayyanne-dominiq-marasigan-963467259/</p>
                  </div>
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
