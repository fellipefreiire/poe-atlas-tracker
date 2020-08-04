import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";

import { Container } from "./styles";

const WGolden = props => {
	const { id, watchstone_src, alt } = props;

	const [{ isDragging, canDrop }, ref] = useDrag({
		item: { type: "GOLDEN_WATCHSTONE", id, watchstone_src, alt },
		collect: monitor => ({
			// canDrop: monitor.canDrop(),
			isDragging: monitor.isDragging(),
		}),
	});

	const watchstoneRender = () => {
		if (props.normalActive) {
			return (
				<Container ref={ref} isDragging={isDragging} canDrop={canDrop}>
					<img id={props.id} className={props.class} src={props.watchstone_src} alt={props.alt}></img>
				</Container>
			);
		}
		if (props.awakenedActive) {
			return (
				<Container awakenedActive={props.awakenedActive}>
					<img id={props.id} className={props.class} src={props.watchstone_src} alt={props.alt}></img>
				</Container>
			);
		}
	};

	return watchstoneRender();
};

const mapStateToProps = state => ({
	normalActive: state.atlas.normalActive,
	awakenedActive: state.atlas.awakenedActive,
});

export default connect(mapStateToProps)(WGolden);
