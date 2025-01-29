import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<Header />
			<Background>
				<main>{children}</main>
			</Background>
			<Footer />
			<Analytics />
			<SpeedInsights />
		</>
	);
};

export default Layout;
