import React from "react";

import { Container } from "./styles";

import CrimsonSocket from "../WSocket/CrimsonSocket/CrimsonSocket";
import ViridianSocket from "../WSocket/ViridianSocket/ViridianSocket";
import CobaltSocket from "../WSocket/CobaltSocket/CobaltSocket";
import GoldenSocket from "../WSocket/GoldenSocket/GoldenSocket";

const citadel = require("./citadel.png");

const Citadel = props => {
	return (
		<Container className={props.class}>
			<img src={citadel} alt={props.citadel_region}></img>
			<CrimsonSocket id="crimson_watchstone_socket" />
			<ViridianSocket id="viridian_watchstone_socket" />
			<GoldenSocket id="golden_watchstone_socket" />
			<CobaltSocket id="cobalt_watchstone_socket" />
		</Container>
	);
};

export default Citadel;
