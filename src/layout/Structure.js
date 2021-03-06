import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Routes from "./Routes";

const Structure = () => {
  return (
    <div className="component-wrap">
      <Navigation />
      <main className="z-0 p-3 m-auto">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default Structure;
