"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function BorderPaneBasicsPage() {
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
					<span className="font-medium text-slate-700">BorderPane</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					BorderPane: Five-Region Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					BorderPane is a layout pane that divides its space into five distinct regions:
					top, bottom, left, right, and center. It is the JavaFX equivalent of Swing's
					BorderLayout, providing a flexible way to organize UI components into structured areas.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Five buttons in different BorderPane regions
				</h2>
				<p className="text-slate-700">
					This example demonstrates a BorderPane with buttons placed in all five regions:
					top, bottom, left, right, and center. The center button takes up remaining space
					after edge regions are sized.
				</p>
				<JavaCode
					CODE={`import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.control.*;
import javafx.scene.layout.BorderPane;
import javafx.geometry.Insets;

public class BorderPaneDemo extends Application {
    public static void main(String[] arr) {
        launch(arr);
    }

    public void start(Stage primaryStage) {
        Button b1 = new Button("Press Me");
        Button b2 = new Button("Button 02");
        Button b3 = new Button("Button 03");
        Button b4 = new Button("Button 04");
        Button b5 = new Button("Button 05");

        BorderPane root = new BorderPane();
        root.setPadding(new Insets(5));

        root.setTop(b1);
        root.setBottom(b2);
        root.setRight(b3);
        root.setLeft(b4);
        root.setCenter(b5);

        Scene s1 = new Scene(root, 400, 400);
        primaryStage.setTitle("JavaFX Layout - BorderPane");
        primaryStage.setScene(s1);
        primaryStage.show();
    }
}`}
					filename="BorderPaneDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/layouts/P04_BorderPane.java" />
				<OutputImage src="/BorderPane.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is BorderPane?
				</h2>
				<p className="text-slate-700">
					<code>BorderPane</code> is a built-in layout pane in JavaFX (from the
					<code>javafx.scene.layout</code> package) that organizes nodes into five distinct
					regions. Each region can contain a single node, and the center region expands to
					fill remaining space.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<strong>Five Regions:</strong> Top, Bottom, Left, Right, and Center regions.
					</li>
					<li>
						<strong>Flexible Center:</strong> The center region expands to fill all available
						space not occupied by edge regions.
					</li>
					<li>
						<strong>Single Node Per Region:</strong> Each region can contain only one node;
						to add multiple nodes, wrap them in a container like HBox or VBox.
					</li>
					<li>
						<strong>Automatic Sizing:</strong> Edge regions are sized based on their
						preferred size; the center expands to fill remaining space.
					</li>
					<li>
						<strong>Padding Support:</strong> Adds consistent spacing around all regions.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the BorderPane code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Let&apos;s examine the key steps for creating and configuring a BorderPane.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							BorderPane root = new BorderPane();
						</p>
						<p className="text-sm sm:text-base">
							Creates a new BorderPane layout. Initially, all five regions are empty.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setPadding(new Insets(5));
						</p>
						<p className="text-sm sm:text-base">
							Sets padding of 5 pixels on all sides of the BorderPane. This creates space
							between the BorderPane borders and its regions.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setTop(b1); root.setBottom(b2); root.setLeft(b4);
						</p>
						<p className="text-sm sm:text-base">
							Places buttons in the top, bottom, and left regions. The top and bottom regions
							expand horizontally, while the left region expands vertically.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setRight(b3); root.setCenter(b5);
						</p>
						<p className="text-sm sm:text-base">
							Places a button in the right region and another in the center. The center
							button expands to fill all remaining space after edge regions are sized.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							Scene s1 = new Scene(root, 400, 400);
						</p>
						<p className="text-sm sm:text-base">
							Creates a scene with the BorderPane as the root and sets the scene to the stage.
							When the window is resized, the BorderPane dynamically adjusts all regions.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Key Methods
				</h2>
				<p className="text-slate-700">
					The BorderPane class provides setter methods for each region:
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<code>setTop(Node node)</code>: Places a node in the top region.
					</li>
					<li>
						<code>setBottom(Node node)</code>: Places a node in the bottom region.
					</li>
					<li>
						<code>setLeft(Node node)</code>: Places a node in the left region.
					</li>
					<li>
						<code>setRight(Node node)</code>: Places a node in the right region.
					</li>
					<li>
						<code>setCenter(Node node)</code>: Places a node in the center region.
					</li>
					<li>
						<code>setPadding(Insets insets)</code>: Sets uniform padding around all regions.
					</li>
				</ul>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use BorderPane
				</h2>
				<p className="text-slate-700">
					Use BorderPane when you need to create classic window layouts with distinct regions
					for toolbars, sidebars, status bars, and main content. It is ideal for application
					frames where a single central area should expand to fill available space. For simpler
					linear layouts, use HBox or VBox; for complex grid-based layouts, use GridPane.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/javafx/layouts/vbox"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: VBox</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>Back to Layouts Overview</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts/gridpane"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: GridPane</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
