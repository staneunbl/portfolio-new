import ProjectCard from "../components/ProjectCard";
import RightPanel from "../components/RightPanel";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 space-y-16">
        <Section id="home" title="">
          <h1 className="text-4xl font-bold">Shayyanne Marasigan</h1>
          <p className="text-lg text-neutral-500">Associate Software Engineer</p>
          <p className="mt-4">Building clean, scalable web applications.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-4 py-2 bg-black text-white rounded-xl">Projects</a>
            <a href="#contact" className="px-4 py-2 border rounded-xl">Contact</a>
          </div>
        </Section>

        <Section id="about" title="About">
          <p>
            I am an Associate Software Engineer specializing in frontend development using React, Next.js, and modern tooling.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <a href="mailto:your@email.com" className="px-4 py-2 bg-black text-white rounded-xl">
            Email Me
          </a>
        </Section>
      </main>

      <RightPanel />
    </div>
  )
}