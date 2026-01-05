export const metadata = {
	title: {
		default: "Java GUI Programming",
		template: "%s · Java Programming Documentation",
	},
	description:
		"High-level overview of Java GUI programming in Java, focusing on classic Swing & AWT as well as modern JavaFX concepts.",
	keywords: [
		"Java GUI programming",
		"Java AWT tutorial",
		"Java Swing tutorial",
		"JavaFX tutorial",
		"Java JFrame JPanel JButton",
		"Java radio button checkbox",
		"Swing components and containers",
		"Swing layout managers",
		"FlowLayout GridLayout BorderLayout",
		"GridBagLayout in Java",
		"Pokhara University Java GUI",
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
		title: "Java GUI Programming Overview",
		description:
			"Explore Java GUI development paths using AWT/Swing and JavaFX, and choose where to start for labs and exams.",
		type: "article",
		locale: "en_US",
		siteName: "Java Programming Documentation",
	},
	twitter: {
		card: "summary_large_image",
		title: "Java GUI Programming Overview",
		description:
			"Overview of Java GUI programming with Swing, AWT, and JavaFX.",
	},
	alternates: {
		canonical: "/GUI",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

