export const metadata = {
	title: {
		default: "JavaFX GUI Programming",
		template: "%s · Java Programming Documentation",
	},
	description:
		"Overview of JavaFX GUI programming, including core UI controls like Label, Button, TextField, PasswordField, Menu and layout panes such as FlowPane, HBox, VBox, BorderPane, and GridPane.",
	keywords: [
		"JavaFX tutorial",
		"JavaFX GUI programming",
		"JavaFX Label Button TextField",
		"JavaFX PasswordField Menu",
		"JavaFX FlowPane HBox VBox BorderPane GridPane",
		"JavaFX layouts",
		"Pokhara University JavaFX GUI",
	],
	authors: [{ name: "Utsab Adhikari" }],
	creator: "Utsab Adhikari",
	publisher: "Utsab Adhikari",
	category: "Education",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "JavaFX GUI Programming",
		description:
			"Learn the basics of JavaFX GUI development, including common controls and layout panes used to build modern Java desktop applications.",
		type: "article",
		locale: "en_US",
		siteName: "Java Programming Documentation",
	},
	twitter: {
		card: "summary_large_image",
		title: "JavaFX GUI Programming",
		description:
			"Explore JavaFX controls and layout panes for building modern Java GUIs.",
	},
	alternates: {
		canonical: "/GUI/javafx",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

