

import React from "react";
import CitySelector from "./CitySelector";
import UseFetch from "../hooks/UseFetch";
import WeatherList from "./WeatherList";
import styled from "styled-components";
const WeatherStyles = styled.div`
	border-bottom: 10px solid var(--charcoal-grey);
	margin: 0 2% 0 2%;
	text-align: center;

	.weather-header {
		display:flex;
		flex-direction: column;
	}
	.weather-header h1 {
		border-bottom: var(--standard-column-border);
    	border-top: var(--standard-column-border);
	}

	.weather-body {
		background: var(--collection-bg-gradient);
		border-radius: 0.125em;
	    margin: 1em auto;
	    padding: 1%;
	}
	.weather-body > .row {
		margin: 0.125em;
		padding: 0;
	}
	.weather-body > .row > .col {
		padding: 0.33em;
	}

	.fineprint {
		padding: 2px;
	}

	@media (max-width: 70em) {
		.weather-body > .row > .col {
			flex-basis: unset;
    		flex-grow: unset;
    		max-width: 25%;
		}
	}
	@media (max-width: 37.5em) {
		.weather-body > .row > .col {
			max-width: 50%;
		}
	}	
	@media (max-width: 30em) {
		.weather-header h1 {
			font-size: 2em;
		}
	}

`;

export const Weather = () => {

	// destructure the returned values
	const { data, error, isLoading, setUrl } = UseFetch();

	// error handling and loading
  	const getContent = () => {
	    if (error) return <h2>Check your entry: { error }</h2>
	    if (!data && isLoading) return <h2>Loading...</h2>
	    if (!data) return null;
		// console.log(data);
	    return <WeatherList data={ data.list.slice(0, 8) } />
	};


	return (
		<WeatherStyles>
			<header className="weather-header">
				<h1>Your Local Weather</h1>
			</header>
			<div className="weather-body">
				<CitySelector 
					onSearch={ (city) => setUrl(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`) } 
				/>
			
				{/* conditionally render  */}
      			{/*{ data && <WeatherList data={ data.list } /> }*/}
      			{ getContent() }

      			<p className="fineprint">
					Weather by OpenWeather API
				</p>
			</div>
		</WeatherStyles>
	);
}


