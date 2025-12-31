export const metadata = {
	title: "GridBagLayout Basics · GUI Layouts",
	description:
		"Introduction to GridBagLayout in Java Swing with a simple form using labels, text fields, and buttons.",
	keywords: [
		"Java GridBagLayout example",
		"Swing GridBagLayout basics",
		"constraint-based layout manager",
		"Pokhara University GridBagLayout",
	],
	openGraph: {
		title: "GridBagLayout Basics · GUI Layouts",
		description:
			"Learn how GridBagLayout positions components using GridBagConstraints in a flexible grid.",
		type: "article",
		section: "GUI Programming",
	},
	twitter: {
		card: "summary_large_image",
		title: "GridBagLayout Basics · GUI Layouts",
		description:
			"Understand GridBagLayout, virtual grid positions, and constraints in Java Swing.",
	},
	alternates: {
		canonical: "/GUI/layouts/gridbaglayout",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}
