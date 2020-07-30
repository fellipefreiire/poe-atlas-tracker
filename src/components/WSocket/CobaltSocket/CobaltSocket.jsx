import React from "react";
import { useDrop } from "react-dnd";

import { Container } from "./styles";

const CobaltSocket = props => {
	const [, ref] = useDrop({
		accept: "COBALT_WATCHSTONE",
		hover(item, monitor) {
			console.log(item);
		},
	});

	return <Container id={props.id} ref={ref}></Container>;
};

export default CobaltSocket;
