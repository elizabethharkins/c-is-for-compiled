

import React from "react";
import styled from "styled-components";
const ColumnStyles = styled.div`
	font-size: 14px;
	line-height: 20px;
	width: 20%;
	display: inline-block;
	border-left: 1px solid #2f2f2f;
	padding: 0 1% 0 1%;
	vertical-align: top;
	margin-bottom: 50px;
	transition: all .7s;
	
	&:hover {
		border-radius: 0.125em;
		box-shadow:var(--collection-cw-box-shadow);
	}

	.column-header {
		text-align: center;
		line-height: normal;
		font-family: 'Playfair Display', serif;
		display: block;
		margin: 0 auto;
		text-align: center;
	}
	.heading {
		font-weight: 700;
		font-size: 30px;
		text-transform: uppercase;
		padding: var(--headline-padding);
	}
	.subheading {
		font-weight: 700;
		font-size: 14px;
		box-sizing: border-box;
		padding: var(--headline-padding);
		font-weight: 400;
		font-style: italic;
	}

	.subheading:before {
		border-top: var(--standard-column-border);
		content: '';
		width: 100px;
		height: 7px;
		display: block;
		margin: 0 auto;
	}
	.subheading:after {
		border-bottom: var(--standard-column-border);
		content: '';
		width: 100px;
		height: 10px;
		display: block;
		margin: 0 auto;
	}

	.newscontent {
		margin: 1rem;
		text-align: left;
	}

	.links {
		display: flex;
			justify-content: center;
			align-items: center;
			flex-flow: row;
		font-style: italic;
		margin-top: 2em;
	}
	.links a {
		color: inherit;
		padding: 5px;
		text-decoration: none;
	}
	.links a:hover {
		color: var(--blue-magenta);
		text-decoration: underline;
	}

	
	@media (max-width: 1200px) {
		width: 33%;
	}
	@media (max-width: 900px) {
		width: 50%;
	}
	@media (max-width: 600px) {
		width: 100%;
		border-bottom: 1px solid #2f2f2f;
		border-left: none;
	}

`;


export const Column = (props) => {
	return (
		<ColumnStyles className="column">
			<div className="column-header">
				<span className="headline heading">{ props.heading }</span>
				<p>
					<span className="headline subheading">{ props.subheading }</span>
				</p>
			</div>
			<p className="newscontent">
				{ props.description }
				<span className="links">
					<a href={ props.live }>Live</a> - <a href={ props.github }>GitHub</a>
				</span>
			</p>
		</ColumnStyles>
	);
}

