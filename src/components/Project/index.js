import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const [projects] = useState([
    {
      name: "AuthorHub",
      description: `A full-stack application for lovers of literature to gather together and collaborate on new works. Built with React, GraphQL, Express, MongoDB, NodeJS, and Bootstrap.`,
      linkToProject: "https://vast-gorge-54301.herokuapp.com/",
      linkToGitHub: "https://github.com/ChazzKreutzkamp/author-hub",
      linkToImage: require("../../assets/images/project-images/authorhub.gif"),
    },
    {
      name: "All Leaf, No Beef",
      description:
        "A full-stack gardening site for people entering into the world of home-grown produce. Built with Handlebars, CSS, JavaScript, Express, MySQL, Sequelize, NodeJS, and Twilio.",
      linkToProject: "https://tranquil-brushlands-81839.herokuapp.com/",
      linkToGitHub: "https://github.com/LoganMerchant/all-leaf-no-beef",
      linkToImage: require("../../assets/images/project-images/all-leaf-no-beef.gif"),
    },
    {
      name: "Scratching Your Travel Itch",
      description:
        "A travel-at-home application that lets users explore more about a country by simply typing it's name into the search bar. Built with HTML, CSS, JavaScript, and several third-party APIs.",
      linkToProject:
        "https://loganmerchant.github.io/scratching-your-travel-itch/",
      linkToGitHub:
        "https://github.com/LoganMerchant/scratching-your-travel-itch",
      linkToImage: require("../../assets/images/project-images/scratching-your-travel-itch.gif"),
    },
    {
      name: "FeedMe-a-ReadMe",
      description:
        "A CLI Application to quickly create a high-quality readme. Built with NodeJS and Inquirer.",
      linkToProject: "https://github.com/LoganMerchant/feedme-a-readme",
      linkToGitHub: "https://github.com/LoganMerchant/feedme-a-readme",
      linkToImage: require("../../assets/images/project-images/feedme-a-readme.gif"),
    },
    {
      name: "Rain Check",
      description:
        "A weather app that displays the current weather and a 5-day forecast for any city. Built with HTML, CSS, JavaScript, Bootstrap, MomentJS, Font Awesome, and Open Weather Map's API.",
      linkToProject: "https://loganmerchant.github.io/rain-check/",
      linkToGitHub: "https://github.com/LoganMerchant/rain-check",
      linkToImage: require("../../assets/images/project-images/raincheck.gif"),
    },
    {
      name: "Password Generator",
      description:
        "Generates a password based on the parameters given by the user. Built with HTML, CSS, & JavaScript.",
      linkToProject: "https://loganmerchant.github.io/password-generator/",
      linkToGitHub: "https://github.com/LoganMerchant/password-generator",
      linkToImage: require("../../assets/images/project-images/password-generator.gif"),
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
                        size="2x"
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
