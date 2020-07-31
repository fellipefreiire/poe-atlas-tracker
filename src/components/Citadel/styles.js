import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;
	width: 34px;
	height: 33px;
	box-sizing: border-box;
	border-radius: 50%;

	img {
		position: inherit;
		left: -2px;
		top: -2px;
		width: 38px;
		height: 38px;
	}

	${props =>
		props.className === "HH_citadel" &&
		css`
			top: 12px;
			left: 378px;
		`}
	${props =>
		props.className === "TE_citadel" &&
		css`
			top: 220px;
			left: 57px;
		`}
	${props =>
		props.className === "LP_citadel" &&
		css`
			top: 404px;
			left: 400px;
		`}
	${props =>
		props.className === "LE_citadel" &&
		css`
			top: 355px;
			left: 466px;
		`}
	${props =>
		props.className === "NV_citadel" &&
		css`
			top: 420px;
			left: 60px;
		`}
	${props =>
		props.className === "GC_citadel" &&
		css`
			top: 178px;
			left: 179px;
		`}
	${props =>
		props.className === "VR_citadel" &&
		css`
			top: 228px;
			left: 317px;
		`}
	${props =>
		props.className === "LA_citadel" &&
		css`
			top: 350px;
			left: 342px;
		`}
`;
