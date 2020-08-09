import React from "react";

import { Container } from "./styles";

import WGolden from "../../Watchstones/WGolden/WGolden";

const GoldenHold = props => {
	return (
		<Container>
			<WGolden square_region={props.square_region} />
		</Container>
	);
};

export default GoldenHold;
