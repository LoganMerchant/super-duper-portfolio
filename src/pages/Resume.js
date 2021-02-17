import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <Row>
      <Col sm={12} md={6}>
        <h1>Resume</h1>
        <p>
          Download a PDF version{" "}
          <a
            href={require("../assets/downloadable-files/resume.pdf").default}
            download="LoganMerchant-Resume"
          >
            <span>here</span>
          </a>
          !
        </p>
      </Col>

      <Col sm={12} md={6}>
        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <h2>Back-End Proficiencies</h2>
        <ul>
          <li>SQL Databases</li>
          <li>NoSQL Databases</li>
          <li>Express.js</li>
          <li>Node.js</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Resume;
