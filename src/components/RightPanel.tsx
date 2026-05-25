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
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Contact</p>
        <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">hello@shayyanne.dev</p>
        <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <p>GitHub: </p>
          <p>LinkedIn:  </p>
        </div>
      </div>
    </aside>
  );
}
