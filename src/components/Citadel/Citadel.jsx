import React from "react";

// import WSocket from "../WSocket/WSocket";
import CrimsonSocket from "../WSocket/CrimsonSocket/CrimsonSocket";
import ViridianSocket from "../WSocket/ViridianSocket/ViridianSocket";

import { Container } from "./styles";
const citadel = require("./citadel.png");

const Citadel = props => {
	return (
		<Container class={props.class}>
			{/* <div className={props.class}> */}
			<img src={citadel} alt={props.citadel_region}></img>
			<CrimsonSocket class="HH_crimson" id="crimson_watchstone" />
			<ViridianSocket class="HH_viridian" id="viridian_watchstone" />
			{/* <WSocket class="HH_golden" /> */}
			{/* <WSocket class="HH_cobalt" /> */}
			{/* </div> */}
		</Container>
	);
};

export default Citadel;
