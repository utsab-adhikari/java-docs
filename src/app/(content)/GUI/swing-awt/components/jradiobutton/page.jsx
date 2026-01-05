"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JRadioButtonBasicsPage() {
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
          <span className="font-medium text-slate-700">JRadioButton</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          JRadioButton: Single-choice Options
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          JRadioButton is used when the user must choose exactly one option from
          a small set, such as gender or category. A ButtonGroup ensures that
          only one button is selected at a time.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example: Gender selection using JRadioButton
        </h2>
        <p className="text-slate-700">
          This example creates three radio buttons (Male, Female, Others) and
          groups them using <code>ButtonGroup</code> so that only one can be
          selected at a time.
        </p>
        <JavaCode
          CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JRadioButton");

        JRadioButton b1 = new JRadioButton("Male");
        JRadioButton b2 = new JRadioButton("Female");
        JRadioButton b3 = new JRadioButton("Others");

        ButtonGroup bg = new ButtonGroup();

        bg.add(b1);
        bg.add(b2);
        bg.add(b3);

        JLabel gender = new JLabel("Select Your Gender: ");

        add(gender);

        add(b1);
        add(b2);
        add(b3);

        setLayout(new FlowLayout());
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JRadioButtonDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
          filename="JRadioButtonDemo.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java" />
<OutputImage src="/JRadioButton.png" />
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What is JRadioButton?
        </h2>
        <p className="text-slate-700">
          A <code>JRadioButton</code> represents one choice in a set of mutually
          exclusive options. When placed in a <code>ButtonGroup</code>,
          selecting one radio button automatically deselects the others.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            Used for Yes/No, Male/Female, and similar single-choice inputs.
          </li>
          <li>
            Must be grouped with <code>ButtonGroup</code> for mutual exclusion.
          </li>
          <li>
            Still uses layouts (like <code>FlowLayout</code>) to control
            placement.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
          Line-by-line: Understanding the JRadioButton example
        </h2>
        <p className="text-slate-700 text-sm sm:text-base">
          We reuse the same JFrame pattern. Here we highlight how radio buttons
          are created, grouped, and added to the interface.
        </p>

        <div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              JRadioButton b1 = new JRadioButton("Male");
              <br />
              JRadioButton b2 = new JRadioButton("Female");
              <br />
              JRadioButton b3 = new JRadioButton("Others");
            </p>
            <p className="text-sm sm:text-base">
              Creates three radio button components, each with a different
              label.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              ButtonGroup bg = new ButtonGroup();
              <br />
              bg.add(b1);
              <br />
              bg.add(b2);
              <br />
              bg.add(b3);
            </p>
            <p className="text-sm sm:text-base">
              Puts all radio buttons into the same group so that selecting one
              automatically deselects the others. This enforces single-choice
              behavior.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              JLabel gender = new JLabel("Select Your Gender: ");
              <br />
              add(gender);
            </p>
            <p className="text-sm sm:text-base">
              Adds a label that explains what the radio buttons represent.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              add(b1);
              <br />
              add(b2);
              <br />
              add(b3);
            </p>
            <p className="text-sm sm:text-base">
              Adds the grouped radio buttons to the frame so the user can see
              and select them. <code>FlowLayout</code> arranges them in a row.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Radio buttons in real forms
        </h2>
        <p className="text-slate-700">
          Radio buttons are standard for surveys and forms where you must choose
          one option. Later, we will read which button is selected and react to
          the user&apos;s choice.
        </p>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
            href="/GUI/swing-awt/components/jtextarea"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: JTextArea Basics</span>
        </Link>
        <Link
            href="/GUI/swing-awt/components/jlist"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
        >
          <span>Next: JList Basics</span>
          <span className="text-lg">→</span>
        </Link>
      </div>

    </article>
  );
}
