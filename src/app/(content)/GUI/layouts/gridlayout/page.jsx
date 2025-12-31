"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function GridLayoutBasicsPage() {
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
						href="/GUI/layouts"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Layouts
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">GridLayout</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					GridLayout: Equal-Sized Cells
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					GridLayout divides the container into equal-sized rows and columns, placing
					one component in each cell.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: 3x3 Grid of Buttons
				</h2>
				<p className="text-slate-700">
					This example creates a 3x3 grid with 10-pixel gaps between cells and adds
					nine buttons.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Layouts - GridLayout");

        setLayout(new GridLayout(3, 3, 10, 10));

        /*
        Here GridLayout can be called as: 
            1) GridLayout(): General Grid;
            2)GridLayout(int row, int col): frame into row and columns
                    
                GrifLayouut(2, 2): 2 rows and 2 columns;


            3) GridLayout(int row, int col, int hgap, int vgap): 
                giving specific horizontal gap and Vertical gap between items of row and column
        */
       JButton b1 = new JButton("Button 01");
       JButton b2 = new JButton("Button 02");
       JButton b3 = new JButton("Button 03");
       JButton b4 = new JButton("Button 04");
       JButton b5 = new JButton("Button 05");
       JButton b6 = new JButton("Button 06");
       JButton b7 = new JButton("Button 07");
       JButton b8 = new JButton("Button 08");
       JButton b9 = new JButton("Button 09");

       add(b1);
       add(b2);
       add(b3);
       add(b4);
       add(b5);
       add(b6);
       add(b7);
       add(b8);
       add(b9);

        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class GridLayoutDemo {
    public static void main(String arr[]) {
        new MyFrame();
    }
}`}
					filename="GridLayoutDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				<OutputImage src="/GridLayout.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is GridLayout?
				</h2>
				<p className="text-slate-700">
					<code>GridLayout</code> arranges components in a table-like grid. All
					cells have the same size.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Specify rows and columns, optionally gaps between cells.</li>
					<li>Good for keypads, button panels, or uniform forms.</li>
					<li>Order of <code>add()</code> decides where each component goes.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the GridLayout code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Here we look at how the grid is defined and filled.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							setLayout(new GridLayout(3, 3, 10, 10));
						</p>
						<p className="text-sm sm:text-base">
							Creates a 3x3 grid with horizontal and vertical gaps of 10 pixels.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JButton b1 = new JButton("Button 01"); ...
							<br />add(b1); add(b2); ... add(b9);
						</p>
						<p className="text-sm sm:text-base">
							Creates nine buttons and adds them in order. GridLayout fills
							cells row by row.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use GridLayout
				</h2>
				<p className="text-slate-700">
					Use GridLayout when all components should have the same size and align in
					rows and columns, such as calculators or option grids.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/layouts/flowlayout"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Previous: FlowLayout Basics</span>
					</Link>
				<Link
						href="/GUI/layouts/gridbaglayout"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: GridBagLayout</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
