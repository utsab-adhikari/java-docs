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
          <span className="font-medium text-slate-700">
            Class and Objects Programs
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Class and Objects Programs
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Common exam-style Java programs built on top of Chapter 01: Class and
          Objects concepts.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 1: Rectangle Class with Area Calculation
        </h2>
        <p className="text-slate-700">
          A java program to create Rectangle class with data member length and
          breadth. It includes methods to get data from the user and display the
          area of the rectangle.
        </p>
        <JavaCode
          CODE={`import java.util.Scanner;

class Rectangle {

    int length;
    int breadth;

    void getData() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length: ");
        length = sc.nextInt();
        System.out.print("Enter breadth: ");
        breadth = sc.nextInt();
        sc.close();
    }

    void displayArea() {
        int area = length * breadth;
        System.out.println("Area of Rectangle: " + area);
    }
}

public class RectangleClass {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.getData();
        rect.displayArea();
    }
}`}
          filename={"RectangleClass.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Programs/Lab01/P04_RectangleClass.java"
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
        output={`Enter length: 5
Enter breadth: 4
Area of Rectangle: 20
`}
      />
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 2: Account Class with Basic Banking Operations
        </h2>
        <p className="text-slate-700">
          A java program to create Account class with data members
          accountHolder, accountId, ammount, and address. It includes methods to
          deposit money, withdraw money, and get the current balance along with
          account details.
        </p>
        <JavaCode
          CODE={`import java.util.Scanner;

class Account {
    private String accountHolder;
    private int accountId;
    private int ammount;
    private String address;
    
    Account() {
        accountHolder = "";
        accountId = 0;
        ammount = 0;
        address = "";
    }
    
    Account(String aH, int aId, int am, String ad) {
        accountHolder = aH;
        accountId = aId;
        ammount = am;
        address = ad;
    }
    
    public void Deposit() {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter Ammount to be Deposited:  ");
        int d_amount = sc.nextInt();
        
        ammount = ammount + d_amount;
        
        System.out.println(d_amount+" is Deposited to your account");
        sc.close();
    }
    
    public void Get_Balance() {
        System.out.println("<-- Account Details -->");
        System.out.println("Name: "+accountHolder);
        System.out.println("Balance: "+ammount);
        System.out.println("Address: "+ address);
    }
    
    public void Withdraw() {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter Ammount to be Withdrawn:  ");
        int w_amount = sc.nextInt();
        
        ammount = ammount - w_amount;
        
        System.out.println(w_amount+" is Withdrawn from your account");
        sc.close();
    }
}

public class BasicAccountSetup {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
	
		System.out.println("<-- Enter Details -->");
		System.out.print("Enter Name: ");
		String name = sc.nextLine();
		System.out.print("Enter Initial Ammount: ");
		int initialAmmount = sc.nextInt();
		sc.nextLine();
		System.out.print("Enter Address: ");
		String address = sc.nextLine();
		
		Account a1 = new Account(name, 12345, initialAmmount, address);
	
		while(true) {
		    System.out.println("You Got the choices --->");
		    System.out.println("1. GetBaance");
		    System.out.println("2. Deposit");
		    System.out.println("3. Withdraw");
		    System.out.println("4. Exit");
		    System.out.print("Select: ");
		    int choice = sc.nextInt();
		
		    switch(choice) {
		        case 1: 
		            a1.Get_Balance();
		            break;
		        
		        case 2: 
		            a1.Deposit();
		            break;
		        
		        case 3: 
		            a1.Withdraw();
		            break;
		        
		        case 4: 
		            System.out.println("Exiting....");
    		        System.exit(0);
		        
		        default : 
		            System.out.println("Invalid Choice");
		    }

			sc.close();
	    }	
	}
}
 `}
          filename={"BasicAccountSetup.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Programs/Lab01/P02_BasicAccountSetup.java"
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
        output={`<-- Enter Details -->
Enter Name: Utsab
Enter Initial Ammount: 5000
Enter Address: KTM

You Got the choices --->
1. GetBaance
2. Deposit
3. Withdraw
4. Exit
Select: 1

<-- Account Details -->
Name: Utsab
Balance: 5000
Address: KTM

You Got the choices --->
1. GetBaance
2. Deposit
3. Withdraw
4. Exit
Select: 2

Enter Ammount to be Deposited:  15000
15000 is Deposited to your account

You Got the choices --->
1. GetBaance
2. Deposit
3. Withdraw
4. Exit
Select: 1

<-- Account Details -->
Name: Utsab
Balance: 20000
Address: KTM

You Got the choices --->
1. GetBaance
2. Deposit
3. Withdraw
4. Exit
Select: 3

Enter Ammount to be Withdrawn:  2000
2000 is Withdrawn from your account

You Got the choices --->
1. GetBaance
2. Deposit
3. Withdraw
4. Exit
Select: 1

<-- Account Details -->
Name: Utsab
Balance: 18000
Address: KTM
`}
      />

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 3: Distance Class with Addition and Comparison
        </h2>
        <p className="text-slate-700">
          A java program to create Distance class with data members feet and
          inches. It includes methods to add two Distance objects and compare
          them.
        </p>
        <JavaCode
          CODE={`class Distance {
    private int feet;
    private float inches;

    public Distance(int feet, float inches) {
        this.feet = feet;
        this.inches = inches;
    }

    public Distance add(Distance d) {
        int totalFeet = this.feet + d.feet;
        float totalInches = this.inches + d.inches;

        if (totalInches >= 12) {
            totalFeet += (int)(totalInches / 12);
            totalInches = totalInches % 12;
        }

        return new Distance(totalFeet, totalInches);
    }

    public int compare(Distance d) {
        float thisTotalInches = this.feet * 12 + this.inches;
        float dTotalInches = d.feet * 12 + d.inches;

        if (thisTotalInches > dTotalInches) {
            return 1; 
        } else if (thisTotalInches < dTotalInches) {
            return -1; 
        } else {
            return 0; 
        }
    }

    public void display() {
        System.out.println(feet + " feet " + inches + " inches");
    }
}

public class DistanceComparing {
    public static void main(String[] args) {
        Distance d1 = new Distance(5, 8.5f);
        Distance d2 = new Distance(3, 11.75f);

        Distance sum = d1.add(d2);

        System.out.print("Distance 1: ");
        d1.display();

        System.out.print("Distance 2: ");
        d2.display();

        System.out.print("Sum of distances: ");
        sum.display();

        int comparison = d1.compare(d2);
        if (comparison > 0) {
            System.out.println("Distance 1 is greater than Distance 2.");
        } else if (comparison < 0) {
            System.out.println("Distance 1 is smaller than Distance 2.");
        } else {
            System.out.println("Distance 1 is equal to Distance 2.");
        }
    }
}`}
          filename={"DistanceComparing.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Programs/Lab01/P10_DistanceComparing.java"
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
        output={`Distance 1: 5 feet 8.5 inches
Distance 2: 3 feet 11.75 inches
Sum of distances: 9 feet 8.25 inches
Distance 1 is greater than Distance 2.
`}
      />


<section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Program 4: Cylinder Class with Volume Calculation
        </h2>
        <p className="text-slate-700">
          A java program to create Cylinder class with data members radius and
          height. It includes methods to set dimensions, calculate volume, and
          display cylinder details.
        </p>
        <JavaCode
          CODE={`class Cylinder {
    private double radius;
    private double height;
    
    public void setDimensions(double r, double h) {
        radius = r;
        height = h;
    }

    public double calculateVolume() {
        return Math.PI * radius * radius * height;
    }

    public void displayDetails() {
        System.out.println("Radius: " + radius);
        System.out.println("Height: " + height);
        System.out.println("Volume: " + calculateVolume());
    }
}

public class CylinderClass {
    public static void main(String[] args) {
        Cylinder cylinder1 = new Cylinder();
        cylinder1.setDimensions(3.0, 5.0);

        Cylinder cylinder2 = new Cylinder();
        cylinder2.setDimensions(4.5, 7.2);

        System.out.println("Cylinder 1 details:");
        cylinder1.displayDetails();

        System.out.println("Cylinder 2 details:");
        cylinder2.displayDetails();
    }
}`}
          filename={"CylinderClass.java"}
        />
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href="https://github.com/utsab-adhikari/java/blob/main/Programs/Lab01/P08_CylinderClass.java"
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
        output={`Cylinder 1 details:
Radius: 3.0
Height: 5.0
Volume: 141.3716694115407
Cylinder 2 details:
Radius: 4.5
Height: 7.2
Volume: 458.04420889339184
`} />

      <p className="flex items-center justify-center gap-2 border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-800">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Chapter 01 Completed
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-01/general-programs"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: General Programs</span>
        </Link>
        <Link
          href="/chapter-02"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: Chapter 02</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
