import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Resume() {
  return (
    <Row>
      <Col sm={12} md={6}>
        <h1 style={{ paddingBottom: "2rem" }}>Resume</h1>
        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6+</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Metro_4</li>
        </ul>

        <h2>Back-End Proficiencies</h2>
        <ul>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>Express.js</li>
          <li>Sequelize</li>
          <li>Mongoose</li>
          <li>Node.js</li>
        </ul>
      </Col>

      <Col sm={12} md={6}>
        <h3>Click the image to download a PDF!</h3>
        <a
          href={require("../assets/downloadable-files/resume.pdf").default}
          download="Logan_Merchant_Resume"
        >
          <Image
            fluid
            src={
              require("../assets/images/misc/resume-screenshot-1.png").default
            }
            id="resume-thumbnail"
          />
        </a>
      </Col>
    </Row>
  );
}

export default Resume;
