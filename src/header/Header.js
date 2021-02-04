

import React from "react";
import "./Header.css";

const Header = () => (
	<nav className="navbar">
    	<span className="navbar-toggle" id="js-navbar-toggle">
        	+
    	</span>
    	<a href="mailto:eliz@betsthewebdev.com?Subject=Hi, Liz!" target="_top" rel="noreferrer" className="contact">Elizabeth Harkins
    	</a>
	    <ul className="main-nav" id="js-menu">
	        <li>
	          	<a href="https://www.linkedin.com/in/emharkins/" target="_blank" rel="noreferrer" className="nav-links">in</a>
	        </li>
	        <li>
	          	<a href="https://github.com/elizabethharkins" target="_blank" rel="noreferrer" className="nav-links">hub</a>
	        </li>
	        <li>
	          	<a href="https://twitter.com/_lizzith" target="_blank" rel="noreferrer" className="nav-links">chirp</a>
	        </li>
	        <li>
	          	<a href="about/index.html" className="nav-links">About</a>
	        </li>
	        <li>
	          	<a href="the-collection/index.html" className="nav-links">The Collection</a>
	        </li>
	    </ul>
   	</nav>
);

export default Header;





