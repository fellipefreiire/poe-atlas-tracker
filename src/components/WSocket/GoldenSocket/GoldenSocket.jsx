import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { watchstones } from "./functions";

const GoldenSocket = props => {
	const { id, hh, te, lp, le, nv, gc, vr, la } = props;

	return <Container id={props.id}>{watchstones(id, hh, te, lp, le, nv, gc, vr, la, props)}</Container>;
};

const mapStateToProps = state => ({
	hh: state.wGolden.hhGoldenIsDropped,
	te: state.wGolden.teGoldenIsDropped,
	lp: state.wGolden.lpGoldenIsDropped,
	le: state.wGolden.leGoldenIsDropped,
	nv: state.wGolden.nvGoldenIsDropped,
	gc: state.wGolden.gcGoldenIsDropped,
	vr: state.wGolden.vrGoldenIsDropped,
	la: state.wGolden.laGoldenIsDropped,
});

export default connect(mapStateToProps)(GoldenSocket);
