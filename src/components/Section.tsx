import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-16">
      {title ? (
        <div className="mb-10 flex items-center gap-4">
          <span className="block h-1.5 w-14 rounded-full bg-sky-500" />
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  )
}