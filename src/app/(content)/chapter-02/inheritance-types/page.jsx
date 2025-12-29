import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import Output from "@/components/Output";
import Link from "next/link";

export default function InheritanceTypesPage() {
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
            href="/chapter-02"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Chapter 02
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">
            2.3 Types of Inheritance
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          2.3 Types of Inheritance
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How Java models inheritance between classes, which forms are supported
          by classes, and how interfaces provide multiple inheritance of type.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Overview
        </h2>
        <p className="text-slate-700">
          Inheritance is a fundamental{" "}
          <strong>object-oriented programming (OOP)</strong> concept that allows
          a class to acquire properties and behaviors from another class. Java
          supports several inheritance models, each serving different design
          needs:
        </p>
        <ul className="list-disc pl-3 text-slate-700 space-y-1">
          <li>
            <strong>Single Inheritance</strong> - One child class inherits from
            one parent class
          </li>
          <li>
            <strong>Multilevel Inheritance</strong> - Chain of inheritance
            through multiple levels
          </li>
          <li>
            <strong>Hierarchical Inheritance</strong> - Multiple child classes
            inherit from one parent class
          </li>
        </ul>
        <div className=" border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
          <strong>Note:</strong> Java{" "}
          <strong>does not support multiple inheritance</strong> for classes to
          avoid complexity and ambiguity, but provides{" "}
          <strong>interfaces</strong> as an alternative to achieve multiple
          inheritance of type.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Supported Class Inheritance Types
        </h2>

        {/* 1. Single inheritance */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-indigo-900">
            1. Single Inheritance
          </h3>
          <p className="text-sm text-slate-700">
            A <strong>single child class</strong> inherits from{" "}
            <strong>one parent class</strong>. This is the simplest and most
            common form of inheritance.
          </p>
          <JavaCode
            CODE={`class A {
    int length;
    void setLength(int l) {
        length = l;
    }
}

class B extends A {
    int breadth;
    void setBreadth(int breadth) {
        this.breadth = breadth;
    }
    
    void area() {
        int a = length * breadth;
        System.out.println("Area = "+a);
    }
}

public class SingleInheritance {
    public static void main (String[] args) {
        B obj = new B();
        obj.setLength(5);
        obj.setBreadth(4);
        obj.area();
        
    }
}`}
            filename={"SingleInheritance.java"}
          />

          <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/OOP/P01_SingleInheritance.java" />
          <Output
            output={`Area = 20
`}
          />
          <div className=" bg-green-50 p-3 text-sm text-green-900">
            <strong>Key Points:</strong> The child class can access all
            non-private members of the parent class. Only one direct superclass
            is allowed per class.
          </div>
        </div>

        {/* 2. Multilevel inheritance */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-indigo-900">
            2. Multilevel Inheritance
          </h3>
          <p className="text-sm text-slate-700">
            A <strong>chain of inheritance</strong> where a class inherits from
            another class, which in turn inherits from another class. This
            creates a multi-level hierarchy.
          </p>
          <JavaCode
            CODE={`class A {
    int length;
    void setLength(int l) {
        length = l;
    }
}

class B extends A {
    int breadth;
    void setBreadth(int breadth) {
        this.breadth = breadth;
    }
    
    void area() {
        int a = length * breadth;
        System.out.println("Area = "+a);
    }
}
class C extends B {
    int height;
    void setHeight(int height) {
        this.height = height;
    }
    
    void volume() {
        int v = length * breadth * height;
        System.out.println("volume = "+v);
    }
}

public class MultilevelInheritance {
    public static void main (String[] args) {
        C obj = new C();
        obj.setLength(5);
        obj.setBreadth(4);
        obj.setHeight(3);
        obj.area();
        obj.volume();
        
    }
}
`}
            filename={"MultilevelInheritance.java"}
          />

          <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/OOP/P02_MultilevelInheritance.java" />
          <Output
            output={`Area = 20
volume = 60
`}
          />
          <div className="bg-green-50 p-3 text-sm text-green-900">
            <strong>Key Points:</strong> Creates a hierarchical chain. Each
            level adds new functionality while inheriting from the previous
            level.
          </div>
        </div>

        {/* 3. Hierarchical inheritance */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-indigo-900">
            3. Hierarchical Inheritance
          </h3>
          <p className="text-sm text-slate-700">
            Multiple <strong>child classes</strong> inherit from a{" "}
            <strong>single parent class</strong>. This is useful when multiple
            classes share common behavior.
          </p>

          <JavaCode
            CODE={`class Circle {
    double radius;
    void setRadius(double r) {
        radius = r;
    }
}

class CricleArea extends Circle {
    void area() {
        System.out.println("Area = "+3.14*radius*radius);
    }
}

class CriclePerimeter extends Circle {
    void perimeter() {
        System.out.println("Perimeter = "+2*3.14*radius);
    }
}

public class HierarchicalInheritance {
    public static void main (String[] args) {
        CricleArea obj1 = new CricleArea();
        obj1.setRadius(5.2);
        obj1.area();
        
        CriclePerimeter obj2 = new CriclePerimeter();
        obj2.setRadius(3.2);
        obj2.perimeter();
    }
}`}
            filename="HierarchicalInheritance.java"
          />
          <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/OOP/P03_HierarchicalInheritance.java" />
          <Output
            output={`Area = 84.90560000000002
Perimeter = 20.096000000000004
`}
          />

          <div className="bg-green-50 p-3 text-sm text-green-900">
            <strong>Key Points:</strong> Promotes code reusability. All child
            classes share common behavior from the parent class while
            implementing their own specific behavior.
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Why Java Restricts Multiple Inheritance of Classes
        </h2>
        <p className="text-slate-700">
          <strong>Multiple inheritance</strong> (one class directly extending
          more than one base class) is <strong>not supported</strong> in Java.
          This intentional design choice addresses several issues:
        </p>
        <div className="space-y-3">
          <div className="text-sm text-red-900">
            <h4 className="font-semibold mb-2">The Diamond Problem</h4>
            <p>
              When a class inherits from two classes that have a method with the
              same signature, it becomes ambiguous which parent's method should
              be called.
            </p>
              <JavaCode
                CODE={`class A {
    void show() { System.out.println("A"); }
}

class B {
    void show() { System.out.println("B"); }
}

// This would cause ambiguity - which show() to inherit?
// class C extends A, B { } // NOT ALLOWED IN JAVA`}
                filename={"DiamondProblemExample.java"}
              />
          </div>

          <div className=" border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
            <h4 className="font-semibold mb-2">
              Design Benefits of This Restriction
            </h4>
            <ul className="list-disc pl-3 space-y-1">
              <li>
                <strong>Simplicity:</strong> Reduces complexity in the language
                design
              </li>
              <li>
                <strong>Predictability:</strong> Makes code behavior more
                predictable and easier to understand
              </li>
              <li>
                <strong>Clean Hierarchy:</strong> Encourages cleaner, more
                maintainable class hierarchies
              </li>
              <li>
                <strong>Promotes Composition:</strong> Encourages using
                composition over inheritance for code reuse
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Multiple Inheritance via Interfaces
        </h2>
        <p className="text-slate-700">
          While Java doesn&apos;t support multiple inheritance for{" "}
          <strong>classes</strong>, it does support multiple inheritance for{" "}
          <strong>interfaces</strong>. A class can implement multiple
          interfaces, providing multiple inheritance of type without the
          complexity of multiple implementation inheritance.
        </p>

        <JavaCode
          CODE={`interface College {
    String c_name = "NCIT College";
    void showInfo();
}

class Student {
    String s_name;
    String faculty;

    Student (String a, String b) {
        s_name = a;
        faculty = b;
    }
}

class StudentDetails extends Student implements College {
    public StudentDetails(String a, String b) {
        super(a,b);
    }
    public void showInfo() {
        System.out.println("Student Name: "+s_name);
        System.out.println("College Name: "+c_name);
    }
}

public class MultipleInheritance {
    public static void main (String[] args) {
        StudentDetails obj = new StudentDetails("Utsab Adhikari", "BEIT");
        obj.showInfo();
    }
} `}
          filename={"MultipleInheritance.java"}
        />

        <LinkGithub href="" />
        <Output
          output={`Student Name: Utsab Adhikari
College Name: NCIT College
`}
        />
        <div className="mt-3 p-3 bg-green-50 text-sm text-green-900">
          <strong>Key Points:</strong> The <code>StudentDetails</code> class
          inherits from the <code>Student</code> class and implements the{" "}
          <code>College</code> interface, demonstrating multiple inheritance of
          type.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            <h4 className="font-semibold mb-2">
              Advantages of Interface-based Multiple Inheritance
            </h4>
            <ul className="list-disc pl-3 space-y-1">
              <li>Avoids the diamond problem</li>
              <li>Promotes loose coupling</li>
              <li>Enables polymorphism across unrelated types</li>
              <li>Supports design patterns like Adapter and Strategy</li>
            </ul>
          </div>

          <div className="border border-purple-100 bg-purple-50 p-4 text-sm text-purple-900">
            <h4 className="font-semibold mb-2">When to Use Interfaces</h4>
            <ul className="list-disc pl-3 space-y-1">
              <li>When we need to define a contract</li>
              <li>When unrelated classes need common behavior</li>
              <li>When we want to separate API from implementation</li>
              <li>When we need multiple inheritance of type</li>
            </ul>
          </div>
        </div>
      </section>


      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-02/super-sub-class"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100 transition-colors"
        >
          <span className="text-lg">←</span>
          <span>Previous: 2.2 Super class &amp; Sub class</span>
        </Link>
        <Link
          href="/chapter-02/extends-super"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152d6a] transition-colors"
        >
          <span>Next: 2.4 Extends &amp; Super</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
