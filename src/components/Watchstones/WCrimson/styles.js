import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 23px;
	height: 23px;

	.crimson_watchstone {
		top: 0px;
		left: 0px;
		width: 22px;
	}

	img {
		cursor: grab;
	}

	${props =>
		props.awakenedActive &&
		css`
			cursor: default;
		`}

	${props =>
		props.awakenedActive &&
		css`
			#haewark_crimson_watchstone {
				top: -10px;
				left: 587.5px;
				width: 11px;
				cursor: default;
			}
		`} 

	${props =>
		props.awakenedActive &&
		css`
			#tirn_crimson_watchstone {
				top: 166px;
				left: 407px;
				width: 11px;
				cursor: default;
			}
		`} 
	
	${props =>
		props.awakenedActive &&
		css`
			#proxima_crimson_watchstone {
				top: 228px;
				left: 1159.5px;
				width: 11px;
				cursor: default;
			}
		`} 
	
	${props =>
		props.awakenedActive &&
		css`
			#ejoris_crimson_watchstone {
				top: 101px;
				left: 1495.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#vastir_crimson_watchstone {
				top: 439px;
				left: 269.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#glennach_crimson_watchstone {
				top: 15px;
				left: 428.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#valdo_crimson_watchstone {
				top: 223.2px;
				left: 1066.5px;
				width: 11px;
				cursor: default;
			}
		`}

	${props =>
		props.awakenedActive &&
		css`
			#lira_crimson_watchstone {
				top: 218px;
				left: 1496.5px;
				width: 11px;
				cursor: default;
			}
		`}
	${props =>
		props.canDrop &&
		css`
			background-color: blue;
		`}
`;
