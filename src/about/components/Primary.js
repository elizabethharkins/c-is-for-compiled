

import React from "react";
import styled from "styled-components";
import { device } from "../device";
const PrimaryStyles = styled.div`
	border-right: 6px solid #121219;
	border-radius: 0.125em;
	box-shadow: var(--content-box-shadow);
	display: block;
	grid-row: 2 / 4;
	grid-column: 1 / 2;
	text-align: left;
	z-index: 2;

	background-color: #a9a9a9;
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
	padding: 20px 20px;

	h1 {
		background: #fff;
		color: var(--dark-grey);
		margin-bottom: 1rem;
		padding: 0.5%;
		transform: rotate(-1deg);
		width: fit-content;
	}

	p {
		border-radius: 0.125em;
		background: #fff;
		color: var(--dark-grey);
		padding: 0.5%;
	}

	@media ${device.laptopML} {
		box-shadow: 0 5px 50px -5px orange;
    	border: 1px solid var(--blue-magenta);
    	margin: 2% 1%;
		outline: 6px solid #121219;
		grid-row: 3;
		grid-column: 1;
		padding-top: 50px;
		z-index: 3;

		h1 {
			margin-bottom: 1em;
		}

		h1, 
		p {
			padding: 2%;
		}
	}
`;


export const Primary = () => {

	return (
		<PrimaryStyles>
			<h1>About Me</h1>
			<p>I am passionate about connecting people with solutions. What began as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time.</p>
		</PrimaryStyles>
	);
	
}



