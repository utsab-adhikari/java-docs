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
          <span className="font-medium text-slate-700">Set 02 (Lab 05)</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Questions Set - 02 (Lab 05)
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Solutions for JavaFX GUI Questions Set - 02
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 1: Registration Form using GridPane Layout
        </h2>
        <p className="text-slate-700">
          This program creates a comprehensive registration form using JavaFX GridPane layout.
          It demonstrates how to organize multiple types of input controls in a structured grid,
          including text fields, date pickers, radio buttons (with ToggleGroup for single selection),
          checkboxes for multiple selections, a ListView for academic qualifications, and a ChoiceBox
          for location selection. The form includes proper labels for each field and action buttons
          (Submit and Clear) at the bottom.
        </p>
        <JavaCode
          CODE={`
import java.util.Observable;
import javax.swing.plaf.basic.BasicBorders.RadioButtonBorder;
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.scene.control.Label;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.control.PasswordField;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.control.DatePicker;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.CheckBox;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.control.ListView;
import javafx.geometry.Insets;

public class Question01 extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    public void start(Stage primaryStage) throws Exception {

        Label l1 = new Label("Name");
        Label l2 = new Label("Date Of Birth");
        Label l3 = new Label("Gender");
        Label l4 = new Label("Your Skills");
        Label l5 = new Label("Aceademic Qualification");
        Label l6 = new Label("Location");

        TextField t1 = new TextField();
        DatePicker dp = new DatePicker();

        RadioButton rb1 = new RadioButton("Male");
        RadioButton rb2 = new RadioButton("Female");
        RadioButton rb3 = new RadioButton("Other");

        ToggleGroup tg = new ToggleGroup();
        rb1.setToggleGroup(tg);
        rb2.setToggleGroup(tg);
        rb3.setToggleGroup(tg);

        CheckBox cb1 = new CheckBox("Java");
        CheckBox cb2 = new CheckBox("Python");
        CheckBox cb3 = new CheckBox("DotNet");

        ObservableList<String> data = FXCollections.observableArrayList("BSc.CSIT", "BIT", "BCA", "BE.Computer", "BE.IT");
        ListView<String> lv = new ListView<>(data);
        lv.setPrefSize(50, 100);

        ChoiceBox cob = new ChoiceBox();
        cob.getItems().addAll("Kathmandu", "Bhaktapur", "Pokhara", "Lalitpur", "Dhading");

        Button bt1 = new Button("Submit");
        Button bt2 = new Button("Clear");

        GridPane root = new GridPane();
        root.setPadding(new Insets(10));
        root.setVgap(10);
        root.setHgap(10);

        root.add(l1, 0, 0);
        root.add(t1, 1, 0); 
        root.add(l2, 0, 1);
        root.add(dp, 1, 1);
        root.add(l3, 0, 2);
        root.add(rb1, 1, 2);
        root.add(rb2, 2, 2);
        root.add(rb3, 3, 2);
        root.add(l4, 0, 3);
        root.add(cb1, 1, 3);
        root.add(cb2, 2, 3);
        root.add(cb3, 3, 3);
        root.add(l5, 0, 4);
        root.add(lv, 1, 4);
        root.add(l6, 0, 5);
        root.add(cob, 1, 5);
        root.add(bt1, 1, 10);
        root.add(bt2, 2, 10);

        Scene s1 = new Scene(root, 700, 300);
        primaryStage.setScene(s1);
        primaryStage.setTitle("Registration Form");
        primaryStage.show();

    }

}
`}
          filename="Question01.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/Questions/P01_Question01.java" />
        <OutputImage src="/JavaFxQ01.png" />
      </section>


