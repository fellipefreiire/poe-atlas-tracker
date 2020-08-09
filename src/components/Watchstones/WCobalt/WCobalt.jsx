import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container } from "./styles";

import { watchstones, cobaltDrops } from "./functions";

import {
	hhCobaltDrop,
	hhCobaltUndrop,
	teCobaltDrop,
	teCobaltUndrop,
	lpCobaltDrop,
	lpCobaltUndrop,
	leCobaltDrop,
	leCobaltUndrop,
	nvCobaltDrop,
	nvCobaltUndrop,
	gcCobaltDrop,
	gcCobaltUndrop,
	vrCobaltDrop,
	vrCobaltUndrop,
	laCobaltDrop,
	laCobaltUndrop,
} from "./wCobaltActions";

const WCobalt = props => {
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
		hhCobaltDrop,
		hhCobaltUndrop,
		teCobaltDrop,
		teCobaltUndrop,
		lpCobaltDrop,
		lpCobaltUndrop,
		leCobaltDrop,
		leCobaltUndrop,
		nvCobaltDrop,
		nvCobaltUndrop,
		gcCobaltDrop,
		gcCobaltUndrop,
		vrCobaltDrop,
		vrCobaltUndrop,
		laCobaltDrop,
		laCobaltUndrop,
	} = props;

	const watchstoneRender = () => {
		if (normalActive) {
			return (
				<Container>
					{watchstones(square_region, hh, te, lp, le, nv, gc, vr, la)}
					{cobaltDrops(
						hhC,
						hhCobaltUndrop,
						hhCobaltDrop,
						teC,
						teCobaltUndrop,
						teCobaltDrop,
						lpC,
						lpCobaltUndrop,
						lpCobaltDrop,
						leC,
						leCobaltUndrop,
						leCobaltDrop,
						nvC,
						nvCobaltUndrop,
						nvCobaltDrop,
						gcC,
						gcCobaltUndrop,
						gcCobaltDrop,
						vrC,
						vrCobaltUndrop,
						vrCobaltDrop,
						laC,
						laCobaltUndrop,
						laCobaltDrop,
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
	hh: state.wCobalt.hhCobaltIsDropped,
	te: state.wCobalt.teCobaltIsDropped,
	lp: state.wCobalt.lpCobaltIsDropped,
	le: state.wCobalt.leCobaltIsDropped,
	nv: state.wCobalt.nvCobaltIsDropped,
	gc: state.wCobalt.gcCobaltIsDropped,
	vr: state.wCobalt.vrCobaltIsDropped,
	la: state.wCobalt.laCobaltIsDropped,
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
			hhCobaltDrop,
			hhCobaltUndrop,
			teCobaltDrop,
			teCobaltUndrop,
			lpCobaltDrop,
			lpCobaltUndrop,
			leCobaltDrop,
			leCobaltUndrop,
			nvCobaltDrop,
			nvCobaltUndrop,
			gcCobaltDrop,
			gcCobaltUndrop,
			vrCobaltDrop,
			vrCobaltUndrop,
			laCobaltDrop,
			laCobaltUndrop,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(WCobalt);
