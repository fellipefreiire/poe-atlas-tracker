import React from "react";

import WSocket from "./WSocket/WSocket";

import "./Citadel.scss";
const citadel = require("./citadel.png");

const Citadel = props => {
	return (
		<div className={props.class}>
			<img src={citadel} alt={props.citadel_region}></img>
			<WSocket class={props.crimson} />
			<WSocket class={props.viridian} />
			<WSocket class={props.golden} />
			<WSocket class={props.cobalt} />
		</div>
	);
};

export default Citadel;
