import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { drop } from "./watchstoneActions";

import { Container } from "./styles";

const Watchstone = props => {
	const id = props.id;
	const [{ isDragging }, dragRef] = useDrag({
		item: { type: "WATCHSTONE", id },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				// console.log(monitor);
			}
		},
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

const mapStateToProps = state => ({
	// maps: state.map.maps,
	watchid: state.watchstone.watchid,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			drop,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Watchstone);
