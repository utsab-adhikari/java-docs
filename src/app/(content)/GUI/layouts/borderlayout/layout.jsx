export const metadata = {
	title: "BorderLayout Basics · GUI Layouts",
	description:
		"Introduction to BorderLayout in Java Swing with an example placing buttons in five regions.",
	keywords: [
		"Java BorderLayout example",
		"Swing BorderLayout basics",
		"BorderLayout regions",
		"Pokhara University BorderLayout",
	],
	openGraph: {
		title: "BorderLayout Basics · GUI Layouts",
		description:
			"Learn how BorderLayout divides a container into NORTH, SOUTH, EAST, WEST, and CENTER regions.",
		type: "article",
		section: "GUI Programming",
	},
	twitter: {
		card: "summary_large_image",
		title: "BorderLayout Basics · GUI Layouts",
		description:
			"Understand BorderLayout gaps and region placement in Java Swing.",
	},
	alternates: {
		canonical: "/GUI/layouts/borderlayout",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}
