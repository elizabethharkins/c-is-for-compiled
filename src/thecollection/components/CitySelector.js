

import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
const SelectorStyles = styled.div`
	.row {
		justify-content: center;
	  	margin: 15px 0;
	}

	h1 {
		font-size: 2rem;
		font-style: italic;
	}

	input.form-control {
		border-radius: 0.125em;
		text-align: center;
	}

	.btn-primary {
		background: var(--charcoal-grey);
		border-color: #5d6063;
		border-radius: 0.125em;
	}
	.btn-primary:hover {
		background: var(--blue-magenta);
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


