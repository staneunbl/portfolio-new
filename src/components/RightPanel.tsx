import { Download } from "lucide-react";

export default function RightPanel() {
  return (
    <aside className="hidden xl:block w-80 shrink-0 space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="rounded-[28px] bg-slate-50 p-6 dark:bg-slate-900">
        <p className="text-xs uppercase tracking-[0.35em] text-sky-500">Highlights</p>
        <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Ready for impact</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          I bring polished frontend architecture, accessible UI systems, and fast, maintainable Next.js code.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Resume
        </p>
        <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
          Download my latest CV in PDF format.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 hover:border-slate-600"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
        <p className="mt-3 text-xs text-slate-500">
          Updated June 2026
        </p>
      </div>
    </aside>
  );
}
