import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { watchstones } from "./functions";

const CobaltSocket = props => {
	const { id, hh, te, lp, le, nv, gc, vr, la } = props;

	return <Container id={props.id}>{watchstones(id, hh, te, lp, le, nv, gc, vr, la, props)}</Container>;
};

const mapStateToProps = state => ({
	hh: state.wCobalt.hhCobaltIsDropped,
	te: state.wCobalt.teCobaltIsDropped,
	lp: state.wCobalt.lpCobaltIsDropped,
	le: state.wCobalt.leCobaltIsDropped,
	nv: state.wCobalt.nvCobaltIsDropped,
	gc: state.wCobalt.gcCobaltIsDropped,
	vr: state.wCobalt.vrCobaltIsDropped,
	la: state.wCobalt.laCobaltIsDropped,
});

export default connect(mapStateToProps)(CobaltSocket);
