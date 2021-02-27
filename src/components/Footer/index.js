import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/LoganMerchant"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="4x" />
      </a>
      <a
        href="https://www.linkedin.com/in/loganmerchant/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
      <a
        href="https://www.facebook.com/Vivalalogan/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
      </a>
    </footer>
  );
}

export default Footer;
