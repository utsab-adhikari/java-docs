"use client";
import JavaCode from "@/components/JavaCode";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ConstructorsPage() {
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
          <span className="font-medium text-slate-700">1.5 Constructors</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          1.5 Java Constructors
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How Java uses special methods called constructors to initialize
          objects, including default constructors, parameterized constructors,
          and constructor overloading.
        </p>
      </header>

      {/* What is special about constructors */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What makes a constructor special?
        </h2>
        <p className="text-slate-700">
          A constructor is a <strong>special method</strong> that runs
          automatically when you create an object. Its main job is to initialize
          the fields of that new object.
        </p>
        <ul className="ml-6 list-disc space-y-2 text-slate-700">
          <li>
            A constructor has <strong>no return type</strong> (not even
            <code className="mx-1 font-mono">void</code>).
          </li>
          <li>
            Its name must be <strong>exactly the same</strong> as the class
            name.
          </li>
          <li>
            If you do not write any constructor, Java provides a
            <strong className="mx-1">default constructor</strong> that sets
            reference fields to <code>null</code> and numeric fields to
            <code className="mx-1">0</code>.
          </li>
        </ul>
      </section>

      {/* Types of constructors */}
      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Types of constructors in Java
        </h2>

        {/* Default / no-arg constructor */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">
            1. Default (no-argument) constructor
          </h3>
          <p className="text-slate-700">
            A default constructor has no parameters. It is often used to assign
            common or fallback values to every new object.
          </p>
          <JavaCode
            CODE={`class Car {
    private String model;
    private String color;

    // Constructor
    Car() {
        model = "BMW";
        color = "BLUE";
    }

    public void showInfo() {
        System.out.println("Model: " + model + " Color: " + color);
    }
}`}
            filename={"defaultConstructor.java"}
          />
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Reference &amp; full code</span>
            <Link
              href="https://github.com/utsab-adhikari/java/blob/main/Constructors/P01_DefaultConstructor.java"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <FaGithub className="h-3.5 w-3.5" />
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Parameterized constructor */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">
            2. Parameterized constructor
          </h3>
          <p className="text-slate-700">
            A parameterized constructor takes arguments so that you can pass
            different values when creating each object.
          </p>
          <JavaCode
            CODE={`class Car {
    private String model;
    private String color;

    // Parameterized constructor
    Car(String m, String c) {
        model = m;
        color = c;
    }
}

// Usage
Car car1 = new Car("Creta", "Red");`}
            filename={"parameterizedConstructor.java"}
          />
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Reference &amp; full code</span>
            <Link
              href="https://github.com/utsab-adhikari/java/blob/main/Constructors/P02_ParameterizedConstructor.java"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <FaGithub className="h-3.5 w-3.5" />
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Constructor overloading */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">
            3. Constructor overloading
          </h3>
          <p className="text-slate-700">
            Just like methods, constructors can be <strong>overloaded</strong>.
            You can define multiple constructors with different parameter lists,
            and Java will choose the right one based on how you create the
            object.
          </p>
          <JavaCode
            CODE={`class Student {
    String name;
    int roll;

    Student() { /* Default */ }

    Student(String n, int r) { /* Two parameters */ }

    Student(String n, int r, String faculty) { /* Three parameters */ }
}`}
            filename={"constructorOverloading.java"}
          />
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Reference &amp; full code</span>
            <Link
              href="https://github.com/utsab-adhikari/java/blob/main/Constructors/P03_ConstructorOverloading.java"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <FaGithub className="h-3.5 w-3.5" />
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Combined example */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          All-in-one constructor example
        </h2>
        <p className="text-slate-700">
          The following program combines default, parameterized, and overloaded
          constructors in a single <code>car</code> class and demonstrates how
          each one is called from <code>main</code>.
        </p>
        <JavaCode
          CODE={`class car {
    private String model;
    private String color;
    private int model_no;

    car() {
        model = "BMW";
        color = "Red";
    }

    car(String m, String c) {
        model = m;
        color = c;
    }

    car(String m, String c, int mn) {
        model = m;
        color = c;
        model_no = mn;
    }

    public void showInfo() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Model No: " + model_no);
    }
}

public class Constructor {
    public static void main(String[] args) {

        car car1 = new car();
        // Default constructor called
        car car2 = new car("Lambo", "Black");
        // Parameterized constructor called
        car car3 = new car("Supra", "Black", 10);

        car1.showInfo();
        car2.showInfo();
        car3.showInfo();
    }
}`}
          filename={"Constructor.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Constructors/P03_ConstructorOverloading.java"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Output
        </h2>
        <p className="text-slate-700">
          When you run the above program, the console will display something
          like this:
        </p>
        <pre className="overflow-x-auto border border-slate-800 bg-[#020617] px-4 py-3 text-xs text-slate-100">
          <code>{`Model: BMW
Color: Red
Model No: 0
Model: Lambo
Color: Black
Model No: 0
Model: Supra
Color: Black
Model No: 10
`}</code>
        </pre>
      </section>

      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-01/class-object"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: 1.4 Class &amp; Object</span>
        </Link>
        <Link
          href="/chapter-01/exception-handling"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: Exception Handling</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
