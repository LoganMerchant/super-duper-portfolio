import React, { useEffect } from "react";

function Nav({ currentNavItem, setCurrentNavItem, navItems }) {
  useEffect(() => {
    document.title = `${currentNavItem} | Logan Merchant`;
  }, [currentNavItem]);

  return (
    <header>
      <h1 className="home">Logan Merchant</h1>
      <nav>
        <ul className="navigation">
          {navItems.map((item, index) => (
            <li key={index} className={`${ currentNavItem === item && "navActive"}`}>
              <h3 onClick={() => setCurrentNavItem(item)}>{item}</h3>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
