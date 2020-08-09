import React from "react";

import { Container } from "./styles";

import WCobalt from "../../Watchstones/WCobalt/WCobalt";

const CobaltHold = props => {
	return (
		<Container>
			<WCobalt square_region={props.square_region} />
		</Container>
	);
};

export default CobaltHold;
