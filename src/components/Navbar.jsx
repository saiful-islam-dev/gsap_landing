import React from "react";
import { navLinks } from "../../constants/index.js";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
