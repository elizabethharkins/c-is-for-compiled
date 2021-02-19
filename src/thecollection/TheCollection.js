

import React from "react";
import { NewsHeader } from "./components/NewsHeader";
import { NewsBody } from "./components/NewsBody";
import styled from "styled-components";
const CollectionWrapper = styled.div`
	background: var(--collection-bg-gradient);
	transition: background 6s ease-in;
	color: var(--dark-grey);
	font-family: 'Droid Serif', serif;
	font-size: 16px;
	max-width: 80em;
	display: grid;
	box-shadow:var(--collection-cw-box-shadow);

	@media (min-width: 85em) {
		margin: 5% auto 0;
	}
	@media (max-width: 85em) {
		margin: 5% auto 0;
	}
`;


export const TheCollection = () => {
	return (
		<CollectionWrapper>
			<NewsHeader />
			<NewsBody />
		</CollectionWrapper>
	);
}



