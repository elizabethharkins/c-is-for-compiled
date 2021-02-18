

import React from "react";
import "../TheCollection.css";
import Headline from "./Headline";
import ColumnBody from "./ColumnBody";
import { SpeechBubble } from "./SpeechBubble";
import { ColumnList } from "./ColumnList";

import styled from "styled-components";
const ColumnsGridWrapper = styled.div`
	display: grid;
	margin-top: -2em;

	.columns {
		border-bottom: 10px solid var(--charcoal-grey);
		display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: .75fr .75fr .25fr;
		margin-bottom: 30px;
	}
	.column {
		font-size: 1em;
		line-height: 20px;
		display: block;
		padding: 8% 3% 3% 3%;
		vertical-align: top;
		transition: all .7s;
	}
	.accent-column:hover {
		border-radius: 0.125em;
		box-shadow:var(--collection-gw-box-shadow);
	}

	.one {
		border-bottom: 1px solid rgba(50,45,127,255);
		font-size: 1.3em;
		grid-row: 1 / 3;
		grid-column: 1;
		line-height: 1.3;
	}
	.two {
		border-left: 1px solid rgba(50,45,127,255);
		border-right: 1px solid rgba(50,45,127,255);
		grid-row: 1 / 2;
		grid-column: 2;
		text-align: center;
	}
	.three {
		background:
			linear-gradient(
			  rgba(0, 0, 0, 0.2),
			  rgba(0, 0, 0, 0.2)
			);
		grid-row: 2;
		grid-column: 2 / 4;
		text-align: center;
	}
	.three p {
		text-align: center;
	    max-width: 80%;
	    margin: 1rem auto;	
	}
	.four {
		border-left: 1px solid rgba(50,45,127,255);
		grid-row: 1;
		grid-column: 4;
		text-align: center;
	}
	.five {
		grid-row: 1;
		grid-column: 3;
		text-align: center;
	}
	.six {
		grid-row: 3;
		grid-column: 1 / 4;
		padding: 0;
	}
	.seven {
		border-top: 1px solid rgba(50,45,127,255);
		text-align: left;
		grid-row: 2;
		grid-column: 4;
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

	.column .citation {
		font-family: 'Playfair Display', serif;
		font-size: 36px;
		line-height: 44px;
		text-align: center;
		font-weight: 400;
		display: block;
		margin: 40px 0 40px 0;
		font-feature-settings: "liga", "dlig";
		max-width: 90%;
	}
	.column .citation:before {
		content: '';
		width: 100px;
		height: 16px;
		display: block;
		margin: 0 auto;
	}
	.column .citation:after {
		content: '';
		width: 100px;
		height: 16px;
		display: block;
		margin: 0 auto;
	}

	.column .figure {
		margin: 0 0 20px;
	}
	.column .figcaption {
		font-style: italic;
		font-size: 12px;
	}

	@media (max-width: 1300px) {
		.column .citation {
			margin-left: 10px;
		}
	}
	@media (min-width: 64em) {
		.column {
			margin-bottom: 50px;
		}
	}
	@media (max-width: 64em) {
		.one {
			text-align: center;
		}
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		.columns {
			grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
			grid-template-rows: .5fr .5fr .55fr .5fr .40fr;
			margin-bottom: auto;
		}
		.column {
			margin-bottom: unset;
		}

		.one {
			border-bottom: none;
			border-left: none;
			border-right: var(--standard-column-border);
			font-size: 1.1em;
			padding-left: 1%;
			grid-row: 1 / 3;
			grid-column: 1 / 3;
		}
		.two {
			border-bottom: var(--standard-column-border);
			border-left: none;
			grid-row: 1;
			grid-column: 3 / 5;
		}
		.three {
			grid-row: 3;
			grid-column: 1 / 5;
		}
		.four {
			border-left: none;
			grid-row: 2;
			grid-column: 3 / 5;
		}
		.five {
			grid-row: 4;
			grid-column: 1 / 3;
		}
	   .six {
			grid-row: 5;
			grid-column: 1 / 4;
		}

	   .column .citation {
			font-size: 30px;
		}

	   .seven {
			border-bottom: var(--standard-column-border);
			border-left: var(--standard-column-border);
			border-top: none;
			border-right: none;
			grid-row: 4;
			grid-column: 3 / 5;
	   }

	   .image {
			background-size: contain;
			grid-row: 5;
			grid-column: 4 / 5;

			position: relative;
				height: 150%;
				bottom: 5%;
	   }
	}

	@media (max-width: 600px) {	
		.columns {
				grid-template-columns: 100vw;
				grid-template-rows: repeat(7, .5fr);
		}

		.one {
			border-bottom: var(--standard-column-border);
			border-left: none;
			border-right: var(--standard-column-border);
			font-size: 1.1em;
			padding-left: 1%;
			grid-row: 1;
			grid-column: 1;
		}
		.two {
			border-bottom: none;
			border-left: none;
			border-right: none;
			grid-row: 2;
			grid-column: 1;
		}
		.three {
			grid-row: 3;
			grid-column: 1;
		}
		.four {
			border-bottom: var(--standard-column-border);
			border-left: var(--standard-column-border);
			border-right: none;
			grid-row: 4;
			grid-column: 1;
		}
		.five {
			border-bottom: var(--standard-column-border);
			border-right: var(--standard-column-border);
			grid-row: 5;
			grid-column: 1;
		}
	   .six {
			grid-row: 7;
			grid-column: 1;
		}

	   .column .citation {
			font-size: 30px;
		}

	   .seven {
			border-bottom: var(--standard-column-border);
			border-left: var(--standard-column-border);
			border-top: none;
			border-right: none;
			grid-row: 6;
			grid-column: 1;
	   }

	   .image {
			background-size: 40%;
			grid-row: 7;
			grid-column: 1;
			margin-top: 10px;
			position: relative;
				height: 115%;
				bottom: -85px;
	   }
	}

	@media (max-width: 479px) {
		.columns {
			grid-template-columns: 100vw;
			grid-template-rows: repeat(7, .5fr);
			grid-column-gap: 15px;
			margin-bottom: auto;
		}

		.one {
			border-bottom: var(--standard-column-border);
			border-left: none;
			border-right: var(--standard-column-border);
			font-size: 1.1em;
			padding-left: 1%;
			grid-row: 1;
			grid-column: 1;
		}
		.two {
			border-bottom: none;
			border-left: none;
			border-right: none;
			grid-row: 2;
			grid-column: 1;
		}
		.three {
			grid-row: 3;
			grid-column: 1;
		}
		.four {
			border-bottom: var(--standard-column-border);
			border-left: var(--standard-column-border);
			border-right: none;
			grid-row: 4;
			grid-column: 1;
		}
		.five {
			border-bottom: var(--standard-column-border);
			border-right: var(--standard-column-border);
			grid-row: 5;
			grid-column: 1;
		}
	   .six {
			grid-row: 7;
			grid-column: 1;
		}

	   .column .citation {
			font-size: 26px;
		}

	   .seven {
			border-bottom: var(--standard-column-border);
			border-left: var(--standard-column-border);
			border-top: none;
			border-right: none;
			grid-row: 6;
			grid-column: 1;
	   }

	   .image {
			background-size: 50%;
			grid-row: 7;
			grid-column: 1;
			margin-top: 20px;
			position: relative;
				height: 110%;
				bottom: -120px;
	   }
	}
`;


