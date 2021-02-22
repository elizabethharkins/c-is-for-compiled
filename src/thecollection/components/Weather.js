

import React from "react";
import WeatherCard from "./WeatherCard";
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
`;

export const Weather = () => {
	return (
		<WeatherStyles>
			<header className="weather-header">
				<h1>Cloudy With a Chance of Meatballs</h1>
			</header>
			<WeatherCard
				dt={ 1602104400 * 1000 }
				temp_min="22.67"
				temp_max="24.39"
				main="Clear"
				icon="01d"
			/>
			<footer>
				Weather by the Internet
			</footer>
		</WeatherStyles>
	);
}


