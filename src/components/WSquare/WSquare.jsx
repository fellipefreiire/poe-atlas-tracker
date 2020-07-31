import React from "react";

import CrimsonHold from "../WHold/CrimsonHold/CrimsonHold";
import ViridianHold from "../WHold/ViridianHold/ViridianHold";
import CobaltHold from "../WHold/CobaltHold/CobaltHold";
import GoldenHold from "../WHold/GoldenHold/GoldenHold";
import { Container } from "./styles";

const WSquare = props => {
	return (
		<Container square_region={props.square_region}>
			<CrimsonHold square_region={props.square_region} color="crimson" />
			<ViridianHold square_region={props.square_region} color="viridian" />
			<CobaltHold square_region={props.square_region} color="cobalt" />
			<GoldenHold square_region={props.square_region} color="golden" />
		</Container>
	);
};
export default WSquare;
