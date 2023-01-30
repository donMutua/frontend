import { ReactNode } from "react";

import Footer from "../Footer/Footer";
import NavBar from "../Navigation/Nav";

interface LayoutProps {
  children: ReactNode;
  loggedIn: boolean;
}

const Layout = ({ children, loggedIn }: LayoutProps) => {
  return (
    <>
      <NavBar loggedIn={loggedIn} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
