import styled, { css } from "styled-components";

export const Container = styled.div`
	cursor: grab;
	width: 23px;
	height: 23px;

	.crimson_watchstone {
		top: 0px;
		left: 0px;
		width: 22px;
	}

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
