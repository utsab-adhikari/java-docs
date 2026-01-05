"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JTextAreaBasicsPage() {

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
					<span className="font-medium text-slate-700">JTextArea</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JTextArea: Multi-line Text Input
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					JTextArea allows the user to enter multiple lines of text, such as
					comments or descriptions. Its size is usually specified in rows and
					columns.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: JLabel with a JTextArea
				</h2>
				<p className="text-slate-700">
					This example uses a label and a multi-line text area with 3 rows and 10
					columns, laid out with <code>FlowLayout</code>.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JTextArea");

        JTextArea ta1 = new JTextArea(3, 10);

        // height 3 - row, width 10 - cols textarea;

        JLabel l1 = new JLabel("Enter your Text:");

        add(l1);
        add(ta1);

        setLayout(new FlowLayout());
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JTextAreaDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
					filename="JTextAreaDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
            <OutputImage src="/JTextArea.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is JTextArea?
				</h2>
				<p className="text-slate-700">
					A <code>JTextArea</code> is used when you need a box where the user can
					enter or view multiple lines of text. It does not have scrollbars by
					default, but can be wrapped in a <code>JScrollPane</code>.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Good for comments, descriptions, or logs.</li>
					<li>Supports multiple rows and columns (visible area).</li>
					<li>Text can also be retrieved with <code>getText()</code>.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the JTextArea example
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					The JFrame pattern is the same. We focus on the multi-line nature of the
					text area and the meaning of rows and columns.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JTextArea ta1 = new JTextArea(3, 10);
						</p>
						<p className="text-sm sm:text-base">
							Creates a text area with 3 rows and 10 columns. Rows control the
							visible height; columns control the approximate visible width.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JLabel l1 = new JLabel("Enter your Text:");
						</p>
						<p className="text-sm sm:text-base">
							Label instructs the user about what to type into the text area.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							add(l1);
							<br />
							add(ta1);
						</p>
						<p className="text-sm sm:text-base">
							Adds the label and then the text area to the frame. With
							<code>FlowLayout</code>, they appear next to each other or wrap as
							space runs out.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							setLayout(new FlowLayout());
						</p>
						<p className="text-sm sm:text-base">
							Again uses <code>FlowLayout</code> for a simple arrangement of
							components.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Where JTextArea is used
				</h2>
				<p className="text-slate-700">
					You will use <code>JTextArea</code> for larger free-form inputs, such as
					feedback forms or log viewers. Combined with scroll panes, it becomes a
					powerful component for showing lots of text.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/components/jtextfield"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: JTextField Basics</span>
				</Link>
				<Link
						href="/GUI/swing-awt/components/jradiobutton"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: JRadioButton Basics</span>
					<span className="text-lg">→</span>
				</Link>
			</div>

		</article>
	);
}
