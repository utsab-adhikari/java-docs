import Link from "next/link";
import JavaCode from "@/components/JavaCode";

export default function JavaFXButtonPage() {
  const code = `import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class ButtonDemo extends Application {
    @Override
    public void start(Stage stage) {
        Label status = new Label("Click the button");
        Button button = new Button("Click Me");

        button.setOnAction(e -> status.setText("Button clicked!"));

        VBox root = new VBox(10, status, button);
        Scene scene = new Scene(root, 350, 200);

        stage.setTitle("JavaFX Button Demo");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}`;

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
          <span className="font-medium text-slate-700">Button</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          JavaFX Button Control
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          A Button is a clickable control that generates an ActionEvent when
          the user presses it. It is similar to JButton in Swing.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Button with ActionEvent example
        </h2>
        <p className="text-slate-700">
          This example uses a Label to show a status message and updates it
          when the button is clicked.
        </p>
        <JavaCode code={code} />
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <code>Button button = new Button("Click Me")</code> creates a
            button with a caption.
          </li>
          <li>
            <code>button.setOnAction(e -&gt; ...)</code> registers an event
            handler that runs when the button is clicked.
          </li>
          <li>
            <code>VBox root = new VBox(10, status, button)</code> places the
            Label and Button vertically with spacing.
          </li>
          <li>
            The rest of the code is similar to any other JavaFX program:
            create a Scene, set it on the Stage, and show it.
          </li>
        </ul>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/GUI/javafx/components/label"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: Label</span>
        </Link>
        <Link
          href="/GUI/javafx/components/textfield"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
        >
          <span>Next: TextField</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
