import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { watchstones } from "./functions";

const CrimsonSocket = props => {
	const { id, hh, te, lp, le, nv, gc, vr, la } = props;

	return <Container id={props.id}>{watchstones(id, hh, te, lp, le, nv, gc, vr, la, props)}</Container>;
};
const mapStateToProps = state => ({
	hh: state.wCrimson.hhCrimsonIsDropped,
	te: state.wCrimson.teCrimsonIsDropped,
	lp: state.wCrimson.lpCrimsonIsDropped,
	le: state.wCrimson.leCrimsonIsDropped,
	nv: state.wCrimson.nvCrimsonIsDropped,
	gc: state.wCrimson.gcCrimsonIsDropped,
	vr: state.wCrimson.vrCrimsonIsDropped,
	la: state.wCrimson.laCrimsonIsDropped,
});

export default connect(mapStateToProps)(CrimsonSocket);
