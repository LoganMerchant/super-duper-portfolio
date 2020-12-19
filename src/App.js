import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Portfolio from "./components/Portfolio";

function App() {
  const [navItems] = useState(["About", "Portfolio", "Contact", "Resume"]);

  const [currentNavItem, setCurrentNavItem] = useState("About");

  function renderPage() {
    switch (currentNavItem) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  }

  return (
    <div>
      <Nav setCurrentNavItem={setCurrentNavItem} navItems={navItems} />
      <main>
        {renderPage(currentNavItem)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
