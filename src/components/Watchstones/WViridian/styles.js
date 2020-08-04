import styled, { css } from "styled-components";

export const Container = styled.div`
	cursor: grab;
	width: 23px;
	height: 23px;

	.viridian_watchstone {
		top: 0px;
		left: 0px;
		width: 22px;
	}

	${props =>
		props.awakenedActive &&
		css`
			#haewark_viridian_watchstone {
				top: -2px;
				left: 568.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#tirn_viridian_watchstone {
				top: 174px;
				left: 387.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#proxima_viridian_watchstone {
				top: 236px;
				left: 1140.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#ejoris_viridian_watchstone {
				top: 108.5px;
				left: 1476.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.isDragging &&
		css`
			background-color: blue;
			cursor: pointer !important;
		`}
`;
