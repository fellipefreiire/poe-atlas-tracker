import styled, { css } from "styled-components";

export const Container = styled.div`
	cursor: grab;
	width: 23px;
	height: 23px;

	.cobalt_watchstone {
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
			#haewark_cobalt_watchstone {
				top: -23.5px;
				left: 587.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#tirn_cobalt_watchstone {
				top: 152px;
				left: 406.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#proxima_cobalt_watchstone {
				top: 214.5px;
				left: 1159.5px;
				width: 11px;
				cursor: default;
			}
		`}
		
	${props =>
		props.awakenedActive &&
		css`
			#ejoris_cobalt_watchstone {
				top: 87.5px;
				left: 1495.5px;
				width: 11px;
				cursor: default;
			}
		`}
	
	${props =>
		props.awakenedActive &&
		css`
			#vastir_cobalt_watchstone {
				top: 425.5px;
				left: 269.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#glennach_cobalt_watchstone {
				top: 1.5px;
				left: 428.5px;
				width: 11px;
				cursor: default;
			}
		`}
	
	${props =>
		props.awakenedActive &&
		css`
			#valdo_cobalt_watchstone {
				top: 209.2px;
				left: 1066.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#lira_cobalt_watchstone {
				top: 204.5px;
				left: 1496.5px;
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
