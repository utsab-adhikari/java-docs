export const metadata = {
	title: "GridLayout Basics · GUI Layouts",
	description:
		"Introduction to GridLayout in Java Swing with an example arranging buttons in a 3x3 grid.",
	keywords: [
		"Java GridLayout example",
		"Swing GridLayout basics",
		"grid layout manager",
		"Pokhara University GridLayout",
	],
	openGraph: {
		title: "GridLayout Basics · GUI Layouts",
		description:
			"Learn how GridLayout divides a container into equal-sized rows and columns.",
		type: "article",
		section: "GUI Programming",
	},
	twitter: {
		card: "summary_large_image",
		title: "GridLayout Basics · GUI Layouts",
		description:
			"Understand GridLayout constructors, rows, columns, and gaps in Java Swing.",
	},
	alternates: {
		canonical: "/GUI/layouts/gridlayout",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}