<section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 2: Simple Calculator (Addition)
        </h2>
        <p className="text-slate-700">
          This program demonstrates event handling in JavaFX by creating a simple calculator
          that reads two numbers from the user and displays their sum when a button is clicked.
          It uses GridPane layout to arrange Labels and TextFields in a form-like structure.
          The program implements the EventHandler interface to handle button click events,
          parses the text input to integers, performs addition, and displays the result in
          a read-only TextField. This is a fundamental example of user interaction and event-driven
          programming in JavaFX.
        </p>
        <JavaCode
          CODE={`
/*
Write a javaFx program to create a form to read two numbers and display their sum on button
click.
*/

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.layout.GridPane;
import javafx.geometry.Insets;

public class Question02 extends Application {
  public static void main(String[] args) {
    launch(args);
  }

  public void start(Stage primaryStage) throws Exception {
    Label l1 = new Label("First Number:");
    Label l2 = new Label("Second Number:");
    Label l3 = new Label("Result:");

    TextField t1 = new TextField();
    TextField t2 = new TextField();
    TextField t3 = new TextField();
    t3.setEditable(false);

    Button b1 = new Button("Sum");

    GridPane root = new GridPane();
    root.setPadding(new Insets(5));
    root.setHgap(10);
    root.setVgap(10);

    root.add(l1, 0, 0);
    root.add(t1, 1, 0);

    root.add(l2, 0, 1);
    root.add(t2, 1, 1);

    root.add(l3, 0, 2);
    root.add(t3, 1, 2);

    root.add(b1, 1, 3);

    Scene s1 = new Scene(root, 500, 500);
    primaryStage.setTitle("Question - 02");
    primaryStage.setScene(s1);
    primaryStage.show();

    b1.setOnAction(new EventHandler<ActionEvent> () {
      public void handle(ActionEvent e) {
        t3.setText(""+(Integer.parseInt(t1.getText())+Integer.parseInt(t2.getText())));
      }
    });
  }
}
`}
          filename="Question02.java"
                />
                <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/Questions/Question02.java" />
        <OutputImage src="/JavaFxQ02.png" />
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Question 3: Login Page with Validation
        </h2>
        <p className="text-slate-700">
          This program creates a login interface with username and password fields, demonstrating
          secure password input using PasswordField (which masks the entered characters). When the
          user clicks the "Sign In" button, the program validates the credentials against predefined
          values (username: "NCIT", password: "NCIT@2024Spring"). It uses JavaFX Alert dialogs to
          provide user feedback—showing an INFORMATION alert for successful login or an ERROR alert
          for invalid credentials. This example showcases form validation, secure input handling,
          conditional logic, and user feedback through modal dialogs in JavaFX applications.
        </p>
        <JavaCode
          CODE={`
/*
Write down the javaFx code to design a login page as shown in the figure below when user
click on login button test the username is “NCIT” and password “NCIT@2024Spring” or
not.
*/

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;


public class Question03 extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    public void start(Stage primaryStage) throws Exception {
        Label title = new Label("Welcome");
        title.setStyle("-fx-font: bold 30px 'serif'");
        Label l1 = new Label("User Name:");
        Label l2 = new Label("Password:");

        TextField t1 = new TextField();
        PasswordField p1 = new PasswordField();

        Button b1 = new Button("Sign In");

        GridPane root = new GridPane();
        root.setPadding(new Insets(5));
        root.setHgap(10);
        root.setVgap(10);

        root.add(title, 0, 0);
        root.add(l1, 0, 1);
        root.add(t1, 1, 1);
        root.add(l2, 0, 2);
        root.add(p1, 1, 2);
        root.add(b1, 2, 3);

        Scene s1 = new Scene(root, 400, 400);
        primaryStage.setTitle("JavaFX Welcome");
        primaryStage.setScene(s1);
        primaryStage.show();

        b1.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent e) {
                if (t1.getText().equals("NCIT") && p1.getText().equals("NCIT@2024Spring")) {
                    Alert alert = new Alert(Alert.AlertType.INFORMATION);
                    alert.setTitle("Information");
                    alert.setHeaderText("Success"); 
                    alert.setContentText("Valid User Name and Password");
                    alert.showAndWait();
                } else {
                    Alert alert = new Alert(Alert.AlertType.ERROR);
                    alert.setTitle("Error");
                    alert.setHeaderText("Something went wrong");
                    alert.setContentText("Invalid inpuUser Name and Password!");
                    alert.showAndWait();
                }
            }
        });

    }

}
`}
          filename="Question03.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/Questions/P03_Question03.java" />
        <OutputImage src="/JavaFxQ03.png" />
      </section>


      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/GUI/questions/set-01"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: Set-01</span>
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
