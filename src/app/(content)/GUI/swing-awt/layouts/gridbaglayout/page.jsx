"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function GridBagLayoutBasicsPage() {
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
							href="/GUI/swing-awt/layouts"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Layouts
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">GridBagLayout</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					GridBagLayout: Flexible Form Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					GridBagLayout arranges components in a flexible grid. Each component can
					occupy different cells, span rows/columns, and have its own constraints.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Simple form using GridBagLayout
				</h2>
				<p className="text-slate-700">
					This example places a label, text field, and two buttons in a grid-like
					structure using <code>GridBagConstraints</code> to specify positions.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {

    MyFrame() {
        setTitle("Layouts - GridBagLayout");

        /*
         * GridBagLayout:
         * It arranges components in a grid of rows and columns,
         * but unlike GridLayout, each component can:
         * - Span multiple rows or columns
         * - Have different sizes
         * - Be aligned differently
         */
        GridBagLayout newLayout = new GridBagLayout();

        /*
         * GridBagConstraints is used to control how each component
         * is placed inside the GridBagLayout.
         * We reuse the same object and just change its values
         * before adding each component.
         */
        GridBagConstraints gbc = new GridBagConstraints();

        // Component 1: Label
        JLabel name = new JLabel("Enter Your Name:");
        gbc.gridx = 0;
        gbc.gridy = 0;
        newLayout.setConstraints(name, gbc);
        add(name);
        /*
         * gbc.gridx -> column number (horizontal position)
         * gbc.gridy -> row number (vertical position)
         * 
         * (0,0) means:
         * - First column
         * - First row
         * Top-left corner of the layout grid
         * 
         * NOTE:
         * GridBagLayout uses a virtual grid.
         * If components do not fill the entire frame,
         * they may appear centered by default.
         */

        // Component 2: Text Field
        JTextField nameField = new JTextField(10);
        gbc.gridx = 1;
        gbc.gridy = 0;
        newLayout.setConstraints(nameField, gbc);
        add(nameField);

        /*
         * Place the text field in:
         * - Column 1 (right of the label)
         * - Same row (row 0)
         */

        // Component 3: Submit Button
        JButton submit = new JButton("Submit");
        gbc.gridx = 0;
        gbc.gridy = 1;
        newLayout.setConstraints(submit, gbc);
        add(submit);
        // postion: row: 1, col: 0


        // Component 4: Cancel Button
        JButton cancel = new JButton("Cancel");
        gbc.gridx = 1;
        gbc.gridy = 1;
        newLayout.setConstraints(cancel, gbc);
        add(cancel);
        // postion: row: 1, col: 1


        setLayout(newLayout);

        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class GridBagLayoutDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
					filename="GridBagLayoutDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				<OutputImage src="/GridBagLayout.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is GridBagLayout?
				</h2>
				<p className="text-slate-700">
					<code>GridBagLayout</code> is a powerful, flexible layout manager that
					uses a virtual grid and constraints for each component.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Components can have different sizes and span multiple cells.</li>
					<li>Positions are controlled using <code>GridBagConstraints</code>.</li>
					<li>Commonly used for forms with labels and input fields.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the GridBagLayout code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Here we highlight how constraints are set for each component.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							GridBagLayout newLayout = new GridBagLayout();
							<br />GridBagConstraints gbc = new GridBagConstraints();
						</p>
						<p className="text-sm sm:text-base">
							Creates the layout manager and a constraints object that will be
							reused for each component.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							gbc.gridx = 0; gbc.gridy = 0; newLayout.setConstraints(name, gbc);
							<br />add(name);
						</p>
						<p className="text-sm sm:text-base">
							Places the label at column 0, row 0 (top-left cell of the virtual
							grid).
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							gbc.gridx = 1; gbc.gridy = 0; newLayout.setConstraints(nameField, gbc);
							<br />add(nameField);
						</p>
						<p className="text-sm sm:text-base">
							Places the text field to the right of the label, in column 1 of row
							0.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							gbc.gridx = 0; gbc.gridy = 1; ... Submit
							<br />gbc.gridx = 1; gbc.gridy = 1; ... Cancel
						</p>
						<p className="text-sm sm:text-base">
							Places the Submit button at row 1, column 0 and the Cancel button at
							row 1, column 1, forming a second row of controls.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use GridBagLayout
				</h2>
				<p className="text-slate-700">
					Use GridBagLayout when you need a flexible form or complex dialog where
					components have different sizes and positions but should still align
					cleanly.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/layouts/gridlayout"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Previous: GridLayout Basics</span>
					</Link>
				<Link
							href="/GUI/swing-awt/layouts/borderlayout"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: BorderLayout</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
