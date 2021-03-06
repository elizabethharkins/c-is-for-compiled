

import React from "react";
import styled from "styled-components";
import { device } from "./device";
const MainPageStyles = styled.div`
.fill-area  {
	bottom: -72px;
	background: var(--fill-area-bg-color);
	box-shadow: inset 3px 3px 5px -1px #111;
	pointer-events: none;
	position:fixed;
	padding:0;
	margin:0;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	transition: all 1s ease; 
	z-index: 2;
}

main {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: var(--main-area-bg-gradient);
}

.content {
	color: var(--light-accent-blue);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row wrap;
	font-family: 'Droid Serif', serif;
	font-size: 1.3em;
	margin: 0 auto;
	height: 200px;
	width: 45%;
	z-index: 2;
	text-align: center;
	margin-top: 50px;
}

.slidecontainer {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-flow: column;
	margin: 10vh auto;
	width: 80%;
	z-index: 2;
}

label {
	position: static;
	z-index: 1;
	font: 8rem "Monoton", sans-serif;
	color: purple;
	margin: -5rem 0 2rem;
}
label::after {
  content: "%";
}

.slider {
	position: static;
	z-index: 2;
	width: 50vw;
	height: 1rem;
	background-color: purple;
	-webkit-appearance: none; 
	appearance: none;
	border: none;
	outline: none;
	border-radius: 100vmax;
	box-shadow: inset 3px 3px 5px -1px #000;
}
.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 4vw;
	height: 4vw;
	background: var(--light-accent-blue);
	border-radius: 50%;
	cursor: pointer;
	box-shadow: 5px 5px 8px -1px #000;
	transition: box-shadow .3s ease-in-out;
}
.slider::-moz-range-thumb {
	appearance: none;
	width: 4vw;
	height: 4vw;
	background: var(--light-accent-blue);
	border-radius: 50%;
	cursor: pointer;
	box-shadow: 5px 5px 8px -1px #000;
	transition: box-shadow .3s ease-in-out;
}

@media ${device.tabletMP} {
	.content {
		height: 100px;
		width: 85%;
	}

	label {
		font: 4rem "Monoton", sans-serif;
		margin: -2rem 0 1rem;
	}
	.slider {
		width: 85vw;
	}
}

@media ${device.mobileL} {
	.content {
		margin: 1em auto 0 auto;
	}
	.slidecontainer {
		margin: 3vh auto;
	}

	label {
		margin: 2rem 0 2rem;
	}

	.slider::-webkit-slider-thumb {
		width: 8vw;
		height: 8vw;
	}
}
`;


export default class Main extends React.Component {

	state = {
		rangeValues: [0, 25, 50, 75, 100],
		currentRangeValue: 0,
		storyValues: 
			["Hi, my name is Liz -", 
			"Hi, Liz!", 
			"- and I'm a teacher-turned-developer who met code when I wanted to give my classroom community a modern upgrade.", 
			"I'd love to work for a great company in a frontend role, with a team that values learning, inclusion, and diversity -", 
			"- and where I can continue improving and contributing. Let's build better together!"],
		currentStoryValue: "Hi, my name is Liz -",
	};

	handleInputChange = e => {

		this.setState({ 
			currentRangeValue: e.target.value,
			currentStoryValue: this.state.storyValues[e.target.value],
		});

		const input = document.getElementById("myStory");
		const gauge = (input.value / input.max) * 100;
		const rangeValueElement = document.querySelector("#range-value");
		const fillAreaElement = document.querySelector(".fill-area");

		const hueRotate = "hue-rotate(" + gauge + "deg)";
	  
		rangeValueElement.textContent = input.value;
		rangeValueElement.style.filter = hueRotate;
	  
		input.style.filter = hueRotate;
	  
		fillAreaElement.style.left = gauge + "vw";
		fillAreaElement.style.width = (100-gauge) + "vw";
		fillAreaElement.style.filter = hueRotate;
	};

	render() {

		const { rangeValues, currentRangeValue, currentStoryValue } = this.state;

		return (
			<MainPageStyles className="page">
				<div className="effects-container">
					<div className="fill-area"></div>
					<main>
						<p className="content"><span id="output">{ [currentStoryValue] }</span></p>
						<div className="slidecontainer">
							<label id="range-value" htmlFor="range">{ rangeValues[currentRangeValue] }</label>
							<input 
								onChange={ this.handleInputChange }
								type={ "range" } 
								name={ "range" } 
								min={ 0 } 
								max={ 4 } 
								defaultValue={ 0 } 
								className={ "slider" } 
								id={ "myStory" }
								step={ 1 }
								list={ "tick-list" }
							/>
							<datalist id="tick-list">
								<option>0</option>
								<option>25</option>
								<option>50</option>
								<option>75</option>
								<option>100</option>
							</datalist>
						</div>
					</main>
				</div>
			</MainPageStyles>

		);

	}
}





