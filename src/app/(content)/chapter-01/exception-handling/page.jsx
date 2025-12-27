import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import { FaGithub } from "react-icons/fa";
import Output from "@/components/Output";
import LinkGithub from "@/components/LinkGithub";

export default function ExceptionHandlingPage() {
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
            1.6 Exception Handling
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          1.6 Exception Handling
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How Java handles runtime errors using exceptions, try-catch blocks, and the
          throw and throws keywords.
        </p>
      </header>

      {/* Introduction / What is an exception? */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What is an Exception?
        </h2>
        <p className="text-slate-700">
          An exception is an unwanted or unexpected event that occurs at runtime
          and disrupts the normal flow of a program. Instead of crashing, Java
          represents such situations as objects so they can be caught and
          handled gracefully.
        </p>
      </section>

      {/* Categories of Exceptions */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Categories of Exceptions
        </h2>
        <p className="text-slate-700">
          Java groups abnormal conditions into three main categories. Knowing
          the difference helps you decide what can be recovered from in code and
          what is outside your control.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-indigo-800">Checked</h3>
            <p className="text-xs text-slate-600">
              Detected at compile time. The compiler forces you to handle or
              declare them (for example, <code>IOException</code>).
            </p>
          </div>
          <div className="rounded border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-indigo-800">Unchecked</h3>
            <p className="text-xs text-slate-600">
              Occur at runtime and usually indicate programming mistakes (for
              instance, <code>ArithmeticException</code> or
              <code>NullPointerException</code>).
            </p>
          </div>
          <div className="rounded border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-red-800">Error</h3>
            <p className="text-xs text-slate-600">
              Serious problems related to the JVM or system resources that
              applications normally cannot handle (for example,
              <code>StackOverflowError</code>).
            </p>
          </div>
        </div>
      </section>

      {/* try-catch */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          try-catch Block
        </h2>
        <p className="text-slate-700">
          The basic building blocks of exception handling are the
          <code> try</code> and <code>catch</code> blocks. Risky code goes
          inside the try block, and the catch block defines how to respond if an
          exception occurs.
        </p>
        <JavaCode
          CODE={`public class HandlingException {
    public static void main(String[] args) {
		int a = 0;
		int b = 0;

		try {
		    b = 10/a; // divide by zero : exception
		    System.out.println("Hey There, from try block");

		} catch (Exception e) {
		    System.out.println("Something went wrong, "+e);
            // exception will be handled here
		}

		System.out.println(" we got b = "+b);
		System.out.println("Bye there !");
	}
}`}
          filename={"HandlingException.java"}
        />

        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Exception_Handling/P01_TryCatch.java"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>

        <p className="text-sm text-slate-600">
          Without the catch block, this program would terminate with an
          arithmetic error. With proper handling, the program prints a friendly
          message and continues.
        </p>

        <Output
          output={`Something went wrong, java.lang.ArithmeticException: / by zero
 we got b = 0
Bye there !
`}
        />
      </section>

      {/* try with multiple catch blocks */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          try with Multiple catch Blocks
        </h2>
        <p className="text-slate-700">
          Sometimes a single statement may throw different kinds of exceptions.
          In that case, you can attach multiple <code>catch</code> blocks to one
          <code> try</code> block and handle each exception type separately.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>Each catch block specifies a different exception class.</li>
          <li>
            The first matching catch block (from top to bottom) is executed.
          </li>
          <li>
            More specific exception types should be caught before general ones.
          </li>
        </ul>

        <JavaCode
          CODE={`public class TryMultipleCatch
{
	public static void main(String[] args) {
		int a = 1;
		int b = 0;
        int num[] = {1, 2, 3, 4, 5};

		try {
		    b = 10/a; 
            System.err.println(num[7]);
		    System.out.println("Hey There, from try block");

		} 
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of stack, "+e);

        } catch (Exception e) {
		    System.out.println("Something went wrong, "+e);
		} 

		System.out.println(" we got b = "+b);
		System.out.println("Bye there !");
	}
}`}
          filename={"TryMultipleCatch.java"}
        />

        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/Exception_Handling/P02_TryMultipleCatch.java" />
      <Output output={`Array index out of stack, java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 5
 we got b = 10
Bye there !
`} />
      </section>

      {/* throw keyword */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          <code>throw</code> Keyword
        </h2>
        <p className="text-slate-700">
          The <code>throw</code> keyword is used inside a method to create and
          explicitly throw an exception object at a particular point in your
          code.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>Usually used when you detect an invalid state or bad input.</li>
          <li>Can throw built-in exceptions or your own custom exceptions.</li>
        </ul>

        <JavaCode CODE={`public class Throw {
    public static void main(String[] args) {
        {
            int j=0;
            try {

                if(j==0) {
                    throw new ArithmeticException("Message Will be here");
                }
            } catch(ArithmeticException e) {
                j = 100;
                System.err.println("Cannot divide "+e);
            }
            System.err.println(j);
            System.err.println("Ends here");
        }
    }
}`} filename={"Throw.java"} />

<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/Exception_Handling/P03_Throw.java" />

<Output output={`Cannot divide java.lang.ArithmeticException: Message Will be here
100
Ends here
`} />
      </section>

      {/* throws keyword */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          <code>throws</code> Keyword
        </h2>
        <p className="text-slate-700">
          The <code>throws</code> clause is written in a method signature to
          declare that the method might pass certain exceptions to its
          caller instead of handling them locally.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            Used mainly with checked exceptions like <code>IOException</code>.
          </li>
          <li>
            Forces callers either to catch the exception or declare it again.
          </li>
        </ul>

        <JavaCode CODE={`/* it provides exception to be handled in call section */

class Calculate {
    public void division(int a, int b) throws ArithmeticException {
        int d = a/b;
        System.err.println("d = "+d);
    }
}

public class Throws {
    public static void main(String[] args) {
        Calculate calc = new Calculate();

        try {
            calc.division(0, 0);
        } catch (ArithmeticException e) {
            System.err.println("Divide by Zero is not possible");
        }
    }
}`} filename={"Throws.java"} />
<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/Exception_Handling/P04_Throws.java"/>
<Output output={`Divide by Zero is not possible
`} />
      </section>

      {/* Throw vs Throws */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Throw vs Throws
        </h2>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            <strong>throw</strong>: used inside a method body to create and
            immediately throw an exception object.
          </li>
          <li>
            <strong>throws</strong>: used in a method signature to declare that
            the method may throw certain checked exceptions to its caller.
          </li>
          <li>
            Often used together: a method <code>throws</code> an exception type,
            and uses <code>throw</code> when the exceptional condition occurs.
          </li>
        </ul>
      </section>

      {/* finally block */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-emerald-400 pl-3 text-xl font-semibold text-emerald-900">
          The finally Block
        </h2>
        <p className="text-slate-700">
          The <code>finally</code> block contains code that should run whether
          an exception is thrown or not. It is commonly used for resource
          cleanup, such as closing files, network connections, or database
          sessions.
        </p>
        <div className=" border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Even if a method returns early or an exception is thrown and caught,
          code inside <code>finally</code> still executes.
        </div>

        <JavaCode CODE={`public class Finally {
	public static void main(String[] args) {
		int a = 1;
		int b = 0;
        int num[] = {1, 2, 3, 4, 5};

		try {
		    b = 10/a; 
            System.err.println(num[7]);
		    System.out.println("Hey There, from try block");

		} 
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of stack, "+e);

        } catch (Exception e) {
		    System.out.println("Something went wrong, "+e);
		} finally {
            System.out.println("This is finally block, I will execute always");
        }

		System.out.println(" we got b = "+b);
		System.out.println("Bye there !");
	}
}`} filename={"Finally.java"} />

<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/Exception_Handling/P05_Finally.java" />
<Output output={`Array index out of stack, java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 5
This is finally block, it will execute always
 we got b = 10
Bye there !
`} />

      </section>

        <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          User Defined Exceptions
        </h2>
         <p className="mb-6 leading-relaxed text-slate-600">
        While Java provides many built-in exception classes, developers often need to 
        <strong> customize exceptions</strong> according to specific user needs. These are 
        known as <strong>User-Defined Exceptions</strong>.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-800">How to Create Custom Exceptions</h2>
        <p className="mb-4 text-slate-600">
          In Java, an exception is simply an object of an exception class. We can create 
          our own Exception classes by extending the built-in <code>Exception</code> class:
        </p>
        <ul className="list-inside list-disc space-y-2 text-slate-600">
          <li>
            By creating a class that <strong>extends the Exception class</strong> (the superclass 
            of all exception classes).
          </li>
        </ul>
      </section>
        <JavaCode
          CODE={`class NCITexception extends Exception {
    public NCITexception(String str) {
        super(str);
    }
}

public class UserDefinedException {
    public static void main(String arr[]) {
        
        try {
            
            System.out.println("Here we will try to throw NCITexception");
                throw new NCITexception("NCIT Exception Occured -- Message");
                
        } catch (NCITexception e) {
            
            System.out.println("Exception: " + e);
            
        }
        
        System.out.println("End of the program");
        
    }
}`}
          filename={"UserDefinedException.java"}
        />

    <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/Exception_Handling/P06_UserDefinedException.java" />

        <Output
          output={`Here we will try to throw NCITexception
Exception: NCITexception: NCIT Exception Occured -- Message
End of the program
`}
        />
      </section>


      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/chapter-01/constructors"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: 1.5 Constructor</span>
        </Link>
        <Link
          href="/chapter-01/general-programs"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: General Programs</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
