import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	z-index: 2;

	${props =>
		props.id === "cobalt_watchstone_socket" &&
		css`
			top: 19px;
			left: 11px;
		`}

	${props =>
		props.isOver &&
		css`
			background-color: blue;
		`}
`;
