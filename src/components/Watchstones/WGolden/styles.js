import styled, { css } from "styled-components";

export const Container = styled.div`
	cursor: grab;
	width: 23px;
	height: 23px;

	.golden_watchstone {
		top: 0px;
		left: 0px;
		width: 22px;
	}

	${props =>
		props.awakenedActive &&
		css`
			cursor: default;
		`}
		
	${props =>
		props.awakenedActive &&
		css`
			#haewark_golden_watchstone {
				top: -31.5px;
				left: 551.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#tirn_golden_watchstone {
				top: 144.5px;
				left: 370.5px;
				width: 11px;
				cursor: default;
			}
		`} 

	${props =>
		props.awakenedActive &&
		css`
			#proxima_golden_watchstone {
				top: 206.5px;
				left: 1123.5px;
				width: 11px;
				cursor: default;
			}
		`} 

	${props =>
		props.awakenedActive &&
		css`
			#ejoris_golden_watchstone {
				top: 79.5px;
				left: 1459.4px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#vastir_golden_watchstone {
				top: 417.5px;
				left: 233.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#glennach_golden_watchstone {
				top: -6.5px;
				left: 392.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#valdo_golden_watchstone {
				top: 201.5px;
				left: 1030.3px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#lira_golden_watchstone {
				top: 196.5px;
				left: 1460.5px;
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

	${props =>
		props.canDrop &&
		css`
			background-color: blue;
		`}
`;
