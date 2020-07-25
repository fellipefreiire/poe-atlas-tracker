import React from "react";

import CrimsonHold from "../WHold/CrimsonHold/CrimsonHold";
import ViridianHold from "../WHold/ViridianHold/ViridianHold";
import { Container } from "./styles";

const WSquare = props => {
	return (
		<Container>
			<div className={`watchstone_square ${props.square_region}`}>
				<CrimsonHold square_region={props.square_region} color="crimson" />
				<ViridianHold square_region={props.square_region} color="viridian" />
			</div>
		</Container>
	);
};
export default WSquare;
