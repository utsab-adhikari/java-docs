"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JFrameBasicsPage() {

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
          <span className="font-medium text-slate-700">JFrame</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          JFrame: The Main Window
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          JFrame is the top-level container used for most Swing desktop
          applications. It provides the title bar, close/minimize buttons, and
          the area where all other components are placed.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example: JFrame using a separate GUI class (Method 2)
        </h2>
        <p className="text-slate-700">
          This example follows the same pattern we selected in the setup page:
          create a class that extends <code>JFrame</code> and configure the
          window in its constructor, while the
          <code>main</code> method simply creates an object.
        </p>
        <JavaCode
          CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JFrame"); // sets title of the frame

        setSize(400, 400); // sets size of the frame (width, height)
        setVisible(true); // makes the frame visible on screen
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // exit the program when window is closed
    }
}

public class JFrameDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
          filename="JFrameDemo.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Components/P00_JFrame.java" />
       <OutputImage src="/JFrame.png" />
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What is JFrame?
        </h2>
        <p className="text-slate-700">
          In Swing, <code>JFrame</code> is a top-level window with a title bar
          and close/minimize/maximize buttons. It extends{" "}
          <code>java.awt.Frame</code> and acts as the main container for your
          GUI. You typically:
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            Extend <code>JFrame</code> in your own class (like{" "}
            <code>MyFrame</code>).
          </li>
          <li>Configure the window inside the constructor.</li>
          <li>
            Add panels, buttons, labels, and other components to the frame.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
          Line-by-line: Important JFrame methods
        </h2>
        <p className="text-slate-700 text-sm sm:text-base">
          The following methods are used in almost every Swing program.
          Understand what they do before moving to more complex GUIs.
        </p>

        <div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
             setTitle("Components - JFrame");
            </p>
            <p className="text-sm sm:text-base">
              Sets the text shown in the title bar of the window. This is what
              users see at the top of the frame (e.g., on the taskbar and window
              caption).
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              setSize(400, 400);
            </p>
            <p className="text-sm sm:text-base">
              Sets the initial size of the frame in pixels: first argument is
              width, second is height. Here the window will be 400×400 pixels.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              setVisible(true);
            </p>
            <p className="text-sm sm:text-base">
              Makes the frame actually appear on the screen. If you forget this
              call, the program runs but no window is shown.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            </p>
            <p className="text-sm sm:text-base">
              Tells Swing what to do when the user clicks the close (✕) button.
              Using
              <code className="bg-slate-200 px-1 rounded">EXIT_ON_CLOSE</code>
              completely terminates the program when the frame is closed, which
              is ideal for simple examples.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Connecting back to our setup pattern
        </h2>
        <p className="text-slate-700">
          Notice that this example matches <strong>Method 2</strong> from the
          setup page: we keep the GUI code (JFrame configuration) inside
          <code>MyFrame</code>, and let <code>main</code> only create an object.
          We will continue using this style for other components and layouts.
        </p>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
	          href="/GUI/swing-awt/components/setup"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: Setup Methods</span>
        </Link>
        <Link
	          href="/GUI/swing-awt/components/jpanel"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
        >
          <span>Next: JPanel Basics</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
