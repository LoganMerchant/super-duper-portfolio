import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <>
      <Row style={{ paddingBottom: "2rem" }}>
        <Col style={{ alignSelf: "center" }} sm={12} md={6}>
          <h3>Front-End Proficiencies</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6+</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>Bootstrap</li>
            <li>Metro_4</li>
          </ul>

          <h3>Back-End Proficiencies</h3>
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
          <Image
            fluid
            roundedCircle
            src={require("../assets/images/misc/self.jpg").default}
            alt="Logan posing in front of Lake Michigan."
          />
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p>
            Full-stack web developer with a passion for learning and experience
            in time-management while working long hours. I’ve studied for
            several semesters at Salt Lake Community College and have recently
            obtained a web development certificate from the University of Utah,
            which focused on technologies such as MongoDB, Express, React, and
            Node.
            <br />
            <br />
            Known for being a detail-oriented developer, I helped team members
            debug and better understand complex portions of code, while also
            writing much of my own. I assisted in creating AuthorHub, a place
            where authors, editors, publishers, and anyone else who loves
            literature could gather together and write all types of stories. I
            implemented GraphQL on the backend, coded several React components,
            and created pages for editing a project and any of it’s chapters. I
            look forward to being able to use my skills as part of a team that
            enjoys creating robust web applications to user needs.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
