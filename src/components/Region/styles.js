import styled, { css } from "styled-components";

export const Container = styled.div`
	display: inline-block;
	position: relative;

	${props =>
		props.class === "haewark_hamlet" &&
		css`
			width: 420px;
			height: 280px;
		`}

	${props =>
		props.class === "tirns_end" &&
		css`
			top: -45px;
			left: -310px;
			width: 390px;
			height: 280px;
		`}
	
	${props =>
		props.class === "lex_proxima" &&
		css`
			top: -325px;
			left: 420px;
			width: 530px;
			height: 490px;
		`}

	${props =>
		props.class === "lex_ejoris" &&
		css`
			top: -430px;
			left: 125px;
			width: 375px;
			height: 370px;
		`}

	${props =>
		props.class === "new_vastir" &&
		css`
			top: -645px;
			left: 0px;
			width: 400px;
			height: 420px;
		`}
	
	${props =>
		props.class === "glennach_cairns" &&
		css`
			top: -625px;
			left: -365px;
			width: 450px;
			height: 450px;
		`}
	
	${props =>
		props.class === "valdos_rest" &&
		css`
			top: -950px;
			left: 480px;
			width: 270px;
			height: 250px;
		`}

	${props =>
		props.class === "lira_arthain" &&
		css`
			top: -990px;
			left: 480px;
			width: 280px;
			height: 320px;
		`}
`;
