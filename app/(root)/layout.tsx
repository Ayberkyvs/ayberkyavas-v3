import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <SanityLive />
      <Footer />
    </>
  );
};

export default Layout;
