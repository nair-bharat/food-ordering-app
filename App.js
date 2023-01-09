import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Contents from "./src/components/Contents";

const Layout = () => {
  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
