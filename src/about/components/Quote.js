

import React from "react";
import Typewriter from "./Typewriter";
import styled from "styled-components";
const QuoteStyles = styled.div`
	align-self: end;
	background: rgba(0,0,0,0.5);
	border-left: 10px solid var(--med-light-yellow);
	bottom: 8%;
	color: var(--med-light-yellow);
	font-family: 'Droid Serif', serif;
	font-size: 1.5em;
	grid-row: 2;
	grid-column: 4;
	justify-content: start;
	padding: 10px;
	position: relative;
	right: 125px;
	text-transform: uppercase;
	z-index: 3;
	
	@media only screen and (min-width: 240px) and (max-width: 479px) {
		left: 50px;
	}
	@media only screen and (max-width: 73em) {
		bottom: 11%;
		font-size: calc(12px + 2.3vw);
		grid-row: 2;
		grid-column: 1;
		left: 75px;
		width: 66%;
	}
`;


export const Quote = () => {

	return (
		<QuoteStyles>
			<Typewriter inputStrings={["A ship in harbor is safe - but that is not what ships are built for."]} />
		</QuoteStyles>
	);
	
}



