

import React from "react";
import "./Main.css";


class Main extends React.Component {

	state = {
		rangeValues: [0, 25, 50, 75, 100],
		currentRangeValue: 0,
		storyValues: 
			["Hi, my name is Liz -", 
			"Hi, Liz!", 
			"- and I'm a teacher-turned-developer who met code when I wanted to give my classroom community a modern upgrade.", 
			"I'd love to work for a great company in a frontend role, with a great team that values learning, inclusion, and diversity - and where I can continue improving and contributing.", 
			"Let's build better together!"],
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

		if (e.target.value === "4") {
			setTimeout(function() { 
				document.querySelector(".navbar").style.zIndex = 4;
			}, 1000);
			return;
		}
		else {
			document.querySelector(".navbar").style.zIndex = 2;
		}
	};

	render() {

		const { rangeValues, currentRangeValue, currentStoryValue } = this.state;

		return (
			<div className="page">
				<div className="effects-container">
					<div className="fill-area"></div>
					<main>
						<p className="content"><span id="output">{[currentStoryValue]}</span></p>
						<div className="slidecontainer">
							<label id="range-value" htmlFor="range">{rangeValues[currentRangeValue]}</label>
							<input 
								onChange={this.handleInputChange}
								type={"range"} 
								name={"range"} 
								min={0} 
								max={4} 
								defaultValue={0} 
								className={"slider"} 
								id={"myStory"}
								step={1}
								list={"tick-list"}
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
			</div>

		);

	}
}


export default Main;




