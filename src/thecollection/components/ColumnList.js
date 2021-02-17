

import React from "react";
import styled from "styled-components";

const ColumnListStyles = styled.ul`
	list-style-type: none;

	@media (max-width: 64em) {
		padding-left: 0;
	}
}
`;


export const ColumnList = () => {
	return (
		<ColumnListStyles>
			<li>JavaScript</li>
			<li>CSS3</li>
			<li>HTML5</li>
			<li>React</li>
			<li>Node</li>
			<li>Express</li>
			<li>Postgres</li>
			<li>Flexbox</li>
			<li>Grid</li>
			<li>Typography</li>
			<li>Art Direction</li>
			<li>Solutions</li>
			<li>Problem-Solving</li>
			<li>Teamwork</li>
			<li>Learning</li>
			<li>Sharing</li>
			<li>Mentoring</li>
			<li>People</li>
			<li>My Team</li>
			<li>Your Team</li>
			<li>Our Team</li>
			<li>A Job Well Done</li>
		</ColumnListStyles>
	);
}



