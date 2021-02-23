

import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
const SelectorStyles = styled.div`
	.row {
		justify-content: center;
	  	margin: 15px 0;
	}
`;

const CitySelector = ({ onSearch }) => {
  	const [city, setCity] = useState('');

  	return (
  		<SelectorStyles>
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
			  		<Button onClick={() => onSearch(city)}>Check Weather</Button>
				</Col>
		  	</Row>
		</SelectorStyles>
  	);
};

export default CitySelector;