export const NewsBody = () => {
	return (
		<ColumnsGridWrapper>
			<div className="columns">

				<div className="column one">
					<Headline headings={{ heading: "Build, Build, Build", subheading: "I love ..." }}/>
					<ColumnList />
				</div>

				<div className="column two accent-column">
					<Headline headings={{ heading: "Face Found App", subheading: "Full Stack JavaScript" }}/>
					<ColumnBody notes={{ description: "Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers.", live: "/", github: "https://github.com/elizabethharkins" }}/>
				</div>

				<div className="column three accent-column">
					<Headline headings={{ heading: "Read With Me App", subheading: "Full Stack JavaScript" }}/>
					<ColumnBody notes={{ description: "Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers.", live: "/", github: "https://github.com/elizabethharkins" }}/>
					<figure className="figure">
						<figcaption className="figcaption">The way you view it is the way you do it.</figcaption>
					</figure>
				</div>

				<div className="column four accent-column">
					<Headline headings={{ heading: "Nestiny Realty", subheading: "JavaScript" }}/>
					<ColumnBody notes={{ description: "Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers.", live: "/", github: "https://github.com/elizabethharkins" }}/>
				</div>

				<div className="column five accent-column">
					<Headline headings={{ heading: "Grid-Folio", subheading: "React, CSS Grid" }}/>
					<ColumnBody notes={{ description: "Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers.", live: "/", github: "https://github.com/elizabethharkins" }}/>
				</div>

				<div className="column seven accent-column">
					<Headline headings={{ heading: "Grid Layout Collective", subheading: "CSS Grid" }}/>
					<ColumnBody notes={{ description: "Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers.", live: "/", github: "https://github.com/elizabethharkins" }}/>
				</div>

				<div className="column six">
					<span className="citation">Confident, calm, driven, intuitive dev with an eye for UX/UI and a heart for people
					</span>
				</div>
				<div className="image"></div>
				<SpeechBubble />
			</div>
		</ColumnsGridWrapper>
	);
}



