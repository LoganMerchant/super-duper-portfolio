import React, { useEffect } from "react";

function Nav({ currentNavItem, setCurrentNavItem, navItems }) {
  useEffect(() => {
    document.title = `${currentNavItem} | Logan Merchant`;
  }, [currentNavItem]);

  return (
    <header>
      <h2>
        <a href="/">Logan Merchant</a>
      </h2>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <span onClick={() => setCurrentNavItem(item)}>{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
