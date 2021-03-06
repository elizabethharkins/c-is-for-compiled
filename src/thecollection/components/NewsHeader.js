

import React from "react";
import DateDisplay from "./DateDisplay";
import styled from "styled-components";
import { device } from "../../device";
const HeaderStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;

	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Playfair Display', serif;
		font-weight: 900;
		font-size: 8em;
		line-height: 72px;
		margin-bottom: 20px;
		margin-top: 50px;
		text-transform: uppercase;
		width: 100%;
	}

	.subheading {
		border-top: 10px solid var(--charcoal-grey);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		text-transform: uppercase;
		width: 100%;
		padding: 2em 0 0 0;
	}

	.tag {
		border: 5px solid var(--charcoal-grey);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column wrap;
		padding: 10px 15px 10px 15px;
		width: 33%;
	}
	.tag span {
		font-size: 1.1em;
		padding: 5px;
	}
	.emph {
		border-bottom: 2px solid var(--blue-magenta);
		border-top: 2px solid var(--blue-magenta);
		font-size: 1.3em;
		font-style: italic;
		padding: 11px;
	}

	.supplementary {
		padding-left: 2%;
		min-width: 55%;
	}
	.supplementary > div {
		border-bottom: var(--standard-column-border);
	    border-top: var(--standard-column-border);
	    padding: 12px 0 12px 0;
	    text-align: center;
	}
	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		font-size: 4em;
		transform: scaleY(1.8);
		width: 100%;
	}

	@media ${device.desktop} {
		h1	{
			font-size: 7em;
		}

		.subheading	{
			padding: 2em 0 0 0;
			width: 95%;
		}

		h2 {
			font-size: 3.3em;
		}
	}
	@media ${device.tabletL_Min} and ${device.laptopM} {
		h1	{
			font-size: 5.5em;
		}

		.supplementary {
			width: 66%;
		}
		h2 {
			font-size: 3.4em;
		}
	}
	@media ${device.tabletS_Min} and ${device.laptopS} {
		h1	{
			font-size: 3.9em;
			margin-bottom: 10px;
		}

		.subheading	{
			justify-content: flex-start;
			flex-flow: column wrap;
			padding: 12px 0 12px 0;
		}
		.supplementary {
			width: 100%;
		}

		.tag  {
			margin-bottom: 3%;
			width: 90%;
		}

		h2	{
			font-size: 2.8em;
		}
	}
	@media ${device.tabletS} {
		h1	{
			font-size: 3.9em;
			margin-bottom: 10px;
			text-align: center;
		}

		.subheading {
			padding: 12px 0 12px 0;
			width: 100%;
		}
		.supplementary {
			padding-left: unset;
		}

		.tag {
			margin-bottom: 3%;
			width: 90%;
		}

		h2 {
			font-size: 2.5em;
		}
	}
	@media ${device.mobileM} {
		h1	{
			font-size: 2em;
			line-height: 42px;
			margin-bottom: 3px;
			text-align: center;
		}

		.subheading {
			padding: 12px 0 12px 0;
			width: 100%;
		}
		
		.tag {
			padding: 8px 15px 8px 15px;
			width: 90%;
		}

		.tag span {
			font-size: 1em;
		}

		h2 {
			font-size: 1.3em;
		}
	}
`;


export const NewsHeader = () => {
	return (
		<HeaderStyles className="header">
			<h1>The Collection</h1>
			<div className="subheading">
				<div className="tag">
					<span>classic</span>
					<span className="emph">Bets</span>
					<span>Styles</span>
				</div>
				<div className="supplementary">
					<h2>Color. Line. Design.</h2>
					<DateDisplay />
				</div>
			</div>
		</HeaderStyles>
	);
}


