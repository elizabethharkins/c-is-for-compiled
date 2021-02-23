

import React from "react";
import { Col, Row } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const WeatherList = ({ data }) => {
    return (
        <Row>
           { data.map(({ dt, main, weather }) => (
                <Col key={ dt }>
                    <WeatherCard 
                    	dt={ dt * 1000 } 
                    	main={ weather[0].main } 
                    	icon={ weather[0].icon } 
                  	/>
                </Col>
            )) } 
        </Row>
    )
}

export default WeatherList;

