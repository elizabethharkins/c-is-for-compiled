

import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
const SelectorWrapper = styled.div`
	.row {
		justify-content: center;
	  	margin: 15px 0;
	}
`;

const CitySelector = () => {
  	const [city, setCity] = useState('');

  	const onSearch = () => {
  		fetch(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
  			.then((response) => response.json())
  			.then((result) => console.log(result));
  	};

  	return (
  		<SelectorWrapper>
			<Row>
				<Col>
			  		<h1>Search your city</h1>
				</Col>
		  	</Row>

		  	<Row>
				<Col xs={ 4 } className="text-center">
			  		<FormControl
						placeholder="Enter city"
						onChange={ (e) => setCity(e.target.value) }
						value={ city }
			  		/>
				</Col>
		  	</Row>

		  	<Row>
				<Col>
			  		<Button onClick={onSearch}>Check Weather</Button>
				</Col>
		  	</Row>
		</SelectorWrapper>
  	);
};

export default CitySelector;


