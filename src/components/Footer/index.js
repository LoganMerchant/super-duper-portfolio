import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/LoganMerchant">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="https://www.linkedin.com/in/loganmerchant/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/bizzybark">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </footer>
  );
}

export default Footer;
