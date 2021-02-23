

import React from "react";
import CitySelector from "./CitySelector";
import { Container } from "react-bootstrap";
import UseFetch from "../hooks/UseFetch";
import WeatherList from "./WeatherList";
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

	// destructure the returned values
	const { data, error, isLoading, setUrl } = UseFetch();
	console.log(data);

	return (
		<WeatherStyles>
			<header className="weather-header">
				<h1>Cloudy With a Chance of Meatballs</h1>
			</header>
			<Container className="weather-body">
				<CitySelector onSearch={ (city) => setUrl(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`) } />
			
				{/* conditionally render */}
				{ data && <WeatherList weathers={ data.list } />}
			</Container>
			<footer>
				Weather by the Internet
			</footer>
		</WeatherStyles>
	);
}


