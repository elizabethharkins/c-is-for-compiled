

import React from "react";
import { Title } from "./components/Title";
import { Primary } from "./components/Primary";
import { Supplementary } from "./components/Supplementary";
import { Quote } from "./components/Quote";
import { Synthwave } from "./components/Synthwave";
import { Drawing } from "./components/Drawing";
import { Invite } from "./components/Invite";
import styled from "styled-components";
import { device } from "../device";
const ZineStyles = styled.div`
	background: #e5e5e5;
	display: grid;
	grid-template-rows: 130px 2fr 1fr;
	grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
	height: 52em;
	max-width: 85em;
	outline: 6px solid #121219;
	width: 95vw;
	margin: 5% auto;
	margin-bottom: 8%;

	@media ${device.laptopML} {
		max-width: unset;
		grid-template-rows: 120px 4fr 3fr 3fr 1fr 0.5fr;/*130px 2fr 1fr*/
		grid-template-rows: .5fr 2fr 1.25fr 1.25fr;
		grid-template-columns: 99vw; /*1.5fr 1fr 1fr 1.5fr*/
		height: 1800px;
		width: 99vw;
		margin: 3em auto 0 auto;
		outline: none;
	}
`;


export const About = () => {

	return (
		<ZineStyles>
			<Title />
			<Primary />
			<Supplementary />
			<Quote />
			<Synthwave />
			<Drawing />
			<Invite />
		</ZineStyles>
	);

}

