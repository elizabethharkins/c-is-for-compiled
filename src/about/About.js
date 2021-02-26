

import React from "react";
import { Title } from "./components/Title";
import { Primary } from "./components/Primary";
import { Supplementary } from "./components/Supplementary";
import { Quote } from "./components/Quote";
import { Synthwave } from "./components/Synthwave";
import { Drawing } from "./components/Drawing";
import { Invite } from "./components/Invite";
import "./About.css";


export const About = () => {

	return (
		<div className="magazine">
			<Title />
			<Primary />
			<Supplementary />
			<Quote />
			<Synthwave />
			<Drawing />
			<Invite />
		</div>
	);

}

