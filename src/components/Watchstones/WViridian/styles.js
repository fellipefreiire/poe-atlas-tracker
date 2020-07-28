import styled, { css } from "styled-components";

export const Container = styled.div`
	cursor: grab;
	width: 20px;
	height: 20px;

	.viridian_watchstone {
		top: 0px;
		left: 0px;
		width: 20px;
	}

	${props =>
		props.isDragging &&
		css`
			background-color: blue;
			cursor: pointer !important;
		`}
`;
