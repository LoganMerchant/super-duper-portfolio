import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  const [navItems] = useState(["About", "Portfolio", "Contact"]);

  const [currentNavItem, setCurrentNavItem] = useState("About");

  function renderPage() {
    switch (currentNavItem) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return "About";
    }
  }

  return (
    <>
      <Nav
        currentNavItem={currentNavItem}
        setCurrentNavItem={setCurrentNavItem}
        navItems={navItems}
      />
      <main>
        <Container>{renderPage(currentNavItem)}</Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
