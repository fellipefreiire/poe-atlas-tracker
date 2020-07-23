import React from "react";
import { useDrag } from "react-dnd";

import { Container } from "./styles";

import { watchstones } from "../../api";

const data = watchstones();
const Watchstone = props => {
	const [{ isDragging }, dragRef] = useDrag({
		item: { type: "WATCHSTONE", id: data[0].watchstone.id },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});

	return (
		<Container ref={dragRef} isDragging={isDragging}>
			<img className="watchstone" src={props.watchstone_src} alt={props.alt}></img>
		</Container>
	);
};
export default Watchstone;
