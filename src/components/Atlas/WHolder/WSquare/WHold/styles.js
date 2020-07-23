import styled, { css } from "styled-components";

export const Container = styled.div`
	.watchstone {
		width: 20px;
		cursor: grab;
	}

	.crimson_hold {
		position: relative;
		top: -19px;
		left: 1px;
		height: 20px;
		width: 20px;
		background-color: rgba(155, 0, 0, 0.5);
		z-index: 3;
	}

	.viridian_hold {
		position: relative;
		top: -59px;
		left: 24px;
		height: 20px;
		width: 20px;
		background-color: rgba(0, 155, 0, 0.5);
		z-index: 3;
	}

	.cobalt_hold {
		position: relative;
		top: 24px;
		left: 1px;
		height: 20px;
		width: 20px;
		background-color: rgba(155, 0, 155, 0.5);
		z-index: 3;
	}

	.golden_hold {
		position: relative;
		top: -16px;
		left: 24px;
		height: 20px;
		width: 20px;
		background-color: rgba(155, 155, 0, 0.5);
		z-index: 3;
	}

	${props =>
		props.isDragging &&
		css`
			background-color: "red";
			cursor: grabing;
		`}
`;
