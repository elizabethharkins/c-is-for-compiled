

import React from "react";
import { Column } from "./Column";
import { storyData } from "../data/storyData.js";
import styled from "styled-components";
const ColumnsWrapper = styled.div`
	font-size: 0;
    line-height: 0;
    word-spacing: -.31em;
    display: inline-block;
    margin: 30px 2% 0 2%;

	.columns {
		border-bottom: 10px solid var(--charcoal-grey);
	}

	.citation {
		font-family: 'Playfair Display', serif;
		font-size: 36px;
		line-height: 44px;
		text-align: center;
		font-weight: 400;
		display: block;
		margin: 40px auto;
		font-feature-settings: "liga", "dlig";
		max-width: 42%;
	}
	.citation:before {
		content: '';
		width: 100px;
		height: 4px;
		display: block;
		margin: 0 auto;
	}
	.citation:after {
		background: var(--charcoal-grey);
		content: '';
		width: 100px;
		height: 4px;
		display: block;
		margin: 0 auto;
	}

	@media (max-width: 64em) {
	   .citation {
			font-size: 30px;
		}
	}
	@media (max-width: 50em) {
	   .citation {
			font-size: 30px;
			max-width: unset;
		}
	}
	@media (max-width: 30em) {
	   .citation {
			font-size: 26px;
		}
	}
`;


export const NewsBody = () => {

	const columnComponents = 
		storyData.map(o => <Column key={ o.id } 
			heading={ o.heading } 
			subheading={ o.subheading } 
			description={ o.description } 
			live={ o.live } 
			github={ o.github }/>
		);

	return (

		<ColumnsWrapper>
			<div className="columns">
				{ columnComponents }
			</div>

			<div className="footer">
				<span className="citation">
					Confident, calm, driven, intuitive dev with an eye for UX/UI and a heart for people
				</span>
			</div>
		</ColumnsWrapper>
	);
}



