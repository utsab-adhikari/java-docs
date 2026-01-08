import JavaCode from "@/components/JavaCode";
import Link from "next/link";

export default function LayoutManagementPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10 px-4 sm:px-0">
      <header className="border-b border-slate-200 pb-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex items-center text-xs text-slate-500 sm:text-sm"
        >
          <Link
            href="/"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Home
          </Link>
          <span className="mx-1">›</span>
          <Link
            href="/chapter-03"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Chapter 03
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">
            3.2 Layout Management
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          3.2 Layout Management
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Overview of the main layout managers in Swing, including how they
          arrange components and when to use each one for flexible, maintainable
          user interfaces.
        </p>
      </header>

      <section className="space-y-3">
        <p className="text-slate-700">
          In Java GUI programming, layout managers automatically position and
          size components inside containers. As windows are resized, these
          managers recalculate positions so the interface structure remains
          organized.
        </p>
        <p className="text-slate-700">
          Different layout managers are suited to different screen designs. This
          section introduces the most commonly used ones in Swing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          FlowLayout
        </h2>
        <p className="text-slate-700">
          FlowLayout arranges components in a directional flow, typically from
          left to right. When components no longer fit in the current row, they
          wrap to the next line.
        </p>
        <div className=" bg-indigo-50 p-4 text-xs text-indigo-900 ring-1 ring-indigo-200">
          <span className="font-semibold">Default behavior:</span> center
          alignment with small horizontal and vertical gaps between components.
        </div>
        <JavaCode
          CODE={`// Example: center alignment with custom gaps
f1.setLayout(new FlowLayout(FlowLayout.CENTER, 15, 15));`}
          filename="FlowLayoutExample.java"
        />

        <Link
              href="/GUI/swing-awt/layouts/flowlayout"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
        >
          FlowLayout (Detailed) →
        </Link>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          GridLayout
        </h2>
        <p className="text-slate-700">
          GridLayout arranges components in a rectangular grid of equal-sized
          cells. Each cell holds exactly one component, and all components are
          resized to fill their cell.
        </p>
        <JavaCode
          CODE={`// Syntax: rows, columns, hgap, vgap
f1.setLayout(new GridLayout(4, 2, 5, 5));`}
          filename="GridLayoutExample.java"
        />
        <Link
              href="/GUI/swing-awt/layouts/gridlayout"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
        >
          GridLayout (Detailed) →
        </Link>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          BorderLayout
        </h2>
        <p className="text-slate-700">
          BorderLayout divides a container into five regions: NORTH, SOUTH,
          EAST, WEST, and CENTER. Each region can contain at most one component,
          and the CENTER region expands to use remaining space.
        </p>
        <JavaCode
          CODE={`f1.add(bt1, BorderLayout.NORTH);
f1.add(bt2, BorderLayout.SOUTH);
f1.add(bt3, BorderLayout.WEST);
f1.add(bt4, BorderLayout.CENTER);`}
          filename="BorderLayoutExample.java"
        />
        <Link
              href="/GUI/swing-awt/layouts/borderlayout"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
        >
          BorderLayout (Detailed) →
        </Link>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          GridBagLayout
        </h2>
        <p className="text-slate-700">
          GridBagLayout is more flexible than GridLayout because each component
          can span multiple rows or columns and have different sizes. It uses
          the GridBagConstraints helper class to describe how each component is
          placed.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            <span className="font-semibold">gridx, gridy:</span> specify the
            cell position in the grid.
          </li>
          <li>
            <span className="font-semibold">gridwidth, gridheight:</span> how
            many cells a component spans horizontally and vertically.
          </li>
          <li>
            <span className="font-semibold">fill:</span> controls whether the
            component grows to fill extra space.
          </li>
        </ul>
        <Link
              href="/GUI/swing-awt/layouts/gridbaglayout"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
        >
          GridBagLayout (Detailed) →
        </Link>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          CardLayout
        </h2>
        <p className="text-slate-700">(soon)</p>
      </section>

      <div className="mt-6 flex justify-center">
        <Link
              href="/GUI/swing-awt/layouts"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
        >
          Learn Layouts (Detailed)
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-03/awt-swing"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: 3.1 AWT and Swing</span>
        </Link>
        <Link
          href="/chapter-03/gui-control"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
        >
          <span>Next: 3.3 GUI Controls</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
