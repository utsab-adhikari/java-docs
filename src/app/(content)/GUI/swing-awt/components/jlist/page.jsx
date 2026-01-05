"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JListBasicsPage() {
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
					<span className="font-medium text-slate-700">JList</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JList: Displaying a List of Items
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					JList is used to show a list of items, such as days of the week, from
					which the user can select one or more entries.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Days of the Week in a JList
				</h2>
				<p className="text-slate-700">
					This example stores days of the week in a string array and passes it to a
					<code>JList</code>. A label describes what the list represents.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JList");

        String week[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

        JList<String> l1 = new JList<String>(week);

        JLabel lb = new JLabel("Select The Day:");

        add(lb);
        add(l1);

        setLayout(new FlowLayout());
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JListDemo {
    public static void main(String arr[]) {
        new MyFrame();
    }
}`}
					filename="JListDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				<OutputImage src="/JList.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is JList?
				</h2>
				<p className="text-slate-700">
					A <code>JList</code> shows a list of values from which the user can
					select. It is useful for any situation where choices can be displayed in a
					vertical list.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Displays an array or list of items (e.g., days, names).</li>
					<li>Supports single or multiple selection (by default single selection).</li>
					<li>Often combined with scroll panes when the list is long.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the JList example
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					The JFrame setup is the same pattern as previous components. Here we focus
					on how the array and JList are created and connected.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							String week[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
						</p>
						<p className="text-sm sm:text-base">
							Creates a string array containing all days of the week. This will be
							the data source for the list.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JList&lt;String&gt; l1 = new JList&lt;String&gt;(week);
						</p>
						<p className="text-sm sm:text-base">
							Creates a list component that displays each string from the
							<code>week</code> array as a separate item.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JLabel lb = new JLabel("Select The Day:");
							<br />
							add(lb);
							<br />
							add(l1);
						</p>
						<p className="text-sm sm:text-base">
							Creates a label that explains what the list is for, then adds the
							label and the JList to the frame so they appear side by side with
							<code>FlowLayout</code>.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Where JList is used
				</h2>
				<p className="text-slate-700">
					Lists are useful when you have a fixed set of options that are best shown
					stacked vertically. In more advanced GUIs, JList is often combined with
					models and scroll panes.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/components/jradiobutton"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: JRadioButton Basics</span>
				</Link>
				<Link
						href="/GUI/swing-awt/components/jtable"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: JTable Basics</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
