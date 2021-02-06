

import React from "react";
import "./About.css";


export const About = () => {
	return (
		<div className="magazine">

			<div className="title">Hello</div>

			<div className="content1">
				<h1>About Me</h1>
				<p>I am passionate about connecting people with solutions. What began
				as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time.</p>
			</div>

			<div className="content2">
				<p>It's the little things ... GT Cinetype, Sublime Text, baker, people person, Art Deco, mint-chip gelato, travel, art direction, sewing, Bowie, retro, record-collecting, South of the James Market, Sub Rosa Bakery, JavaScripting
				</p>
			</div>

			<div className="quote" data-type data-type-min="100" data-type-max="300" data-text="A ship in harbor is safe - but that is not what ships are built for.">A ship in harbor is safe - but that is not what ships are built for.</div>

			<div className="image"></div>
			<div className="drawing"></div>
			<a href="mailto:eliz@betsthewebdev.com?Subject=Hi, Liz!" target="_top" className="invite emph">
				Electronic mail me!
    		</a>
		</div>
	);
}



