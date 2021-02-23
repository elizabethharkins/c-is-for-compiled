

import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
const CardStyles = styled.div`
	.card {
		background: transparent;
		border-bottom: 5px solid rgba(0,0,0,.125);
    	border-right: 5px solid rgba(0,0,0,.125);
		color: #eaedf0;
	}

	.card-title {
		margin-bottom: 0.125rem;
	}
`;

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {

	// create a date object with Date class constructor
	const date = new Date(dt);
	// console.log(date);

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
							{ date.toLocaleTimeString([], {timeStyle: 'short'}) }
						</p>
						{/*<p>Temp: { temp_min } - { temp_max }</p>*/}
				</Card.Body>
			</Card>
		</CardStyles>
	);
};

export default WeatherCard;



