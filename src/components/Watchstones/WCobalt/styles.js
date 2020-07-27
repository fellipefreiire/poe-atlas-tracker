import styled, { css } from "styled-components";

export const Container = styled.div`
	cursor: grab;
	width: 20px;
	height: 20px;

	img {
		width: 20px;
		height: 20px;
	}

	${props =>
		props.isDragging &&
		css`
			background-color: blue;
			cursor: pointer !important;
		`}

	${props =>
		props.canDrop &&
		css`
			background-color: blue;
		`}
`;
