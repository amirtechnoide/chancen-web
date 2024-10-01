import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Weblayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Weblayout;
