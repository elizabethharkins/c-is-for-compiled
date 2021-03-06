

import React from "react";
import drawing from '../img/mebygv.png';
import styled from "styled-components";
import { device } from "../../device";
const DrawingStyles = styled.div`
	background-image: url(${drawing});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: 125%;
	box-shadow: 0 5px 50px -5px orange;
    border: 1px solid var(--blue-magenta);
	grid-row: 2 / 4;
	grid-column: 1;
	margin: 0;
	padding: 0;
	z-index: 2;

	@media ${device.laptopML} {	
		background-position: auto;
		background-repeat: no-repeat;
		background-size: contain;
		box-shadow: none;
    	border: none;
		grid-row: 4;
		grid-column: 1;
		margin: 0;
		padding: 0;
		margin-top: -10em;
		z-index: 4;

		width: 50%;
    	margin: 0 auto;
    	margin-top: 11em;
	}
	@media ${device.mobileM} {
		background-size: 125%;
	}
`;


export const Drawing = () => {

	return (
		<DrawingStyles></DrawingStyles>
	);
	
}



