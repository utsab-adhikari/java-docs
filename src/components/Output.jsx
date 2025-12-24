export default function Output({ output }) {
  return (
    <section className="space-y-3">
      <h2 className="border-l-4 border-indigo-400 pl-3 text-xl font-semibold text-indigo-900">
        Output:
      </h2>
      <pre className="overflow-x-auto border border-slate-800 bg-[#020617] px-4 py-3 text-xs text-slate-100">
        <code>{output}</code>
      </pre>
    </section>
  );
}