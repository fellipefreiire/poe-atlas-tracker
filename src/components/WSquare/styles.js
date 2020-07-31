import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 0px;
	left: 15px;
	width: 55px;
	height: 55px;
	font-size: 0px;
	z-index: 2;
	${props =>
		props.square_region === "watchstone_square_haewark" &&
		css`
			top: 58px;
		`}
	${props =>
		props.square_region === "watchstone_square_tirn" &&
		css`
			top: 135px;
		`}
	${props =>
		props.square_region === "watchstone_square_proxima" &&
		css`
			top: 212px;
		`}
	${props =>
		props.square_region === "watchstone_square_ejoris" &&
		css`
			top: 290px;
		`}
	${props =>
		props.square_region === "watchstone_square_vastir" &&
		css`
			top: 367px;
		`}
	${props =>
		props.square_region === "watchstone_square_glennach" &&
		css`
			top: 444px;
		`}
	${props =>
		props.square_region === "watchstone_square_valdo" &&
		css`
			top: 521px;
		`}
	${props =>
		props.square_region === "watchstone_square_lira" &&
		css`
			top: 598px;
		`}
`;
