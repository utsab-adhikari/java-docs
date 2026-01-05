"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JTableBasicsPage() {
	return (
		<article className="mx-auto max-w-3xl space-y-10">
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
							href="/GUI/swing-awt"
						className="transition hover:text-indigo-700 hover:underline"
					>
							Swing and AWT GUI
					</Link>
					<span className="mx-1">›</span>
					<Link
							href="/GUI/swing-awt/components"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Components
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">JTable</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JTable: Displaying Tabular Data
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					JTable is used to show data in rows and columns, similar to a small Excel
					table. It is useful for displaying structured records.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Student data in a JTable
				</h2>
				<p className="text-slate-700">
					This example defines a 2D array for table data and a 1D array for column
					names, then passes both to <code>JTable</code>.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - Table");

        String ColumnName[] = { "Name", "Year", "Course" };

        String Data[][] = { { "Utsab", "2024", "BEIT" },
                { "Ram", "2025", "BECE" },
                { "Hari", "2023", "BESE" } };

        JTable t1 = new JTable(Data, ColumnName);

        add(t1);

        setLayout(new FlowLayout());
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JTabledemo {
    public static void main(String arr[]) {
        new MyFrame();
    }
}`}
					filename="JTableDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				<OutputImage src="/JTable.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is JTable?
				</h2>
				<p className="text-slate-700">
					A <code>JTable</code> displays data in tabular form. Each row represents
					one record, and each column represents a field (e.g., Name, Year, Course).
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Suitable for displaying structured, record-based information.</li>
					<li>Data is often provided as arrays or via table models.</li>
					<li>Can be placed inside a <code>JScrollPane</code> to add scrollbars.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the JTable example
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					We focus on how the column names and data array are defined and passed to
					the table.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
                        {`String ColumnName[] = { "Name", "Year", "Course" };`}
						</p>
						<p className="text-sm sm:text-base">
							Defines the header names for each column of the table.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							{`String Data[][] = {{ "Utsab", "2024", "BEIT" },
{ "Ram","2025", "BECE" },
{ "Hari", "2023", "BESE" } };`}
						</p>
						<p className="text-sm sm:text-base">
							Creates a 2D array where each inner array is one row (student
							record) and each element corresponds to a column.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JTable t1 = new JTable(Data, ColumnName);
							<br />
							add(t1);
						</p>
						<p className="text-sm sm:text-base">
							Creates the JTable using the data and column names, then adds it to
							the frame so it becomes visible.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Where JTable is used
				</h2>
				<p className="text-slate-700">
					Tables are everywhere in real applications: student records, invoices,
					reports, and more. JTable provides a flexible way to show and edit such
					data.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/components/jlist"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: JList Basics</span>
				</Link>
				<Link
						href="/GUI/swing-awt/layouts"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: Layouts Overview</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
