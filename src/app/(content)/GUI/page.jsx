
import Link from "next/link";

export default function GUIOverviewPage() {
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
					<span className="font-medium text-slate-700">
						GUI Programming with AWT and Swing
					</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					GUI Programming with AWT and Swing
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					General introduction to building graphical user interfaces in Java using
					AWT and Swing, plus quick links to detailed pages on components and
					layout managers.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Study These Topics in Detail
				</h2>
				<p className="text-slate-700">
					Use the following links to dive deeper into Swing components and layout
					managers used throughout GUI applications.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            <h4 className="font-semibold mb-2">
              Components: 
            </h4>
            <ul className="list-disc pl-3 space-y-1">
              <li>JFrame</li>
              <li>JPanel</li>
              <li>JLabel</li>
              <li>JButton</li>
              <li>JTable</li>
              <li>JList</li>
              <li>JTextField, JTextArea</li>
            </ul>
          </div>

          <div className="border border-purple-100 bg-purple-50 p-4 text-sm text-purple-900">
            <h4 className="font-semibold mb-2">Layouts: </h4>
            <ul className="list-disc pl-3 space-y-1">
              <li>FlowLayout</li>
              <li>GridLayout</li>
              <li>BorderLayout</li>
              <li>GridBagLayout</li>
              <li>CardLayout</li>
            </ul>
          </div>
        </div>
			<div className="mt-4 flex flex-col items-center justify-center gap-3 pt-6">

				<Link
						href="/GUI/components"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>Start With Components</span>
					</Link>
                    	<Link
						href="/GUI/layouts"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
					>
                    <span>Start With Layouts</span>
					</Link>
                    </div>
			</section>

			 <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
          >
            <span>Back to Home</span>
          </Link>
          <Link
          href="/chapter-01"
            className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
          >
            <span>Start Chapter 01</span>
          </Link>
        </div>
		</article>
	);
}

