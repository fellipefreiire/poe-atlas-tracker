import React from "react";

import { Container } from "./styles";

import { renderWatchstones } from "../functions";

const CobaltHold = props => {
	return <Container>{renderWatchstones(props.square_region, props.color)}</Container>;
};

export default CobaltHold;
