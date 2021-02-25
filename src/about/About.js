

import React from "react";
import { Title } from "./components/Title";
import { Supplementary } from "./components/Supplementary";
import { Quote } from "./components/Quote";
import { Invite } from "./components/Invite";
import "./About.css";


export const About = () => {

	return (
		<div className="magazine">
			<Title />
			<div className="content1">
				<h1>About Me</h1>
				<p>I am passionate about connecting people with solutions. What began
				as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time.</p>
			</div>
			<Supplementary />
			<Quote />
			<div className="synthwave"></div>
			<div className="drawing"></div>
			<Invite />
		</div>
	);

}

