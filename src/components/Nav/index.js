import React, { useEffect } from "react";

function Nav({ currentNavItem, setCurrentNavItem, navItems }) {
  useEffect(() => {
    document.title = `${currentNavItem} | Logan Merchant`;
  }, [currentNavItem]);

  return (
    <header>
      <h1 className="home">Logan Merchant</h1>
      <nav>
        {/* Pages */}
        <ul className="navigation">
          {navItems.map((item, index) => (
            <a
              href={"#" + item}
              key={index}
              className={`${currentNavItem === item && "navActive"}`}
              onClick={() => setCurrentNavItem(item)}
            >
              <h3>{item}</h3>
            </a>
          ))}

          {/* Download resume */}
          <a
            href={require("../../assets/downloadable-files/resume.pdf").default}
            download="Logan_Merchant_Resume"
          >
            <h3>Resume</h3>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
