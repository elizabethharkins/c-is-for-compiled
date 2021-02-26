

import React from "react";
import synthwave from '../img/synthwave.jpg';
import styled from "styled-components";
const SynthwaveStyles = styled.div`
	background-image: url(${synthwave});
	background-position: left center;
	background-repeat: no-repeat;
	background-size: cover;
	grid-row: 1 / 3;
	grid-column: 2 / 5;
	margin: 0 0 20px 20px;
	z-index: 2;

	@media (max-width: 73em) {
		background-size: auto;
		grid-row: 2;
		grid-column: 1;
		margin: 0;
	}
`;


export const Synthwave = () => {

	return (
		<SynthwaveStyles></SynthwaveStyles>
	);
	
}



