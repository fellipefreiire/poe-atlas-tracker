import styled, { css } from "styled-components";

export const Container = styled.div`
	display: inline-block;
	position: relative;
	border-radius: 50%;
	width: 11px;
	height: 10px;
	z-index: 2;

	${props =>
		props.id === "crimson_watchstone_socket" &&
		css`
			top: -44px;
			left: 12px;
			background-color: rgba(155, 0, 0, 0.5);
		`}

	${props =>
		props.isOver &&
		css`
			background-color: blue;
		`}
`;
