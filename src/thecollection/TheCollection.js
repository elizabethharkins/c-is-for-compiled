

import React from "react";
import { NewsHeader } from "./components/NewsHeader";
import { NewsBody } from "./components/NewsBody";
import { NewsFooter } from "./components/NewsFooter"
import { Weather } from "./components/Weather";
import styled from "styled-components";
const NewsWrapper = styled.div`
	background: var(--collection-bg-gradient);
	transition: background 6s ease-in;
	color: var(--dark-grey);
	font-family: 'Droid Serif', serif;
	font-size: 16px;
	max-width: 80em;
	display: grid;
	box-shadow:var(--collection-cw-box-shadow);

	@media (min-width: 85em) {
		margin: 5% auto;
	}
`;


export const TheCollection = () => {
	return (
		<NewsWrapper>
			<NewsHeader />
			<NewsBody />
			<Weather />
			<NewsFooter />
		</NewsWrapper>
	);
}



