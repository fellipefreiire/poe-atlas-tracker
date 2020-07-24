import React from "react";
import { useDrop } from "react-dnd";

import { Container } from "./styles";

// import { watchstones } from "../../../../WHolder/WSquare/api";

// const data = watchstones();

const WSocket = props => {
	const [{ canDrop, didDrop }, dropRef] = useDrop({
		accept: "WATCHSTONE",
		collect: monitor => ({
			canDrop: !!monitor.canDrop(),
			didDrop: !!monitor.didDrop(),
		}),
		// drop: (item, monitor) => console.log(item),
		hover(item, monitor) {
			if (item.id === props.id) {
				console.log(item);
			}
			// console.log(item.id);
			// console.log(props.id);
			// console.log(data[0].watchstone.id);
			// console.log(didDrop);
			// !!monitor.canDrop();
		},
	});

	return (
		<Container ref={dropRef} didDrop={didDrop} canDrop={canDrop}>
			<div id={props.id} className={`watchstone_socket ${props.class}`}>
				{props.children}
			</div>
		</Container>
	);
};

const teste = function () {};

export default WSocket;
