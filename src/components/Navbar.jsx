import React from 'react';
import {navLinks} from "../../constents/index.js";


function Navbar(props) {
    return (
        <nav>
            <div>
                <a href="/">Home</a>
                <ul>
                    {/* eslint-disable-next-line no-undef */}
                    {navLinks.map((navlink, index) => (
                        <li key={index}>{navlink}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;