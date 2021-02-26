

import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
const CardStyles = styled.div`
	.card {
		background: transparent;
		border-bottom: 5px solid rgba(0,0,0,.125);
		color: #eaedf0;
		max-height: 352px;
    	min-height: 281px;
	}

	.card-title {
		margin-bottom: 0.125rem;
	}

	@media (max-width: 30em) {
		.card {
			border-bottom: unset
	    	border-right: unset
	    	border: 3px solid rgba(0,0,0,.125);
		}
	}

`;

const WeatherCard = ({ dt, main, icon }) => {

	// create a date object with Date class constructor
	const date = new Date(dt);

	return (
		<CardStyles>
			<Card>
				<Card.Img 
					variant="top" 
					// get the src from example url and pass the icon prop for icon code
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
				<Card.Body>
					<Card.Title>{ main }</Card.Title>
						<p>
							{ date.toLocaleTimeString([], {timeStyle: "short"}) }
						</p>
				</Card.Body>
			</Card>
		</CardStyles>
	);
};

export default WeatherCard;



