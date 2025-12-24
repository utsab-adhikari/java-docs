export const metadata = {
	title: "General Programs · Chapter 01",
	description:
		"Solved Java programs based on Chapter 01 concepts, including array processing, prime checks, and other exam-style questions.",
	keywords: [
		"Java general programs",
		"Java array sum and average",
		"Java prime number program",
        "Java fibonacci series program",
        "Java vowel checker program",
        "Java pattern printing programs",
		"Java exam questions",
		"Pokhara University Java programs",
	],
	openGraph: {
		title: "Chapter 01 · General Java Programs",
		description:
			"Practice key Java concepts with worked examples such as array sum/average and prime number checks.",
		type: "article",
		section: "Chapter 01",
	},
	twitter: {
		card: "summary_large_image",
		title: "General Programs · Chapter 01",
		description:
			"Explore solved Java programs for arrays, primes, and more based on Chapter 01.",
	},
	alternates: {
		canonical: "/chapter-01/general-programs",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

