import styled, { css } from "styled-components";

export const Container = styled.div`
	display: inline-block;
	position: relative;
	border-radius: 50%;
	width: 11px;
	height: 10px;
	z-index: 2;

	${props =>
		props.id === "cobalt_watchstone_socket" &&
		css`
			top: -46px;
			left: 12px;
			background-color: rgba(0, 0, 155, 0.5);
		`}

	${props =>
		props.isOver &&
		css`
			background-color: blue;
		`}
`;
