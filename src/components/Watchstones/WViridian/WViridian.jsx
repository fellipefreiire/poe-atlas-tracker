import React from "react";

import { Container } from "./styles";

const WViridian = props => {
	return (
		<Container>
			<img id={props.id} src={props.watchstone_src} alt={props.alt}></img>
		</Container>
	);
};

export default WViridian;
