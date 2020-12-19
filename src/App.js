import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Project />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
