import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;

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
