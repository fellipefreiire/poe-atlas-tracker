import React from "react";
import { useDrag } from "react-dnd";

import { Container } from "./styles";

const WCrimson = props => {
	const { id, watchstone_src, alt } = props;

	const [{ isDragging, canDrop }, ref] = useDrag({
		item: { type: "CRIMSON_WATCHSTONE", id, watchstone_src, alt },
		collect: monitor => ({
			// canDrop: monitor.canDrop(),
			isDragging: monitor.isDragging(),
		}),
	});

	return (
		<Container ref={ref} isDragging={isDragging} canDrop={canDrop}>
			<img id={props.id} src={props.watchstone_src} alt={props.alt}></img>
		</Container>
	);
};

export default WCrimson;
