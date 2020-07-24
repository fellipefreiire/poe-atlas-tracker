import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container } from "./styles";

const Watchstone = props => {
	return (
		<Container>
			<img className="watchstone" src={props.watchstone_src} alt={props.alt}></img>
		</Container>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Watchstone);
