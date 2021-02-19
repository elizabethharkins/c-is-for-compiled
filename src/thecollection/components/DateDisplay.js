

import React from "react";

export default class DateDisplay extends React.Component {
	state = {
		date: ""
	};

	componentDidMount() {
		this.getDate();
	}

	getDate = () => {
		let date = new Date().toDateString();
		this.setState({ date });
	};

	render() {
		const { date } = this.state;

		return (
			<div>
				Richmond, VA - { date }
			</div>
		);
	}
}

