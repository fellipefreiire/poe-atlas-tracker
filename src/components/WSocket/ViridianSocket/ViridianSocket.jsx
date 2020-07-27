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

	return (
		<Container ref={ref}>
			<div id={props.id} className={`watchstone_socket ${props.class}`}>
				{props.children}
			</div>
		</Container>
	);
};

export default ViridianSocket;
