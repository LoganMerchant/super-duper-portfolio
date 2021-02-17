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
      <a href="https://github.com/LoganMerchant">
        <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/loganmerchant/">
        <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
      </a>
      <a href="https://www.facebook.com/Vivalalogan/">
        <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" />
      </a>
    </footer>
  );
}

export default Footer;
