import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;

	button {
		padding: 2px;
		color: #e8ab00;
		background-color: #2f2b33;
		box-sizing: border-box;
		border: 1px solid #ded7a6;
		border-radius: 2px;
	}

	.hhButton {
		position: absolute;
		top: -10px;
		z-index: 3;
	}

	.teButton {
		position: absolute;
		top: 195px;
		left: 40px;
		z-index: 3;
	}

	.lpButton {
		position: absolute;
		top: 220px;
		left: 60px;
		z-index: 3;
	}

	.leButton {
		position: absolute;
		top: 10px;
		left: 190px;
		z-index: 3;
	}

	.nvButton {
		position: absolute;
		top: 150px;
		left: 0px;
		z-index: 3;
	}

	.gcButton {
		position: absolute;
		top: 135px;
		left: 280px;
		z-index: 3;
	}

	.vrButton {
		position: absolute;
		top: 300px;
		left: 60px;
		z-index: 3;
	}

	.laButton {
		position: absolute;
		top: 100px;
		left: 150px;
		z-index: 3;
	}

	${props =>
		props.className === "haewark_hamlet" &&
		css`
			width: 540px;
			height: 365px;
		`}

	${props =>
		props.className === "tirns_end" &&
		css`
			top: 45px;
			left: 140px;
			width: 480px;
			height: 350px;
		`}
	
	${props =>
		props.className === "lex_proxima" &&
		css`
			left: 550px;
			width: 640px;
			height: 670px;
		`}

	${props =>
		props.className === "lex_ejoris" &&
		css`
			left: 820px;
			width: 480px;
			height: 460px;
		`}

	${props =>
		props.className === "new_vastir" &&
		css`
			top: 350px;
			width: 500px;
			height: 510px;
		`}
	
	${props =>
		props.className === "glennach_cairns" &&
		css`
			top: 245px;
			left: 40px;
			width: 570px;
			height: 615px;
		`}
	
	${props =>
		props.className === "valdos_rest" &&
		css`
			top: 480px;
			left: 540px;
			width: 410px;
			height: 380px;
		`}

	${props =>
		props.className === "lira_arthain" &&
		css`
			top: 430px;
			left: 945px;
			width: 355px;
			height: 430px;
		`}
`;
