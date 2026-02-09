"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function GridPaneBasicsPage() {
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
						href="/GUI/javafx"
						className="transition hover:text-indigo-700 hover:underline"
					>
						JavaFX GUI
					</Link>
					<span className="mx-1">›</span>
					<Link
						href="/GUI/javafx/layouts"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Layouts
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">GridPane</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					GridPane: Flexible Grid Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					GridPane is a layout pane that arranges nodes in a flexible grid of rows and columns.
					It is the JavaFX equivalent of Swing's GridLayout and GridBagLayout, providing powerful
					control over node positioning and sizing within a grid structure.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Six buttons arranged in a 2x3 grid
				</h2>
				<p className="text-slate-700">
					This example demonstrates a GridPane with six buttons arranged in 2 columns and
					3 rows. Horizontal and vertical gaps of 10 pixels separate the buttons, and
					5-pixel padding is applied around the grid.
				</p>
				<JavaCode
					CODE={`import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.control.*;
import javafx.scene.layout.GridPane;
import javafx.geometry.Insets;

public class GridPaneDemo extends Application {
    public static void main(String[] arr) {
        launch(arr);
    }

    public void start(Stage primaryStage) {
        Button b1 = new Button("Press Me");
        Button b2 = new Button("Button 02");
        Button b3 = new Button("Button 03");
        Button b4 = new Button("Button 04");
        Button b5 = new Button("Button 05");
        Button b6 = new Button("Button 06");

        GridPane root = new GridPane();
        root.setPadding(new Insets(5));
        root.setHgap(10);
        root.setVgap(10);

        root.add(b1, 0, 0);
        root.add(b2, 1, 0);
        root.add(b3, 0, 1);
        root.add(b4, 1, 1);
        root.add(b5, 0, 2);
        root.add(b6, 1, 2);

        Scene s1 = new Scene(root, 400, 400);
        primaryStage.setTitle("JavaFX Layout - GridPane");
        primaryStage.setScene(s1);
        primaryStage.show();
    }
}`}
					filename="GridPaneDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/layouts/P05_GridPane.java" />
				<OutputImage src="/GridPane.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is GridPane?
				</h2>
				<p className="text-slate-700">
					<code>GridPane</code> is a built-in layout pane in JavaFX (from the
					<code>javafx.scene.layout</code> package) that organizes nodes in a flexible grid
					of rows and columns. Unlike GridLayout, GridPane allows nodes to span multiple rows
					or columns and provides precise control over sizing and alignment.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<strong>Dynamic Grid:</strong> Rows and columns are created automatically as nodes
						are added.
					</li>
					<li>
						<strong>Precise Positioning:</strong> Each node is placed at a specific column and
						row index.
					</li>
					<li>
						<strong>Spanning Cells:</strong> Nodes can span multiple rows or columns using
						<code>columnSpan</code> and <code>rowSpan</code> constraints.
					</li>
					<li>
						<strong>Gap Control:</strong> Separate horizontal and vertical gaps between grid
						cells.
					</li>
					<li>
						<strong>Flexible Sizing:</strong> Rows and columns grow or shrink based on content
						and priority settings.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the GridPane code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Let&apos;s examine the key steps for creating and configuring a GridPane.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							GridPane root = new GridPane();
						</p>
						<p className="text-sm sm:text-base">
							Creates a new GridPane layout. The grid is initially empty; rows and columns
							are created dynamically as nodes are added.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setPadding(new Insets(5)); root.setHgap(10); root.setVgap(10);
						</p>
						<p className="text-sm sm:text-base">
							Sets 5-pixel padding around all edges, 10-pixel horizontal gap between columns,
							and 10-pixel vertical gap between rows. These gaps separate grid cells visually.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.add(b1, 0, 0); root.add(b2, 1, 0);
						</p>
						<p className="text-sm sm:text-base">
							Adds buttons to the grid at specific positions. The first parameter is the node,
							the second is the column index, and the third is the row index. This places b1
							at column 0, row 0 and b2 at column 1, row 0 (first row).
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.add(b3, 0, 1); root.add(b4, 1, 1); ... root.add(b6, 1, 2);
						</p>
						<p className="text-sm sm:text-base">
							Continues adding buttons to subsequent rows. By index (0,1), (1,1) are in row 2,
							and (0,2), (1,2) are in row 3. This creates a 2-column, 3-row grid layout.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							Scene s1 = new Scene(root, 400, 400);
						</p>
						<p className="text-sm sm:text-base">
							Creates a scene with the GridPane as the root. When the window is resized,
							GridPane automatically adjusts row and column sizes based on content.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Key Methods
				</h2>
				<p className="text-slate-700">
					The GridPane class provides essential methods for configuration and node placement:
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<code>add(Node node, int columnIndex, int rowIndex)</code>: Places a node at a
						specific grid position.
					</li>
					<li>
						<code>add(Node node, int columnIndex, int rowIndex, int columnSpan, int rowSpan)</code>:
						Places a node that spans multiple rows or columns.
					</li>
					<li>
						<code>setHgap(Double value)</code>: Sets horizontal spacing between columns.
					</li>
					<li>
						<code>setVgap(Double value)</code>: Sets vertical spacing between rows.
					</li>
					<li>
						<code>setPadding(Insets insets)</code>: Sets padding around the grid edges.
					</li>
					<li>
						<code>setAlignment(Pos alignment)</code>: Sets alignment of all grid contents.
					</li>
				</ul>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use GridPane
				</h2>
				<p className="text-slate-700">
					Use GridPane when you need to arrange multiple controls in a structured grid pattern
					with precise positioning. It is ideal for forms, dashboards, game boards, and complex
					layouts where items must align in rows and columns. GridPane is more powerful than
					HBox/VBox for multi-dimensional layouts and provides better control than FlowPane for
					organized arrangements.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/javafx/layouts/borderpane"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: BorderPane</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>Back to Layouts Overview</span>
				</Link>
			</div>
		</article>
	);
}
