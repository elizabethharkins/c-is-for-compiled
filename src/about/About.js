

import React from "react";
import { Title } from "./components/Title";
import { Primary } from "./components/Primary";
import { Supplementary } from "./components/Supplementary";
import { Quote } from "./components/Quote";
import { Invite } from "./components/Invite";
import "./About.css";


export const About = () => {

	return (
		<div className="magazine">
			<Title />
			<Primary />
			<Supplementary />
			<Quote />
			<div className="synthwave"></div>
			<div className="drawing"></div>
			<Invite />
		</div>
	);

}

