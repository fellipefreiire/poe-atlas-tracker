import React from "react";
import { useDrag } from "react-dnd";

import { Container } from "./styles";

const WViridian = props => {
	const [{ isDragging }, ref] = useDrag({
		item: { type: "CRIMSON_WATCHSTONE" },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});

	return (
		<Container ref={ref} isDragging={isDragging}>
			<img id={props.id} src={props.watchstone_src} alt={props.alt}></img>
		</Container>
	);
};

export default WViridian;
