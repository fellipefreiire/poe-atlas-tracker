import styled, { css } from "styled-components";

export const Container = styled.div`
	display: inline-block;
	position: relative;
	width: 36px;
	height: 35px;
	box-sizing: border-box;
	border-radius: 50%;

	img {
		position: inherit;
		left: -2px;
		top: -2px;
		width: 40px;
		height: 40px;
	}

	${props =>
		props.className === "HH_citadel" &&
		css`
			top: 0px;
			left: 290px;
		`}
	${props =>
		props.className === "TE_citadel" &&
		css`
			top: 20px;
			left: 290px;
		`}
	${props =>
		props.className === "LP_citadel" &&
		css`
			top: 60px;
			left: 290px;
		`}
	${props =>
		props.className === "LE_citadel" &&
		css`
			top: 60px;
			left: 290px;
		`}
	${props =>
		props.className === "NV_citadel" &&
		css`
			top: 350px;
			left: 290px;
		`}
	${props =>
		props.className === "GC_citadel" &&
		css`
			top: 280px;
			left: 290px;
		`}
	${props =>
		props.className === "VR_citadel" &&
		css`
			top: 30px;
			left: 130px;
		`}
	${props =>
		props.className === "LA_citadel" &&
		css`
			top: 30px;
			left: 130px;
		`}
`;
