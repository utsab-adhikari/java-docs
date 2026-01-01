export const metadata = {
	title: {
		default: "Chapter 03: Building Components using Swing and JavaFX",
		template: "%s · Java Programming Documentation",
	},
	description:
		"Chapter 03 introduces AWT, Swing, and JavaFX for building graphical user interfaces in Java, covering layout managers, controls, menus, dialogs, event handling, and modern UI design.",
	keywords: [
		"Java Swing tutorial",
		"JavaFX vs Swing",
		"Java AWT introduction",
		"Swing components and containers",
		"Swing layout managers",
		"Java GUI controls",
		"Swing menus and tooltips",
		"Swing dialogs and frames",
		"Java event handling",
		"Java listener interfaces",
		"Java action events",
		"JavaFX layouts",
		"JavaFX UI controls",
		"Pokhara University Java",
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
		title: "Chapter 03: Building Components using Swing and JavaFX",
		description:
			"Learn how to build interactive graphical user interfaces in Java using AWT, Swing, and JavaFX, including layouts, controls, menus, dialogs, and event handling.",
		type: "article",
		locale: "en_US",
		siteName: "Java Programming Documentation",
	},
	twitter: {
		card: "summary_large_image",
		title: "Chapter 03 · Building Components using Swing and JavaFX",
		description:
			"Explore Swing and JavaFX for Java GUI development: layout management, controls, menus, dialogs, and event-driven programming.",
	},
	alternates: {
		canonical: "/chapter-03",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}
