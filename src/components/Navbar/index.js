import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Navbar({ currentNavItem, setCurrentNavItem, navItems }) {
  // Sets state to keep track of the window's width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Sets the tab title depending on the page
    document.title = `${currentNavItem} | Logan Merchant`;

    // Event listener and cleanup to keep track of changes to window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentNavItem, windowWidth]);

  return (
    <>
      {windowWidth > 767 && <h1 className="title">Logan Merchant</h1>}
      <Nav justify className="navigation">
        {/* Displays if viewport width is more than 767 */}
        {windowWidth > 767 ? (
          <>
            {/* Pages */}
            {navItems.map((item, index) => (
              <Nav.Item
                key={index}
                className={`
            navItem 
            ${currentNavItem === item && "navActive"} 
            `}
                onClick={() => setCurrentNavItem(item)}
              >
                <h2>{item}</h2>
              </Nav.Item>
            ))}

            {/* Download resume */}
            <Nav.Item>
              <a
                href={
                  require("../../assets/downloadable-files/resume.pdf").default
                }
                download="Logan_Merchant_Resume"
              >
                <h2>
                  Resume{" "}
                  <span>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </span>
                </h2>
              </a>
            </Nav.Item>
          </>
        ) : (
          // Displays if viewport width is small
          <NavDropdown
            title={<FontAwesomeIcon icon={faBars} size="lg" />}
            id="nav-dropdown"
            style={{ textAlign: "left" }}
          >
            {navItems.map((item, index) => (
              <NavDropdown.Item
                key={index}
                onClick={() => setCurrentNavItem(item)}
              >
                <p>{item}</p>
              </NavDropdown.Item>
            ))}

            <NavDropdown.Item
              href={
                require("../../assets/downloadable-files/resume.pdf").default
              }
              download="Logan_Merchant_Resume"
            >
              <p>
                Resume{" "}
                <span>
                  <FontAwesomeIcon icon={faFilePdf} />
                </span>
              </p>
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Nav>
      {windowWidth < 767 && (
        <h1 className="title" style={{ paddingTop: "0" }}>
          Logan Merchant
        </h1>
      )}
    </>
  );
}

export default Navbar;
