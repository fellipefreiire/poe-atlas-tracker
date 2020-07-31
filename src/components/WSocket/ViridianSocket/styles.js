import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;
	border-radius: 50%;
	width: 11px;
	height: 10px;
	z-index: 2;

	${props =>
		props.id === "viridian_watchstone_socket" &&
		css`
			top: 11px;
			left: 19px;
		`}

	${props =>
		props.isOver &&
		css`
			background-color: blue;
		`}
`;
