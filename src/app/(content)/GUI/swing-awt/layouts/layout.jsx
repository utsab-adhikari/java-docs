export const metadata = {
	title: "Swing Layouts · GUI Programming",
	description:
		"Overview of common Swing layout managers in Java GUI programming, including FlowLayout, GridLayout, GridBagLayout, BorderLayout, and CardLayout.",
	keywords: [
		"Java Swing layouts",
		"Java FlowLayout",
		"Java GridLayout",
		"Java GridBagLayout",
		"Java BorderLayout",
		"CardLayout in Java",
		"Java layout managers",
		"Pokhara University Java GUI layouts",
	],
	openGraph: {
		title: "Swing Layouts · GUI Programming",
		description:
			"Learn how Swing layout managers like FlowLayout, GridLayout, GridBagLayout, and BorderLayout arrange components in a Java GUI.",
		type: "article",
		section: "GUI Programming",
	},
	twitter: {
		card: "summary_large_image",
		title: "Swing Layouts · GUI Programming",
		description:
			"Introduction to key Swing layout managers and how they control component placement.",
	},
	alternates: {
		canonical: "/GUI/swing-awt/layouts",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

