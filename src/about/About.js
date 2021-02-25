

import React from "react";
import Typewriter from "./Typewriter";
import "./About.css";


export const About = () => {

	return (
		<div className="magazine">
			<div className="title">Hello</div>
			<div className="content1">
				<h1>About Me</h1>
				<Typewriter inputStrings={["I am passionate about connecting people with solutions. What began as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time."]} />
				{/*<p>I am passionate about connecting people with solutions. What began
				as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time.</p>*/}
			</div>
			<div className="content2">
				<p>Happiness is ... GT Cinetype, baking, Art Deco, mint-chip gelato, traveling, art direction, Bowie, retro, record-collecting, JavaScripting
				</p>
			</div>
			<div className="quote">A ship in harbor is safe - but that is not what ships are built for.</div>
			<div className="sunimage"></div>
			<div className="drawing"></div>
			<a href="mailto:lizharkins@gmail.com?Subject=Hi, Liz!" target="_top" className="invite aboutemph">
				Electronic mail me!
			</a>
		</div>
	);
	
}

