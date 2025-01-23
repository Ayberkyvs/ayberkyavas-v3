import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "@/app/globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Ayberk Yavas",
		default: "Ayberk Yavas",
	},
	description:
		"Professional Front-End Developer specializing in React, Next.js, and TypeScript, delivering high-performance, responsive, and SEO-optimized websites. With expertise in modern tools like Tanstack Query, Zustand, and Webpack, I craft scalable solutions tailored to your business needs. From dynamic web applications to user-friendly interfaces, I focus on quality, security, and seamless user experiences. Let's bring your vision to life—partner with me for reliable and innovative web development solutions!",
	applicationName: "Ayberk Yavas",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Front-End Developer",
		"Ayberk Yavas",
		"Websitesi Yaptirmak",
		"Next.js",
		"React",
		"JavaScript",
		"TypeScript",
		"CSS",
		"HTML",
	],
	authors: { name: "Ayberk Yavas", url: "https://ayberkyavas.com" },
	creator: "Ayberk Yavas",
	publisher: "Ayberk Yavas",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://ayberkyavas.com",
		siteName: "Ayberk Yavas",
		title: "Ayberk Yavas",
		description:
			"Professional Front-End Developer specializing in React, Next.js, and TypeScript, delivering high-performance, responsive, and SEO-optimized websites. With expertise in modern tools like Tanstack Query, Zustand, and Webpack, I craft scalable solutions tailored to your business needs. From dynamic web applications to user-friendly interfaces, I focus on quality, security, and seamless user experiences. Let's bring your vision to life—partner with me for reliable and innovative web development solutions!",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={`${outfit.variable} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
