import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	z-index: 2;

	${props =>
		props.id === "golden_watchstone_socket" &&
		css`
			top: 11px;
			left: 3px;
		`}

	${props =>
		props.isOver &&
		css`
			background-color: blue;
		`}
`;
