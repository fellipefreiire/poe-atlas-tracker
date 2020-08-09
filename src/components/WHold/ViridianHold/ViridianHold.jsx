import React from "react";

import { Container } from "./styles";

import WViridian from "../../Watchstones/WViridian/WViridian";

const ViridianHold = props => {
	return (
		<Container>
			<WViridian square_region={props.square_region} />
		</Container>
	);
};

export default ViridianHold;
