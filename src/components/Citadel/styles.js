import styled from "styled-components";

export const Container = styled.div`
	.HH_citadel {
		position: relative;
		top: 0px;
		left: 290px;
		width: 36px;
		height: 35px;
		box-sizing: border-box;
		border-radius: 50%;

		&_crimson_socket {
			display: block;
			position: relative;
			top: -40px;
			left: 12px;
			width: 11px;
			height: 10px;
			border-radius: 50%;
			z-index: 2;
		}

		&_viridian_socket {
			display: block;
			position: relative;
			top: -42px;
			left: 21px;
			width: 11px;
			height: 10px;
			border-radius: 50%;
			z-index: 2;
		}

		&_golden_socket {
			display: block;
			position: relative;
			top: -52px;
			left: 3px;
			width: 11px;
			height: 10px;
			border-radius: 50%;
			z-index: 2;
		}

		&_cobalt_socket {
			display: block;
			position: relative;
			top: -54px;
			left: 12px;
			width: 11px;
			height: 10px;
			border-radius: 50%;
			z-index: 2;
		}

		& img {
			position: relative;
			left: -2px;
			top: -2px;
			width: 40px;
			height: 40px;
		}
	}
`;
