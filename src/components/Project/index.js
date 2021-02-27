import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const [projects] = useState([
    {
      name: "AuthorHub",
      description: `A MERN progressive web application that is best described as "The GitHub for Authors".`,
      linkToProject: "https://vast-gorge-54301.herokuapp.com/",
      linkToGitHub: "https://github.com/ChazzKreutzkamp/author-hub",
      linkToImage: require("../../assets/images/project-images/authorhub.gif"),
    },
    {
      name: "All Leaf, No Beef",
      description:
        "A personal gardening tracking website, built with Express.js, a MySQL database, and More!",
      linkToProject: "https://tranquil-brushlands-81839.herokuapp.com/",
      linkToGitHub: "https://github.com/LoganMerchant/all-leaf-no-beef",
      linkToImage: require("../../assets/images/project-images/all-leaf-no-beef.gif"),
    },
    {
      name: "Scratching Your Travel Itch",
      description:
        "A travel-at-home app that lets users explore more about a country.",
      linkToProject:
        "https://loganmerchant.github.io/scratching-your-travel-itch/",
      linkToGitHub:
        "https://github.com/LoganMerchant/scratching-your-travel-itch",
      linkToImage: require("../../assets/images/project-images/scratching-your-travel-itch.gif"),
    },
    {
      name: "FeedMe-a-ReadMe",
      description:
        "A command line application to quickly create high-quality READMEs.",
      linkToProject: "https://github.com/LoganMerchant/feedme-a-readme",
      linkToGitHub: "https://github.com/LoganMerchant/feedme-a-readme",
      linkToImage: require("../../assets/images/project-images/feedme-a-readme.gif"),
    },
    {
      name: "Password Generator",
      description:
        "Generates a password based on the parameters given by the user.",
      linkToProject: "https://loganmerchant.github.io/password-generator/",
      linkToGitHub: "https://github.com/LoganMerchant/password-generator",
      linkToImage: require("../../assets/images/project-images/password-generator.gif"),
    },
    {
      name: "Rain Check",
      description:
        "Displays the current weather and 5-day forecast for a searched city.",
      linkToProject: "https://loganmerchant.github.io/rain-check/",
      linkToGitHub: "https://github.com/LoganMerchant/rain-check",
      linkToImage: require("../../assets/images/project-images/raincheck.gif"),
    },
  ]);

  return (
    <>
      {projects.map((project, i) => (
        <Col sm={12} md={6} key={i}>
          <Card className="project-card">
            <Card.Img
              src={project.linkToImage.default}
              alt={`Demo of ${project.name}`}
              className="card-img"
            />
            <div className="card-overlay">
              <Card.ImgOverlay>
                <Card.Title>
                  <h3 className="project-name">
                    <a
                      href={project.linkToProject}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>
                    <a
                      href={project.linkToGitHub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="project-icon"
                      />
                    </a>
                  </h4>
                </Card.Subtitle>
                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>
              </Card.ImgOverlay>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Project;
