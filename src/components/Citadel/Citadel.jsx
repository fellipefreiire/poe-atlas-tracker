import React from "react";

import { Container } from "./styles";

import CrimsonSocket from "../WSocket/CrimsonSocket/CrimsonSocket";
import ViridianSocket from "../WSocket/ViridianSocket/ViridianSocket";
import CobaltSocket from "../WSocket/CobaltSocket/CobaltSocket";
import GoldenSocket from "../WSocket/GoldenSocket/GoldenSocket";

const citadel = require("./citadel.png");

const Citadel = props => {
	return (
		<Container className={props.className}>
			<img src={citadel} alt={props.citadel_region}></img>
			<CrimsonSocket id={props.crimson_id} />
			<ViridianSocket id={props.viridian_id} />
			<GoldenSocket id={props.golden_id} />
			<CobaltSocket id={props.cobalt_id} />
		</Container>
	);
};

export default Citadel;
