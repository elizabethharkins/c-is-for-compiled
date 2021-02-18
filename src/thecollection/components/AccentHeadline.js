

import React from "react";
import styled from "styled-components";

const AccentHeadlineStyles = styled.div`
	text-align: center;
	line-height: normal;
	font-family: 'Playfair Display', serif;
	display: block;
	margin: 0 auto;
	max-width: 80%;

	.heading {
		font-weight: 400;
		font-style: italic;
		font-size: 36px;
		box-sizing: border-box;
		padding: var(--headline-padding);
	}
	.subheading {
		font-weight: 700;
		font-size: 14px;
		box-sizing: border-box;
		padding: var(--headline-padding);
	}

	.subheading:before {
		border-top: 1px solid rgba(50,45,127,255);
		content: '';
		width: 100px;
		height: 7px;
		display: block;
		margin: 0 auto;
	}
	.subheading:after {
		border-bottom: 1px solid rgba(50,45,127,255);
		content: '';
		width: 100px;
		height: 10px;
		display: block;
		margin: 0 auto;
	}
`;


export const AccentHeadline = () => {
	return (
		<AccentHeadlineStyles>
			<span className="headline heading">Build, Build, Build!</span>
			<p>
				<span className="headline subheading">I love ...</span>
			</p>
		</AccentHeadlineStyles>
	);
}



