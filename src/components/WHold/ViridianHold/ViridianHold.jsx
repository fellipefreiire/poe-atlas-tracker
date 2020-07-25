import React from "react";

import { Container } from "./styles";

import { renderWatchstones } from "../functions";

const ViridianHold = props => {
	return <Container>{renderWatchstones(props.square_region, props.color)}</Container>;
};

export default ViridianHold;
