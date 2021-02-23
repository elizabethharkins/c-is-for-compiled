

import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
const CardStyles = styled.div`
	p {}
	.card {
		width: 18rem;
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
							{ date.toLocaleDateString() } - { date.toLocaleTimeString() }
						</p>
						<p>Min: { temp_min }</p>
						<p>Max: { temp_max }</p>
				</Card.Body>
			</Card>
		</CardStyles>
	);
};

export default WeatherCard;



