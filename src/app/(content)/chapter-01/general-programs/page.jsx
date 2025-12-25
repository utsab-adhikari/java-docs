"use client";

import JavaCode from "@/components/JavaCode";
import Output from "@/components/Output";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function GeneralProgramsPage() {
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
          <span className="font-medium text-slate-700">General Programs</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          General Java Programs
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Common exam-style Java programs built on top of Chapter 01 concepts.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 1: Sum and Average of an Integer Array
        </h2>
        <p className="text-slate-700">
          The following program stores a fixed list of integers in an array,
          uses an enhanced <code>for </code>-loop to compute the sum, and then
          divides by the length of the array to find the average.
        </p>
        <JavaCode
          CODE={`// WAP to calculate total/sum and average of integer array

public class SumAvgOfArray {
  
		public static void main(String arr[]) {
				int sum = 0, avg;
				int array[] = {10, 20, 30, 40, 50};
        
				for (int num : array) {
						sum = sum + num;
				}

				int n = array.length;
				avg = sum / n;
        
				System.out.println("Total: " + sum);
				System.out.println("Average: " + avg);
		}
}`}
          filename={"SumAvgOfArray.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Basic_Programs/P01_SumAndAverageOfArray.java"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <Output
        output={`Total: 150
Average: 30
`}
      />

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 2: Check Number is Prime or Not
        </h2>
        <p className="text-slate-700">
          This program reads an integer from the user and checks whether it is a
          prime number by testing divisibility from <code>2</code> up to
          <code> num - 1 </code>. If no divisor is found, the number is prime.
        </p>
        <JavaCode
          CODE={`// WAP to check whether a number is prime or not

import java.util.Scanner;

public class PrimeOrNot {
		public static void main(String[] args) {
				Scanner sc = new Scanner(System.in);
				System.out.print("Enter Number:");
				int num = sc.nextInt();

				int temp = num;
				int i;
				for (i = 2; i < num; i++) {
						if (num % i == 0) {
								break;
						}
				}

				if (temp == i) {
						System.out.println("The Number " + temp + " is Prime.");
				} else {
						System.out.println("The Number " + temp + " is Not a Prime");
				}
				sc.close();
		}
}`}
          filename={"PrimeOrNot.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Basic_Programs/P02_PrimeOrNot.java"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <Output
        output={`Enter Number:5
The Number 5 is Prime.
`}
      />

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 3: Pattern Printing - Right Angled Triangle
        </h2>
        <p className="text-slate-700">
            The following program uses nested <code>for</code>-loops to print a right-angled 
            triangle pattern of asterisks. The outer loop controls the number of rows, 
            while the inner loop prints the asterisks in each row.
        </p>
        <JavaCode
          CODE={`public class BasicPattern01 {
     public static void main(String arr[]) {
        for(int i=0;i<10;i++) {
            for(int k=0;k<i;k++){
                System.out.print("* ");
            }
            System.out.println(" ");
        }
    }
}`}
          filename={"BasicPattern01.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Basic_Programs/P03_BasicPattern01.java"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <Output
        output={`* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
`}
      />

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 4: Pattern Printing - Right Angled Triangle (Inverted)
        </h2>
        <p className="text-slate-700">
            This program prints an inverted right-angled triangle pattern of asterisks using nested 
            <code>for</code>-loops. The outer loop controls the number of rows, while the inner loops 
            handle the spaces and asterisks in each row to create the inverted effect.
        </p>
        <JavaCode
          CODE={`public class BasicPattern02 {
    public static void main(String arr[]) {
         for(int i=0;i<10;i++) {
            for(int k=0; k<i; k++){
                System.out.print("  ");
            }
            for(int j=10;j>i;j--) {
                System.out.print("* ");
            }
            System.out.println(" ");
        }
    }
}
`}
          filename={"BasicPattern02.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Basic_Programs/P04_BasicPattern02.java"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <Output
        output={`* * * * * * * * * *  
  * * * * * * * * *  
    * * * * * * * *  
      * * * * * * *  
        * * * * * *  
          * * * * *  
            * * * *  
              * * *  
                * *  
                  *  
 
`}
      />

            <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 5: A Simple Vowel Checker
        </h2>
        <p className="text-slate-700">
            This program prompts the user to enter an alphabet character and uses a
            switch-case statement to check if the entered character is a vowel
            (a, e, i, o, u). If it matches any of the vowel cases, it confirms that
            the character is a vowel; otherwise, it states that the character is a consonant.
        </p>
        <JavaCode
          CODE={`// Simple Vowel Checker Program in Java

import java.util.Scanner;

public class VowelChecker {
    
    public static void main(String arr[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Alphabet: ");
        String alphabet = sc.next();
        
        switch(alphabet) {
            case "a": 
                System.out.println("Yes the alphabet is Vowel");
                break;
                
            case "e": 
                System.out.println("Yes the alphabet is Vowel");
                break;
                
            case "i": 
                System.out.println("Yes the alphabet is Vowel");
                break;
                
            case "u": 
                System.out.println("Yes the alphabet is Vowel");
                break;
                    
            default : 
                System.out.println("The Alphabet is Consonant");
               }
        sc.close();
        
        
    }
    
}
`}
          filename={"VowelChecker.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Programs/Lab01/P01_VowelChecker.java"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <Output
        output={`Enter Alphabet: u
Yes the alphabet is Vowel
`}
      />


            <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 6: Fibonacci Series
        </h2>
        <p className="text-slate-700">
            This program generates and prints the Fibonacci series up to a specified number of terms (10 in this case). 
            It initializes the first two terms and iteratively calculates the next terms by summing the previous two, printing each term in the series.
        </p>
        <JavaCode
          CODE={`
public class Fibonacci {
    public static void main(String[] args) {
        int n = 10; 
        int firstTerm = 0, secondTerm = 1;

        System.out.println("Fibonacci Series up to " + n + " terms:");

        for (int i = 1; i <= n; ++i) {
            System.out.print(firstTerm + ", ");

            int nextTerm = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = nextTerm;
        }
    }
}
`}
          filename={"Fibonacci.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Programs/Lab01/P09_Fibonacci.java"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </section>

      <Output
        output={`Fibonacci Series up to 10 terms:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
`}
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-01/constructors"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: 1.5 Constructors</span>
        </Link>
          <Link
                  href="/chapter-01/class-and-objects-programs"
                  className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
                >
                  <span>Next: Programs - Class and Objects</span>
                  <span className="text-lg">→</span>
                </Link>
      </div>
    </article>
  );
}
