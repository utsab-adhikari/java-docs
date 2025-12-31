"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JTextFieldBasicsPage() {

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
						href="/GUI"
						className="transition hover:text-indigo-700 hover:underline"
					>
						GUI
					</Link>
					<span className="mx-1">›</span>
					<Link
						href="/GUI/components"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Components
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">JTextField</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JTextField: Single-line Text Input
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					JTextField is used to accept a single line of text input from the user,
					such as a name or a short value. It is usually paired with a label.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: JLabel with a JTextField
				</h2>
				<p className="text-slate-700">
					This example creates a label and a single-line text field. The label tells
					the user what to type, and the text field is where they enter the text.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Componets - JTextField");

        JTextField tf1 = new JTextField(10);
        // Here in the TextField 10 defines approx 10 character/columns can display
        JLabel l1 = new JLabel("Enter Text:");

        add(l1); // Label first
        add(tf1);

        setLayout(new FlowLayout());
        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JTextFieldDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
					filename="JTextFieldDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				 <OutputImage src="/JTextField.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is JTextField?
				</h2>
				<p className="text-slate-700">
					A <code>JTextField</code> is a component for single-line text input. It
					is typically used for short values like names, IDs, or numbers. The user
					can type and edit text inside it.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Displays one line of editable text.</li>
					<li>Often placed next to a descriptive label.</li>
					<li>Text can be read in code using methods like <code>getText()</code>.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the JTextField example
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					We again use the same JFrame pattern. Here we focus on the text field
					creation and its relationship with the label.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JTextField tf1 = new JTextField(10);
						</p>
						<p className="text-sm sm:text-base">
							Creates a text field that can display roughly 10 characters at a time.
							The number is the column count, not a strict character limit.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JLabel l1 = new JLabel("Enter Text:");
						</p>
						<p className="text-sm sm:text-base">
							Creates a label that tells the user what to type into the
							corresponding text field.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							add(l1);
							<br />
							add(tf1);
						</p>
						<p className="text-sm sm:text-base">
							Adds the label first and then the text field to the frame. With
							<code>FlowLayout</code>, they appear next to each other in a row.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							setLayout(new FlowLayout());
						</p>
						<p className="text-sm sm:text-base">
							Uses <code>FlowLayout</code> so components are arranged from left to
							right like words in a sentence.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Where JTextField is used
				</h2>
				<p className="text-slate-700">
					Single-line text fields are used everywhere: login forms, search boxes,
					and small input dialogs. In later sections we will read values from
					<code>JTextField</code> and validate user input.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/components/jbutton"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: JButton Basics</span>
				</Link>
				<Link
					href="/GUI/components/jtextarea"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: JTextArea Basics</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
