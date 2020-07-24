import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 20px;
	height: 20px;

	${props =>
		props.isDragging &&
		css`
			background-color: red;
			cursor: grabbing;

			img {
				opacity: 0;
			}
		`}
`;
