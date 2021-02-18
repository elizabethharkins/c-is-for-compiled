

import React from "react";
import styled from "styled-components";

const HeadlineStyles = styled.div`
	text-align: center;
	line-height: normal;
	font-family: 'Playfair Display', serif;
	display: block;
	margin: 0 auto;
	max-width: 80%;

	.heading {
		font-weight: 700;
		font-size: 30px;
		text-transform: uppercase;
		padding: var(--headline-padding);
	}
	.subheading {
		color: var(--blue-magenta);
		font-weight: 700;
		font-size: 14px;
		box-sizing: border-box;
		padding: var(--headline-padding);
		font-weight: 400;
		font-style: italic;
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

	@media (max-width: 64em) {
		.subheading:before {
			border-top: 1px solid rgba(50,45,127,255);
		}

		.subheading:after {
			border-bottom: 1px solid rgba(50,45,127,255);
		}
	}
`;


export default class Headline extends React.Component {
	render () {

		const { heading, subheading } = this.props.headings;

		return (
			<HeadlineStyles>
				<span className="headline heading">{ heading }</span>
				<p>
					<span className="headline subheading">{ subheading }</span>
				</p>
			</HeadlineStyles>
		);
	}
}





