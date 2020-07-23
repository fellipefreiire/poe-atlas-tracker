import React from "react";
import { useDrop } from "react-dnd";

import { Container } from "./styles";

const WSocket = props => {
	const [, dropRef] = useDrop({
		accept: "WATCHSTONE",
		hover(item, monitor) {
			console.log(item.id);
		},
	});

	return (
		<Container ref={dropRef}>
			<div className={`watchstone_socket ${props.class}`}></div>
		</Container>
	);
};

export default WSocket;
