

import React from "react";
import styled from "styled-components";

const SpeechBubbleStyles = styled.div`
	font-family: 'Roboto Mono', monospace;
	font-size: .9em;
	position: relative;
	background: var(--grey);
	border-radius: .4em;
	grid-row: 3;
	grid-column: 4;
	position: relative;
	bottom: 0;
	right: 10px;
	height: 50px;
	width: 50px;

	display: flex;
	  align-items: center;
	  justify-content: center;

	grid-column: 4;
	grid-row: 3 / 4;
	height: 25%;

	text-align: center;
	text-transform: uppercase;
	width: 40%;
	z-index: 2;
	position: relative;
	right: 145px;
	top: 60%;
	padding: 1%;
	
	&:after {
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		width: 0;
		height: 0;
		border: 20px solid transparent;
		border-left-color: var(--grey);
		border-right: 0;
		border-top: 0;
		margin-top: -10px;
		margin-right: -20px;
	}

	@media (max-width: 1300px) {
		right: 120px;
		top: 75%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: .8em;
		grid-row: 5;
		grid-column: 4;
		top: 80%;
		height: 20%;
		right: 115px;
	}
	@media (max-width: 600px) {	
		font-size: .8em;
		grid-row: 7;
		grid-column: 1;
		padding: auto 1px;
		height: 14%;
		width: 26%;
		left: 125px;
		top: 85%;
	}
	@media (max-width: 479px) {
		font-size: .8em;
		grid-row: 7;
		grid-column: 1;
		height: 15%;
		width: 20%;
		left: 60px;
		top: 90%;
	}
`;


export const SpeechBubble = () => {
	return (
		<SpeechBubbleStyles>
			Let's chat!
		</SpeechBubbleStyles>
	);
}



