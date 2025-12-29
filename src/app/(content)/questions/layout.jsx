export const metadata = {
	title: "Questions & Practice · Advanced Programming with Java",
	description:
		"Chapter-wise theory questions and practice program sets for Advanced Programming with Java, useful for revision, tutorials, and exam preparation.",
	keywords: [
		"Java theory questions",
		"Java practice questions",
		"Java chapter-wise questions",
		"Java exam preparation",
		"Pokhara University Java questions",
	],
	openGraph: {
		title: "Questions & Practice · Advanced Programming with Java",
		description:
			"Browse chapter-wise Java theory questions and practice programs to test and strengthen your understanding.",
		type: "article",
		section: "Question Bank",
	},
	twitter: {
		card: "summary_large_image",
		title: "Questions & Practice · Advanced Programming with Java",
		description:
			"Chapter-wise Java theory and programming questions for quick revision.",
	},
	alternates: {
		canonical: "/questions",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

