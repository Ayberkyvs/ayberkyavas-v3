import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
		"Creative Front-End Developer with expertise in React and the MERN stack. Experienced in building scalable applications and delivering end-to-end solutions. Skilled in modern JavaScript tools like Tanstack Query, Zustand, and Webpack. Focused on performance optimization, responsive design, and seamless user experiences. Passionate about staying up-to date with industry trends and collaborating with cross functional teams to create high-quality web applications.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} ${inter.variable} antialiased scroll-smooth`}>
				<Header scrollIndicator />
				<Background>{children}</Background>
				<Footer />
			</body>
		</html>
	);
}
