

import React from "react";
import styled from "styled-components";

const ColumnBodyStyles = styled.p`
	margin: 1rem;
	text-align: left;
`;


export default class ColumnBody extends React.Component {
	render () {

		const { description, live, github } = this.props.notes;

		return (
			<ColumnBodyStyles>
				{ description }
				<span className="links">
					<a href={ live }>Live</a> - <a href={ github }>GitHub</a>
				</span>
			</ColumnBodyStyles>
		);

	}
}





