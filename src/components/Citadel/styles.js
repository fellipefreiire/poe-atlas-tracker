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
		props.class === "HH_citadel" &&
		css`
			top: 0px;
			left: 290px;
		`}
		${props =>
			props.class === "TE_citadel" &&
			css`
				top: 20px;
				left: 290px;
			`}
		${props =>
			props.class === "LP_citadel" &&
			css`
				top: 60px;
				left: 290px;
			`}
		${props =>
			props.class === "LE_citadel" &&
			css`
				top: 60px;
				left: 290px;
			`}
		${props =>
			props.class === "NV_citadel" &&
			css`
				top: 350px;
				left: 290px;
			`}
		${props =>
			props.class === "GC_citadel" &&
			css`
				top: 280px;
				left: 290px;
			`}
		${props =>
			props.class === "VR_citadel" &&
			css`
				top: 30px;
				left: 130px;
			`}
		${props =>
			props.class === "LA_citadel" &&
			css`
				top: 30px;
				left: 130px;
			`}

	/* .HH_citadel {
		position: relative;
		top: 0px;
		left: 290px;

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
	} */

	/* .TE_citadel {
		position: relative;
		top: 20px;
		left: 290px;
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
	} */

	/* .LP_citadel {
		position: relative;
		top: 60px;
		left: 290px;
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
	} */

	/* .LE_citadel {
		position: relative;
		top: 60px;
		left: 290px;
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
	} */

	/* .NV_citadel {
		position: relative;
		top: 350px;
		left: 290px;
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
	} */

	/* .GC_citadel {
		position: relative;
		top: 280px;
		left: 290px;
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
	} */

	/* .VR_citadel {
		position: relative;
		top: 30px;
		left: 130px;
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
	} */

	/* .LA_citadel {
		position: relative;
		top: 30px;
		left: 130px;
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
	} */
`;
