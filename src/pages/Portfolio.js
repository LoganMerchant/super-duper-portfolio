import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <section>
      <div className="title">
        <h2>Portfolio</h2>
      </div>
      <Container>
        <Project />
      </Container>
    </section>
  );
}

export default Portfolio;
