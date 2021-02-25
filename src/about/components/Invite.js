

import React from "react";
import styled from "styled-components";
const InviteStyles = styled.div`
	background: var(--grey);
	border-bottom: 1px solid var(--dark-grey);
	border-right: 5px solid var(--dark-grey);
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	font-size: 1.95em;
	font-style: italic;
	font-weight: bold;
	grid-column: 4;
	grid-row: 3;
	height: 66%;
	padding-bottom: 20px;
	padding-right: 25px;
	text-align: right;
	text-decoration: none;
	text-transform: uppercase;
	width: 75%;
	z-index: 2;

	transform: scaleY(1.5);
	white-space: wrap;

	text-decoration: none;
	color: var(--dark-accent-grey);
	
	&:hover {
		background-color: var(--med-light-yellow);
		transition: .7s;
	}

	a {
		color: var(--dark-accent-grey);
		&:hover {
			color: rgb(0, 0, 230);
		}
	}

	@media (max-width: 73em) {
		padding-bottom: 0.125%;
		padding-right: 25px;
		padding-top: 3%;

		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: calc(12px + 1.6vw);
		font-style: italic;
		font-weight: bold;
		grid-column: 1;
		grid-row: 6;
		height: 66%;
		margin: 0 auto;
		text-align: right;
		text-transform: uppercase;
		width: 70%;
		z-index: 3;
	}
`;


export const Invite = () => {

	return (
		<InviteStyles >
			<a href="mailto:lizharkins@gmail.com?Subject=Hi, Liz!" target="_top">
				Electronic mail me!
			</a>
		</InviteStyles>
	);
	
}



