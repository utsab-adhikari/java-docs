"use client";

import { useState } from "react";
import Link from "next/link";

const SIMPLE_CLASS_CODE = `class Student {
    String name;
    int roll;
    String faculty;
}

class StudentDemo {
    public static void main(String[] args) {
        Student ob = new Student(); // Creating object
        ob.name = "Nishanta";
        ob.roll = 10;
        ob.faculty = "BE Computer";

        System.out.println("Name = " + ob.name);
    }
}`;

const ENCAPSULATION_CODE = `class Student1 {
    private String name; // Restricted access
    private int roll;

    public void setInfo() {
        name = "Nishanta";
        roll = 11;
    }

    public void showInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll: " + roll);
    }
}

class StudentDemo1 {
    public static void main(String[] args) {
        Student1 ob = new Student1();
        ob.setInfo();
        ob.showInfo();
    }
}`;

export default function ClassObjectPage() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (block) => {
    try {
      const text = block === "simple" ? SIMPLE_CLASS_CODE : ENCAPSULATION_CODE;
      await navigator.clipboard.writeText(text);
      setCopied(block);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore copy errors
    }
  };

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
            href="/chapter-01"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Chapter 01
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">
            1.4 Class &amp; Object
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          1.4 Class and Object
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How Java models real-world things using blueprints (classes) and
          concrete instances (objects), and how encapsulation keeps data safe.
        </p>
      </header>

      {/* Concepts: class vs object */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What are Classes and Objects?
        </h2>
        <p className="text-slate-700">
          Java is a fully object-oriented language. Almost everything you work
          with is either a <strong>class</strong> (a definition) or an
          <strong> object</strong> (a usable thing created from that
          definition).
        </p>
        <ul className="ml-6 list-disc space-y-2 text-slate-700">
          <li>
            <span className="font-semibold">Class:</span> a blueprint or
            template that describes what data (fields) and behavior (methods)
            its objects will have.
          </li>
          <li>
            <span className="font-semibold">Object:</span> a specific
            instance of a class that lives in memory and can store its own
            values.
          </li>
          <li>
            Real-world view: <code>Student</code> is a class, while each
            enrolled student (Ram, Sita, etc.) is an object.
          </li>
        </ul>
      </section>

      {/* Simple class and object example */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example 1: Simple Class and Object
        </h2>
        <p className="text-slate-700">
          To create an object, you write the class name followed by a variable
          name and use the <code className="font-mono text-indigo-700">new</code>
          {" "}
          keyword. Members are accessed using the <strong>dot (.) operator</strong>.
        </p>
        <div className="border border-slate-800 bg-slate-900 text-xs text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#020617] px-4 py-1.5 text-[0.7rem] tracking-[0.18em] text-slate-400">
            <span>Student.java (Class &amp; Object)</span>
            <button
              type="button"
              onClick={() => handleCopy("simple")}
              className="text-[0.7rem] font-medium text-slate-300 hover:text-white"
            >
              {copied === "simple" ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto bg-transparent px-4 py-3">
            <code>{SIMPLE_CLASS_CODE}</code>
          </pre>
        </div>
        <ul className="ml-6 list-disc space-y-2 text-slate-700">
          <li>
            <code>class Student</code>: defines a new class with three fields
            (<code>name</code>, <code>roll</code>, <code>faculty</code>).
          </li>
          <li>
            <code>Student ob = new Student();</code>: creates a new object and
            stores its reference in <code>ob</code>.
          </li>
          <li>
            <code>ob.name = "Nishanta";</code>: assigns values to the
            object&apos;s fields using the dot operator.
          </li>
          <li>
            <code>System.out.println("Name = " + ob.name);</code>: reads data
            back from the object and prints it.
          </li>
        </ul>
      </section>

      {/* Encapsulation and data hiding */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example 2: Data Hiding and Member Access
        </h2>
        <p className="text-slate-700">
          Directly exposing fields can be risky. <strong>Encapsulation</strong>
          {" "}
          means keeping fields private and providing public methods to change
          or read them.
        </p>
        <div className="border border-slate-800 bg-slate-900 text-xs text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#020617] px-4 py-1.5 text-[0.7rem] tracking-[0.18em] text-slate-400">
            <span>Student1.java (Encapsulation)</span>
            <button
              type="button"
              onClick={() => handleCopy("encapsulation")}
              className="text-[0.7rem] font-medium text-slate-300 hover:text-white"
            >
              {copied === "encapsulation" ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto bg-transparent px-4 py-3">
            <code>{ENCAPSULATION_CODE}</code>
          </pre>
        </div>
        <ul className="ml-6 list-disc space-y-2 text-slate-700">
          <li>
            Fields <code>name</code> and <code>roll</code> are declared as
            <code>private</code>, so they cannot be accessed directly from
            outside the class.
          </li>
          <li>
            <code>setInfo()</code> initializes the fields; it acts like a
            controlled writer.
          </li>
          <li>
            <code>showInfo()</code> prints the values; it acts like a safe
            reader.
          </li>
          <li>
            The main method only works with public methods of
            {" "}
            <code>Student1</code>, not with its internal data directly.
          </li>
        </ul>
      </section>

      {/* Key concept note */}
      <section className="border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Key concept:</strong> when you send a message to an object
        (call one of its methods), you are asking it to perform an action using
        its own data, as defined by its class.
      </section>

      {/* Sample output */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Sample Output
        </h2>
        <p className="text-slate-700">
          When you run the above programs, the console will display something
          like this:
        </p>
        <pre className="overflow-x-auto border border-slate-800 bg-[#020617] px-4 py-3 text-xs text-slate-100">
          <code>{`Name = Nishanta

Name: Nishanta
Roll: 11`}</code>
        </pre>
      </section>

      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-01/class-paths"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: 1.3 Class Paths</span>
        </Link>
        <Link
          href="/chapter-01/constructor"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: 1.5 Constructor</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}