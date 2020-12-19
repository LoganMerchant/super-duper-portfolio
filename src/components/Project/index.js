import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  return (
    <Row>
      <Col sm={4}>
        <Card className="project-card">
          <Card.Img
            src={require("../../assets/images/project-images/demo.gif").default}
            alt="here we are"
            className="card-img"
          />
          <div className="card-overlay">
            <Card.ImgOverlay>
              <Card.Title>
                <h1>
                  <a
                    href="https://tranquil-brushlands-81839.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    All Leaf, No Beef
                  </a>
                </h1>
              </Card.Title>
              <Card.Subtitle>
                <h3>
                  <a
                    href="https://github.com/LoganMerchant/all-leaf-no-beef"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </h3>
              </Card.Subtitle>
              <Card.Text>Built with Express.js, MySQL, and More!</Card.Text>
            </Card.ImgOverlay>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
