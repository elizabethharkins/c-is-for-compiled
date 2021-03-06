

import React from "react";
import styled from "styled-components";
import { device } from "../../device";
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
	.newscontent.accented {
		font-style: italic;
		text-align: center;
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

	ul.horizontal {
		display: flex;
	    justify-content: center;
	    align-items: center;
	    flex-direction: row;
	    flex-wrap: wrap;
	}
	ul.horizontal li { 
		list-style-type:disc;
		text-indent:-4px; 
		margin-right:20px;
	}
	ul.horizontal li:nth-child(1) {
   		list-style-type: none; 
	}

	@media ${device.laptop} {
		width: 33%;
	}
	@media ${device.tabletL} {
		width: 50%;
	}
	@media ${device.tabletS} {
		width: 100%;
		border-bottom: var(--standard-column-border);
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
			<p className="newscontent accented">
				{ props.description }
			</p>
				<p className="newscontent">
				{ props.descriptionExt }
				<span className="links" style={{ display: !props.live && "none" }}>
					<a href={ props.live } target="_blank" rel="noreferrer">Live</a> 
						<span style={{ display: !props.github && "none" }}>-</span> 
					<a href={ props.github } target="_blank" rel="noreferrer" style={{ display: !props.github && "none" }}>GitHub</a>
				</span>
			</p>
			<ul className="horizontal">
				{ props.list }
			</ul>
		</ColumnStyles>
	);
}

