

import React from "react";

export default class Typewriter extends React.Component {
	state = {
		typeColor: {
			color: "var(--dark-grey)",
		},
		typed: ""
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
		if (string) {
			this.setState({ typeColor: { color: "var(--dark-grey)" } });
		}
		else {
			this.setState({ typeColor: { color: "orange" } });
		}
		this.typeWriter(string, words);
	}

	render() {
		return <p style={ this.state.typeColor }>{ this.state.typed }</p>;
	}
}

