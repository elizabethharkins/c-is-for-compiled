

import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
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
		background: var(--charcoal-grey);
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


export const NewsFooter = () => {

	return (
		<Footer>
			<span className="citation">
				Confident, calm, driven, intuitive dev with an eye for UX/UI and a heart for people
			</span>
		</Footer>
	);
	
}



