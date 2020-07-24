import React from "react";

import WSocket from "../WSocket/WSocket";

import { Container } from "./styles";
const citadel = require("./citadel.png");

const Citadel = props => {
	return (
		<Container>
			<div className={props.class}>
				<img src={citadel} alt={props.citadel_region}></img>
				<WSocket class={props.crimson} id="crimson_watchstone" />
				<WSocket class={props.viridian} id="viridian_watchstone" />
				<WSocket class={props.golden} />
				<WSocket class={props.cobalt} />
			</div>
		</Container>
	);
};

export default Citadel;
