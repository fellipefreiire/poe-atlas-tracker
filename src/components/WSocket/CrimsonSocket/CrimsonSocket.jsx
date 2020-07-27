import React from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { hasDroppedAction } from "./CrimsonSocketActions";

import { Container } from "./styles";

const CrimsonSocket = props => {
	// const [hasDropped, setHasDropped] = useState(false);
	// const { hasDropped } = props;

	const [{ isOver }, ref] = useDrop({
		accept: "CRIMSON_WATCHSTONE",
		drop(item, monitor) {
			const didDrop = monitor.didDrop();
			if (didDrop) {
				console.log("ola");
			}
			// setHasDropped(true);
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
		}),
		hover(item, monitor) {
			// console.log(item.id);
		},
	});

	return (
		<Container ref={ref} isOver={isOver}>
			<div id={props.id} className={`watchstone_socket ${props.class}`}></div>
		</Container>
	);
};
const mapStateToProps = state => ({
	// hasDropped: state.csr.hasDropped,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			// hasDroppedAction,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(CrimsonSocket);
