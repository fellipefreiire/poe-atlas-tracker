import React from "react";
import { useDrop } from "react-dnd";

import { Container } from "./styles";

const GoldenSocket = props => {
	const [, ref] = useDrop({
		accept: "GOLDEN_WATCHSTONE",
		hover(item, monitor) {
			console.log(item);
		},
	});

	return <Container id={props.id} ref={ref}></Container>;
};

export default GoldenSocket;
