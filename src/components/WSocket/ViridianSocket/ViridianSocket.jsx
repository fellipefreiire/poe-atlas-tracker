import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { watchstones } from "./functions";

const ViridianSocket = props => {
	const { id, hh, te, lp, le, nv, gc, vr, la } = props;

	return <Container id={props.id}>{watchstones(id, hh, te, lp, le, nv, gc, vr, la, props)}</Container>;
};

const mapStateToProps = state => ({
	hh: state.wViridian.hhViridianIsDropped,
	te: state.wViridian.teViridianIsDropped,
	lp: state.wViridian.lpViridianIsDropped,
	le: state.wViridian.leViridianIsDropped,
	nv: state.wViridian.nvViridianIsDropped,
	gc: state.wViridian.gcViridianIsDropped,
	vr: state.wViridian.vrViridianIsDropped,
	la: state.wViridian.laViridianIsDropped,
});

export default connect(mapStateToProps)(ViridianSocket);
