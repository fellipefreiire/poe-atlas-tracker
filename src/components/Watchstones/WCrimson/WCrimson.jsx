import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container } from "./styles";

import { watchstones, crimsonDrops } from "./functions";

import {
	hhCrimsonDrop,
	hhCrimsonUndrop,
	teCrimsonDrop,
	teCrimsonUndrop,
	lpCrimsonDrop,
	lpCrimsonUndrop,
	leCrimsonDrop,
	leCrimsonUndrop,
	nvCrimsonDrop,
	nvCrimsonUndrop,
	gcCrimsonDrop,
	gcCrimsonUndrop,
	vrCrimsonDrop,
	vrCrimsonUndrop,
	laCrimsonDrop,
	laCrimsonUndrop,
} from "./wCrimsonActions";

const WCrimson = props => {
	const {
		square_region,
		normalActive,
		awakenedActive,
		hh,
		te,
		lp,
		le,
		nv,
		gc,
		vr,
		la,
		hhC,
		teC,
		lpC,
		leC,
		nvC,
		gcC,
		vrC,
		laC,
		hhCrimsonDrop,
		hhCrimsonUndrop,
		teCrimsonDrop,
		teCrimsonUndrop,
		lpCrimsonDrop,
		lpCrimsonUndrop,
		leCrimsonDrop,
		leCrimsonUndrop,
		nvCrimsonDrop,
		nvCrimsonUndrop,
		gcCrimsonDrop,
		gcCrimsonUndrop,
		vrCrimsonDrop,
		vrCrimsonUndrop,
		laCrimsonDrop,
		laCrimsonUndrop,
	} = props;

	const watchstoneRender = () => {
		if (normalActive) {
			return (
				<Container>
					{watchstones(square_region, hh, te, lp, le, nv, gc, vr, la)}
					{crimsonDrops(
						hhC,
						hhCrimsonUndrop,
						hhCrimsonDrop,
						teC,
						teCrimsonUndrop,
						teCrimsonDrop,
						lpC,
						lpCrimsonUndrop,
						lpCrimsonDrop,
						leC,
						leCrimsonUndrop,
						leCrimsonDrop,
						nvC,
						nvCrimsonUndrop,
						nvCrimsonDrop,
						gcC,
						gcCrimsonUndrop,
						gcCrimsonDrop,
						vrC,
						vrCrimsonUndrop,
						vrCrimsonDrop,
						laC,
						laCrimsonUndrop,
						laCrimsonDrop,
					)}
				</Container>
			);
		}
		if (awakenedActive) {
			return (
				<Container awakenedActive={awakenedActive}>
					{watchstones(square_region, hh, te, lp, le, nv, gc, vr, la)}
				</Container>
			);
		}
	};

	return watchstoneRender();
};

const mapStateToProps = state => ({
	normalActive: state.atlas.normalActive,
	awakenedActive: state.atlas.awakenedActive,
	hh: state.wCrimson.hhCrimsonIsDropped,
	te: state.wCrimson.teCrimsonIsDropped,
	lp: state.wCrimson.lpCrimsonIsDropped,
	le: state.wCrimson.leCrimsonIsDropped,
	nv: state.wCrimson.nvCrimsonIsDropped,
	gc: state.wCrimson.gcCrimsonIsDropped,
	vr: state.wCrimson.vrCrimsonIsDropped,
	la: state.wCrimson.laCrimsonIsDropped,
	hhC: state.region.hhWatchstoneCount,
	teC: state.region.teWatchstoneCount,
	lpC: state.region.lpWatchstoneCount,
	leC: state.region.leWatchstoneCount,
	nvC: state.region.nvWatchstoneCount,
	gcC: state.region.gcWatchstoneCount,
	vrC: state.region.vrWatchstoneCount,
	laC: state.region.laWatchstoneCount,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			hhCrimsonDrop,
			hhCrimsonUndrop,
			teCrimsonDrop,
			teCrimsonUndrop,
			lpCrimsonDrop,
			lpCrimsonUndrop,
			leCrimsonDrop,
			leCrimsonUndrop,
			nvCrimsonDrop,
			nvCrimsonUndrop,
			gcCrimsonDrop,
			gcCrimsonUndrop,
			vrCrimsonDrop,
			vrCrimsonUndrop,
			laCrimsonDrop,
			laCrimsonUndrop,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(WCrimson);
