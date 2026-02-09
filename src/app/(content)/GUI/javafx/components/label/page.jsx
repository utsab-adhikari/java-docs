"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JavaFXLabelPage() {
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
              href="/GUI/javafx/components"
              className="transition hover:text-indigo-700 hover:underline"
            >
              Controls
            </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">Label</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          JavaFX Label Control
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          In JavaFX, a <strong>Label</strong> is a non-editable text control used
          to display information on the screen. It is usually placed next to
          input controls (like TextField) to describe what the user should enter.
        </p>
      </header>

        <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example: Labels in a GridPane
        </h2>
        <p className="text-sm text-slate-600">
          The following program creates two labels (Email and Password) and
          places them in a <code className="text-indigo-700">GridPane</code>.
        </p>
        <JavaCode
          filename="LabelDemo.java"
          CODE={`import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

public class LabelDemo extends Application {
    @Override
    public void start(Stage primaryStage) {
        // 1. Create Label instances [6]
        Label emailLabel = new Label("Email:");
        Label passLabel = new Label("Password:");

        // 2. Arrange in a layout [6]
        GridPane root = new GridPane();
        root.add(emailLabel, 0, 0); // Adding to first column, first row
        root.add(passLabel, 0, 1);  // Adding to first column, second row

        Scene scene = new Scene(root, 300, 200);
        primaryStage.setTitle("JavaFX Label Example");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}`}
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java" />
        <OutputImage src="/JavaFX_Label.png" />
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What is Label?
        </h2>
        <p className="text-slate-700">
          A <code>Label</code> in JavaFX is a simple, non-editable text node.
          It is typically used to describe input fields, show short messages,
          or display static information in a form.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            <strong>Package:</strong> <code>javafx.scene.control.Label</code>.
          </li>
          <li>
            <strong>Non-interactive:</strong> Labels do not fire action events;
            they simply render read-only text or an icon.
          </li>
          <li>
            <strong>Focus:</strong> They are not focusable with the keyboard (Tab
            moves between interactive controls such as TextField or Button).
          </li>
          <li>
            <strong>Styling:</strong> You can style labels with CSS to change font,
            color, and other visual properties.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
          Line-by-line: Understanding the Label example
        </h2>
        <p className="text-slate-700 text-sm sm:text-base">
          Here we focus on how the labels are created and placed in the
          GridPane. The overall JavaFX application structure (Application,
          Stage, Scene) is the same as any other JavaFX program.
        </p>

        <div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              Label emailLabel = new Label("Email:");
              <br />
              Label passLabel = new Label("Password:");
            </p>
            <p className="text-sm sm:text-base">
              Creates two Label objects with initial text. These will be used
              as captions next to future input controls (like TextField or
              PasswordField).
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              GridPane root = new GridPane();
            </p>
            <p className="text-sm sm:text-base">
              Creates a GridPane layout container. It arranges children in a
              grid of rows and columns, similar to a table.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              root.add(emailLabel, 0, 0);
              <br />
              root.add(passLabel, 0, 1);
            </p>
            <p className="text-sm sm:text-base">
              Adds the labels to column 0 of row 0 and row 1. This places
              them in the first column of the grid one below the other.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
				<Link
						href="/GUI/javafx/components"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Back to JavaFX Controls</span>
					</Link>
				<Link
						href="/GUI/javafx/components/button"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: Button Control</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
