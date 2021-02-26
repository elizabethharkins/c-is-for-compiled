

import React from "react";

export default class Typewriter extends React.Component {
	state = {
		typeColor: {
			color: "var(--grey)",
		},
		typed: "",
		titleString: "Welcome, You've Got M- ... An About Page",
	};

	componentDidMount() {
		this.typeWord(
			this.props.inputStrings[0],
			[...this.props.inputStrings]
		);
	}

	typeWord(word, words) {
		this.stringChecker(word, words);
	}

	typeWriter(string, words) {
		if (string.length === 0) {
			words = words.slice(1);
			words[0] && this.typeWord(words[0], words);
		}
		else {
			this.setState((state, props) => ({
				typed: state.typed.concat(string[0])
			}));
		}

		setTimeout(() => this.typeWriter(string.slice(1), words), 200);
	}

	stringChecker(string, words) {
		if (string === this.state.titleString) {
			this.setState({ typeColor: { color: "var(--grey)" } });
		}
		else {
			this.setState({ typeColor: { color: "var(--med-light-yellow" } });
		}
		this.typeWriter(string, words);
	}

	render() {
		return <div style={ this.state.typeColor }>{ this.state.typed }</div>;
	}
}

