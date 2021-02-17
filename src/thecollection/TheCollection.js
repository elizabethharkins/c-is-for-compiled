

import React from "react";
import { Header } from "./components/Header";
import { Columns } from "./components/Columns";

import styled from "styled-components";
const GridWrapper = styled.div`
	background: linear-gradient(72deg,var(--blue-magenta) -14%,rgba(0,0,0,0.2) 25%);
	transition: background 6s ease-in;
	color: var(--dark-grey);
	font-family: 'Droid Serif', serif;
	font-size: 16px;
	max-width: 80em;
	display: grid;
	grid-template-rows: 1fr 3fr;
	box-shadow:var(--collection-gw-box-shadow);

	@media (min-width: 85em) {
		grid-template-rows: 1.2fr 3.5fr;
		margin: 5% auto 0;
	}
	@media (max-width: 85em) {
		margin: 5% auto 0;
	}
	@media (min-width: 37.5em) and (max-width: 64em) {
		grid-template-rows: 0.9fr 3.5fr;
	}
	@media (max-width: 37.438em) {
		grid-template-rows: 0.5fr 3fr;
	}
	@media (max-width: 30em) {
		grid-template-rows: 0.33fr 3fr;
	}
`;


export const TheCollection = () => {
	return (
		<GridWrapper>
			<Header />
			<Columns />
		</GridWrapper>
	);
}



