

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
		padding: 1%;
	}

	.fineprint {
		margin-top: 1rem;
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


`;

export const Weather = () => {

	// destructure the returned values
	const { data, error, isLoading, setUrl } = UseFetch();
	console.log(data);

	// error handling and loading
  	const getContent = () => {
	    if (error) return <h2>Error when fetching: { error }</h2>
	    if (!data && isLoading) return <h2>LOADING...</h2>
	    if (!data) return null;
	    return <WeatherList weathers={ data.list.slice(0, 8) } />
	};


	return (
		<WeatherStyles>
			<header className="weather-header">
				<h1>Your Local Weather</h1>
			</header>
			<div className="weather-body">
				<CitySelector 
					onSearch={ (city) => setUrl(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`) } 
				/>
			
				{/* conditionally render  */}
      			{/*{ data && <WeatherList weathers={data.list} /> }*/}
      			{getContent()}

      			<p className="fineprint">
					Weather by OpenWeather API
				</p>
			</div>
		</WeatherStyles>
	);
}


