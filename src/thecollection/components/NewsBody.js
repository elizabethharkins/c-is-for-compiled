

import React from "react";
import { Column } from "./Column";
import { StoryData } from "../data/StoryData";
import styled from "styled-components";
const ColumnsWrapper = styled.div`
	font-size: 0;
	line-height: 0;
	word-spacing: -.31em;
	display: inline-block;
	margin: 30px 2% 0 2%;
`;


export const NewsBody = () => {

	const columnComponents = 
		StoryData.map(o => <Column key={ o.id } 
			heading={ o.heading } 
			subheading={ o.subheading } 
			description={ o.description } 
			descriptionExt={ o.descriptionExt } 
			live={ o.live } 
			github={ o.github }
			list={ (o.list.map(item => (<li key={ item }>{ item }</li>))) } 
			/>
		);

	return (

		<ColumnsWrapper>
			<div className="columns">
				{ columnComponents }
			</div>
		</ColumnsWrapper>
	);
}



