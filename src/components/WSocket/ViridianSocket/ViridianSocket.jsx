import React from "react";
import { useDrop } from "react-dnd";

import { Container } from "./styles";

const ViridianSocket = props => {
	const [, ref] = useDrop({
		accept: "VIRIDIAN_WATCHSTONE",
		hover(item, monitor) {
			console.log(item);
		},
	});

	return <Container id={props.id} ref={ref}></Container>;
};

export default ViridianSocket;
