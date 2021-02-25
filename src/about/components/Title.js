

import React from "react";
import Typewriter from "./Typewriter";
import styled from "styled-components";
const TitleStyles = styled.div`
	align-items: end;
	background: var(--dark-accent-grey);
	border-right: 1px solid var(--light-grey);
	border-bottom: 1px solid var(--light-grey);
	color: var(--grey);
	display: grid;
	font-family: 'Barriecito', cursive;
	font-weight: normal;
	font-size: calc(10px + 2.6vw);
	grid-row: 1;
	grid-column: 1 / 3;
	justify-content: end;
	padding-bottom: 20px;
	padding-right: 40px;
	text-transform: uppercase;
	z-index: 3;

	@media only screen and (max-width: 73em) {
		font-size: calc(10px + 3.6vw);
		grid-row: 1;
	}
`;


export const Title = () => {

	return (
		<TitleStyles>
			<Typewriter inputStrings={["Hello"]} />
		</TitleStyles>
	);
	
}



