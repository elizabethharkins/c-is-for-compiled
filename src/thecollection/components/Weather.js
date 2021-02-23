

import React from "react";
// import WeatherCard from "./WeatherCard";
import CitySelector from "./CitySelector";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const WeatherStyles = styled.div`
	border-bottom: 10px solid var(--charcoal-grey);

	.weather-header {
		display:flex;
		flex-direction: column;
		min-height: 10vh;
	}

	.main {
		flex-grow: 1;
		text-align: center;
		padding: 25px;
	}
	footer {
		padding: 2px;
		min-height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: small;
		text-align: center;
	}
	header {
		padding: 25px;
	}

	.weather-body {
		text-align: center;
	}
`;

export const Weather = () => {
	return (
		<WeatherStyles>
			<header className="weather-header">
				<h1>Cloudy With a Chance of Meatballs</h1>
			</header>
			<Container className="weather-body">
      			<CitySelector />
    		</Container>
			<footer>
				Weather by the Internet
			</footer>
		</WeatherStyles>
	);
}


