import "easymde/dist/easymde.min.css";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main>{children}</main>;
};

export default Layout;
