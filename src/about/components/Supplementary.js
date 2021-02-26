

import React from "react";
import styled from "styled-components";
const SupplementaryStyles = styled.div`
	align-items: center;
	border-top: 6px solid #121219;
	border-radius: 0.125em;
	box-shadow: var(--content-box-shadow);
	display: grid;
	grid-row: 3 / 4;
	grid-column: 2 / 5;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 30px;
	text-align: right;
	z-index: 2;

	background-color: #a9a9a9;
	border-radius: 0.125em;
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
	padding: 20px 20px;

	p {
		background: #fff;
		color: var(--dark-grey);
		padding: 0.5%;
		transform: rotate(-2deg);
	}

	@media (max-width: 73em) {
		box-shadow: 0 5px 50px -5px orange;
    	border: 1px solid var(--blue-magenta);
    	margin: 0 1%;
		outline: 6px solid #121219;
		grid-row: 4;
		grid-column: 1;
		padding-top: 50px;
		display: block;
		background-image: radial-gradient(at top right #00ff00, gray);
		text-align: left;
		z-index: 4;
		-ms-transform: rotate(0deg); /* IE 9 */
		-webkit-transform: rotate(0deg); /* Safari 3-8 */
		transform: rotate(0deg);

		p {
			padding: 2%;
		}
	}
`;


export const Supplementary = () => {

	return (
		<SupplementaryStyles>
			<p>Happiness is ... GT Cinetype, baking, Art Deco, mint-chip gelato, traveling, art direction, Bowie, retro, record-collecting, JavaScripting</p>
		</SupplementaryStyles>
	);
	
}



