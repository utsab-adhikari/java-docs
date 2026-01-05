export const metadata = {
	title: {
		default: "GUI Programming with AWT and Swing",
		template: "%s · Java Programming Documentation",
	},
	description:
		"Overview of Java GUI programming using AWT and Swing, including core components like JFrame, JPanel, buttons, and layout managers such as FlowLayout, GridLayout, BorderLayout, and GridBagLayout.",
	keywords: [
		"Java GUI programming",
		"Java AWT tutorial",
		"Java Swing tutorial",
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
		title: "GUI Programming with AWT and Swing",
		description:
			"Learn the basics of Java GUI development using AWT and Swing, including core components and layout managers for building desktop applications.",
		type: "article",
		locale: "en_US",
		siteName: "Java Programming Documentation",
	},
	twitter: {
		card: "summary_large_image",
		title: "GUI Programming · AWT and Swing",
		description:
			"Explore AWT and Swing components and layouts to design graphical user interfaces in Java.",
	},
	alternates: {
		canonical: "/GUI/swing-awt",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

