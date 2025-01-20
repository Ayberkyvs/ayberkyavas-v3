import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import "@/app/globals.css";

const Layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
	return (
		<>
			<Header />
			<Background>
				<main>{children}</main>
			</Background>
			<Footer />
		</>
	);
};

export default Layout;
