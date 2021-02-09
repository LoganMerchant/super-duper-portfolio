import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Project from "../components/Project";

function Portfolio() {
  return (
    <>
      <Row style={{ paddingBottom: "2rem" }}>
        <Col>
          <h1>Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Project />
      </Row>
    </>
  );
}

export default Portfolio;
