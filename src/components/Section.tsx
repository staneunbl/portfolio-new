import { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      {children}
    </section>
  )
}