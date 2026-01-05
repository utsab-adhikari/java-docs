export const metadata = {
	title: "FlowLayout Basics · GUI Layouts",
	description:
		"Introduction to FlowLayout in Java Swing with an example arranging buttons in a row.",
	keywords: [
		"Java FlowLayout example",
		"Swing FlowLayout basics",
		"layout managers in Java",
		"Pokhara University FlowLayout",
	],
	openGraph: {
		title: "FlowLayout Basics · GUI Layouts",
		description:
			"Learn how FlowLayout places components left-to-right with optional gaps and alignment.",
		type: "article",
		section: "GUI Programming",
	},
	twitter: {
		card: "summary_large_image",
		title: "FlowLayout Basics · GUI Layouts",
		description:
			"Understand FlowLayout constructors, alignment, and spacing in Java Swing.",
	},
	alternates: {
		canonical: "/GUI/swing-awt/layouts/flowlayout",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}
