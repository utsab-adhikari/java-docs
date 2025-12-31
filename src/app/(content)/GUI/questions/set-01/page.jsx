"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function GridLayoutBasicsPage() {
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
            href="/GUI"
            className="transition hover:text-indigo-700 hover:underline"
          >
            GUI
          </Link>
          <span className="mx-1">›</span>
          <Link
            href="/GUI/Questions"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Questions
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">Set 01 (Lab 04)</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Questions Set - 01 (Lab 04)
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Solutions for Java Swing GUI Questions Set - 01 focusing on Component
          and Layouts
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 1: Basic UI using GridBagLayout
        </h2>
        <p className="text-slate-700">
          Solution of Lab-04 Question No: 1, it creates a simple user interface
          using GridBagLayout
        </p>
        <JavaCode
          CODE={`
import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("UI - Question No: 1");

        GridBagLayout newLayout = new GridBagLayout();
        // We will be use Gridbag-layout 

        GridBagConstraints gbc = new GridBagConstraints();

        JLabel name = new JLabel("Enter Name: ");
        gbc.gridx = 0;
        gbc.gridy = 0;
        newLayout.setConstraints(name, gbc);
        add(name);

        JTextField nameField = new JTextField(10);
        gbc.gridx=1;
        gbc.gridy=0;
        newLayout.setConstraints(nameField, gbc);
        add(nameField);

        JLabel address = new JLabel("Enter Address: ");
        gbc.gridx = 0;
        gbc.gridy = 1;
        newLayout.setConstraints(address, gbc);
        add(address);

        JTextField addressField = new JTextField(10);
        gbc.gridx = 1;
        gbc.gridy = 1;
        newLayout.setConstraints(addressField, gbc);
        add(addressField);

        JLabel gender = new JLabel("Select Gender:");
        gbc.gridx = 0;
        gbc.gridy=2;
        newLayout.setConstraints(gender, gbc);
        add(gender);

        JRadioButton male = new JRadioButton("Male");
        gbc.gridx = 1;
        gbc.gridy=2;
        newLayout.setConstraints(male, gbc);

        JRadioButton female = new JRadioButton("Female");
        gbc.gridx = 2;
        gbc.gridy=2;
        newLayout.setConstraints(female, gbc);

        ButtonGroup bg = new ButtonGroup();
        bg.add(male);
        bg.add(female);

        add(male);
        add(female);

        String cities[] = {"Biratnagar", "Kathmandu", "Bhaktapur", "Pokhara"};

        JLabel city = new JLabel("City: ");
        gbc.gridx=0;
        gbc.gridy=3;
        newLayout.setConstraints(city, gbc);
        add(city);
        
        JList<String> cityList = new JList<String>(cities);
        gbc.gridx=1;
        gbc.gridy=3;
        newLayout.setConstraints(cityList, gbc);
        add(cityList);

        JButton submit = new JButton("Submit");
        gbc.gridx=0;
        gbc.gridy=4;
        newLayout.setConstraints(submit, gbc);
        add(submit);

        JButton cancel = new JButton("cancel");
        gbc.gridx=1;
        gbc.gridy=4;
        newLayout.setConstraints(cancel, gbc);
        add(cancel);

        setLayout(newLayout);

        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
public class question01UI {
    public static void main(String srr[]) {
        new MyFrame();
    }
}`}
          filename="question01UI.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Questions/P01_question01UI.java" />
        <OutputImage src="/question01UI.png" />
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 2: UI using BorderLayout and Events
        </h2>
        <p className="text-slate-700">
            A simple calculator UI using BorderLayout with buttons and text fields, handling basic arithmetic operations.
        </p>
        <JavaCode
          CODE={` /*
Write a program that divides the frame into five regions by using border layout and then add
panels in the east, north and center region. Finally add some descriptive label in the north panel,
buttons with icon in the east panel and a sample form in the center panel. You can further
subdivide the center panel, if necessary. Prepare a program with three text boxes First Number,
Second Number and Result and four buttons add, subtract, multiply and divide. Handle the
events to perform the required operation and display results.
*/

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

class MyFrame extends JFrame implements ActionListener {
	JButton b1, b2, b3, b4;
	JTextField t1, t2, t3;
	MyFrame() {
		setTitle("Questions - UI 02");

		BorderLayout B1 = new BorderLayout(20, 20);

		setLayout(B1);

		JPanel eastPanel = new JPanel();
		JPanel northPanel = new JPanel();
		JPanel centerPanel = new JPanel();
		JPanel westPanel = new JPanel();
		JPanel southPanel = new JPanel();

		add(eastPanel, BorderLayout.EAST);
		add(northPanel, BorderLayout.NORTH);
		add(centerPanel, BorderLayout.CENTER);
		add(westPanel, BorderLayout.WEST);
		add(southPanel, BorderLayout.SOUTH);

		JLabel titleLabel = new JLabel("Welcome To Calculator ");

		northPanel.add(titleLabel);

		b1 = new JButton("Add + ");
		b2 = new JButton("Subtract - ");
		b3 = new JButton("Multiply * ");
		b4 = new JButton("Divide / ");

		eastPanel.setLayout(new GridLayout(4, 1, 20, 20));

		eastPanel.add(b1);
		eastPanel.add(b2);
		eastPanel.add(b3);
		eastPanel.add(b4);

		b1.addActionListener(this);
		b2.addActionListener(this);
		b3.addActionListener(this);
		b4.addActionListener(this);
		
		JLabel l1 = new JLabel("First Number: ");
		JLabel l2 = new JLabel("Second Number: ");
		JLabel l3 = new JLabel("Result: ");

		t1 = new JTextField(10);
		t2 = new JTextField(10);
		t3 = new JTextField(10);
		t3.setEditable(false);

		centerPanel.setLayout(new GridLayout(3, 2, 20, 50));

		centerPanel.add(l1);
		centerPanel.add(t1);
		centerPanel.add(l2);
		centerPanel.add(t2);
		centerPanel.add(l3);
		centerPanel.add(t3);
		
		setVisible(true);
		setSize(500, 500);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
	public void actionPerformed(ActionEvent e) {
		int num1, num2, result;

		num1 = Integer.parseInt(t1.getText());
		num2 = Integer.parseInt(t2.getText());

		if(e.getSource() == b1) {
			result = num1 + num2;
		} else if(e.getSource() == b2) {
			result = num1 - num2;
		} else if(e.getSource() == b3) {
			result = num1 * num2;
		} else if(e.getSource() == b4) {
			result = num1 / num2;
		} else {
			result = 0;
		}

		t3.setText(String.valueOf(result));
	}
}

public class question02UI {
	public static void main(String arr[]) {
		new MyFrame();
	}
}`}
          filename="question02UI.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Questions/P02_question02UI.java" />
        <OutputImage src="/question02UI.png" />
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 3: Button Color Changer
        </h2>
        <p className="text-slate-700">
            A simple UI with three buttons labeled "RED", "BLUE", and "GREEN". When a button is clicked, its background color changes to match its label.
        </p>
        <JavaCode CODE={`/*
3. Using swing components design a form with three buttons with captions “RED”, “BLUE” and
“Green” respectively. Then write a program to handle the event such that when the user clicks
the button, the color of that button will be the same as its caption.
*/


import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

class MyFrame extends JFrame implements ActionListener {
    JButton b1, b2, b3;
    MyFrame() {
        setTitle("Questions - UI 03");
        
        b1 = new JButton("RED");
        b2 = new JButton("BLUE");
        b3 = new JButton("GREEN");
        
        add(b1);
        add(b2);
        add(b3);

        
        b1.addActionListener(this);
        b2.addActionListener(this);
        b3.addActionListener(this);

        
        setLayout(new FlowLayout());
        
        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == b1) {
            b1.setBackground(Color.RED);
        } else if(e.getSource() == b2) {
            b2.setBackground(Color.BLUE);
        } else if(e.getSource() == b3) {
            b3.setBackground(Color.GREEN);
        } 
    }
}

public class question03UI {
    public static void main(String arr[]) {
        new MyFrame();
    }
}
`} filename="" />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Questions/P03_question03UI.java" />
        <OutputImage src="/question03UI.png" />
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 4: Sum and Difference on Mouse Events
        </h2>
        <p className="text-slate-700">
            A GUI program that calculates the sum and difference of two numbers using mouse events. It has two text fields for input and a label for output. The program displays the sum when the mouse is pressed and the difference when the mouse is released.
        </p>
        <JavaCode CODE={`/*
4. Write a GUI program using components to find sum and difference of two numbers. Use two
text fields for giving input and a label for output. The program should display sum if user
presses mouse and difference if user release mouse. 
*/

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

class MyFrame extends JFrame implements MouseListener {
	JLabel l1, l2, l3;
	JTextField t1, t2;
	JPanel fields, result;
	MyFrame() {
		setTitle("Questions - UI 04");

		l1 = new JLabel("First Number: ");
		l2 = new JLabel("Second Number: ");
		l3 = new JLabel("Result will be Shown here.");

		t1 = new JTextField(10);
		t2 = new JTextField(10);

		fields = new JPanel();
		result = new JPanel();

		fields.add(l1);
		fields.add(t1);
		fields.add(l2);
		fields.add(t2);

		fields.setLayout(new GridLayout(2, 2));

		result.add(l3);

		add(fields);
		add(result);

		addMouseListener(this);

		setLayout(new GridLayout(2,1));
		setVisible(true);
		setSize(500, 500);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	public void mousePressed(MouseEvent e) {
		l3.setText("Sum of Two Number: "+(Integer.parseInt(t1.getText())+Integer.parseInt(t2.getText())));
	}
	public void mouseReleased(MouseEvent e) {
		l3.setText("Difference of Two Number: "+(Integer.parseInt(t1.getText())-Integer.parseInt(t2.getText())));
	}
	public void mouseClicked(MouseEvent e) {

	}
	public void mouseEntered(MouseEvent e) {

	}
	public void mouseExited(MouseEvent e) {

	}
}

public class question04UI {
	public static void main(String arr[]) {
		new MyFrame();
	}
}`} filename="" />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Questions/P04_question04UI.java" />
        <OutputImage src="/question04UI.png" />
      </section>
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 5: Factorial and Cube on Mouse Events
        </h2>
        <p className="text-slate-700">
            A GUI program that calculates the factorial and cube of a number using mouse events. It has a text field for input and a label for output. The program displays the factorial when the mouse is pressed and the cube when the mouse is released.
        </p>
        <JavaCode CODE={`/*
5. Write a GUI program using components to find factorial and cube of number. Use TextField
for giving input and label for output. The program should display factorial if user press mouse
on result button and cube if user release mouse from result button
*/

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

class MyFrame extends JFrame implements MouseListener {
    JTextField t1;
    JButton b1;
    JLabel l1, result;

    MyFrame() {
        setTitle("Question - UI 05");

        l1 = new JLabel("Enter Number: ");
        b1 = new JButton("Result");
        t1 = new JTextField(10);

        JPanel p1 = new JPanel();
        JPanel p2 = new JPanel();
        JPanel p3 = new JPanel();

        p1.add(l1);
        p1.add(t1);
        p1.setLayout(new FlowLayout());

        result = new JLabel("Result will be Shown here.");
        p2.add(result);

        p3.add(b1);

        add(p1);
        add(p2);
        add(p3);

        b1.addMouseListener(this);

        setLayout(new GridLayout(3, 1, 10, 50));

        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void mousePressed(MouseEvent e) {
        int num, fact=1;
        num = Integer.parseInt(t1.getText());
        for(int i=num; i>0; i--) {
            fact = fact * i;
        }
        result.setText(
            "Factorial of the Number "+num+" is: "+fact+" ."
        );
    }
    public void mouseReleased(MouseEvent e) {
        int num, cube;

        num = Integer.parseInt(t1.getText());
        cube = num*num*num;
        result.setText("Cube of the Number "+ num+ " is: "+cube+" .");
    }
    public void mouseExited(MouseEvent e) {}
    public void mouseEntered(MouseEvent e) {}
    public void mouseClicked(MouseEvent e) {}
}

public class question05UI {
    public static void main(String arr[]) {
        new MyFrame();
    }
}`} filename="" />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Questions/P05_question05UI.java" />
        <OutputImage src="/question05UI.png" />
      </section>

         <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 6: Smaller and Greater Number on Mouse Events
        </h2>
        <p className="text-slate-700">
            A GUI program that identifies the smaller and greater number between two input numbers using mouse events. It has two text fields for input and a label for output. The program displays the smaller number when the mouse is pressed and the greater number when the mouse is released.
        </p>
        <JavaCode CODE={`/*
6. Write a program to create a GUI application in java that identifies the smaller and greater
number between two input numbers taken through two text fields and displays the result in a
label. If the user presses the mouse, it should display the smaller number and if the user releases
the mouse, it should display the greater number.
*/

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

class MyFrame extends JFrame implements MouseListener {
    JTextField t1, t2;
    JLabel l1, l2, result;

    MyFrame() {
        setTitle("Question - UI 06");

        l1 = new JLabel("First Number: ");
        l2 = new JLabel("Second Number: ");
        t1 = new JTextField(10);
        t2 = new JTextField(10);

        result = new JLabel("Result will be Shown here.");

        l1.setBounds(30, 30, 150, 25);
        t1.setBounds(160, 30, 100, 25);
        l2.setBounds(30, 70, 150, 25); 
        t2.setBounds(160, 70, 100, 25);
        result.setBounds(30, 110, 300, 25);

        add(l1); 
        add(t1); 
        add(l2); 
        add(t2);
        add(result); 

    
        addMouseListener(this);

        setLayout(null);

        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void mousePressed(MouseEvent e) {
        int num1, num2, min;

        num1 = Integer.parseInt(t1.getText());
        num2 = Integer.parseInt(t2.getText());
        min = num1<num2?num1:num2;
        result.setText("Minimum is "+min);
    }
    public void mouseReleased(MouseEvent e) {
         int num1, num2, max;

        num1 = Integer.parseInt(t1.getText());
        num2 = Integer.parseInt(t2.getText());
        max = num1>num2?num1:num2;
        result.setText("Maximum is "+max);
    }
    public void mouseExited(MouseEvent e) {}
    public void mouseEntered(MouseEvent e) {}
    public void mouseClicked(MouseEvent e) {}
}


public class question06UI {
    public static void main(String arr[]) {
        new MyFrame();
    }
}`} filename="" />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/Questions/P06_question06UI.java" />
        <OutputImage src="/question06UI.png" />
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/GUI/questions"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: Questions</span>
        </Link>
        <Link
          href="/GUI/"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
        >
          <span>Next: GUI</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
