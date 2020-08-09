import React from "react";

import { Container } from "./styles";

import WCrimson from "../../Watchstones/WCrimson/WCrimson";

const CrimsonHold = props => {
	return (
		<Container>
			<WCrimson square_region={props.square_region} />
		</Container>
	);
};

export default CrimsonHold;
