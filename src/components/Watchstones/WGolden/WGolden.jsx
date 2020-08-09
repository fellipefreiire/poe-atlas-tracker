import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container } from "./styles";

import { watchstones, goldenDrops } from "./functions";

import {
	hhGoldenDrop,
	hhGoldenUndrop,
	teGoldenDrop,
	teGoldenUndrop,
	lpGoldenDrop,
	lpGoldenUndrop,
	leGoldenDrop,
	leGoldenUndrop,
	nvGoldenDrop,
	nvGoldenUndrop,
	gcGoldenDrop,
	gcGoldenUndrop,
	vrGoldenDrop,
	vrGoldenUndrop,
	laGoldenDrop,
	laGoldenUndrop,
} from "./wGoldenActions";

const WGolden = props => {
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
		hhGoldenDrop,
		hhGoldenUndrop,
		teGoldenDrop,
		teGoldenUndrop,
		lpGoldenDrop,
		lpGoldenUndrop,
		leGoldenDrop,
		leGoldenUndrop,
		nvGoldenDrop,
		nvGoldenUndrop,
		gcGoldenDrop,
		gcGoldenUndrop,
		vrGoldenDrop,
		vrGoldenUndrop,
		laGoldenDrop,
		laGoldenUndrop,
	} = props;

	const watchstoneRender = () => {
		if (normalActive) {
			return (
				<Container>
					{watchstones(square_region, hh, te, lp, le, nv, gc, vr, la)}
					{goldenDrops(
						hhC,
						hhGoldenUndrop,
						hhGoldenDrop,
						teC,
						teGoldenUndrop,
						teGoldenDrop,
						lpC,
						lpGoldenUndrop,
						lpGoldenDrop,
						leC,
						leGoldenUndrop,
						leGoldenDrop,
						nvC,
						nvGoldenUndrop,
						nvGoldenDrop,
						gcC,
						gcGoldenUndrop,
						gcGoldenDrop,
						vrC,
						vrGoldenUndrop,
						vrGoldenDrop,
						laC,
						laGoldenUndrop,
						laGoldenDrop,
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
	hh: state.wGolden.hhGoldenIsDropped,
	te: state.wGolden.teGoldenIsDropped,
	lp: state.wGolden.lpGoldenIsDropped,
	le: state.wGolden.leGoldenIsDropped,
	nv: state.wGolden.nvGoldenIsDropped,
	gc: state.wGolden.gcGoldenIsDropped,
	vr: state.wGolden.vrGoldenIsDropped,
	la: state.wGolden.laGoldenIsDropped,
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
			hhGoldenDrop,
			hhGoldenUndrop,
			teGoldenDrop,
			teGoldenUndrop,
			lpGoldenDrop,
			lpGoldenUndrop,
			leGoldenDrop,
			leGoldenUndrop,
			nvGoldenDrop,
			nvGoldenUndrop,
			gcGoldenDrop,
			gcGoldenUndrop,
			vrGoldenDrop,
			vrGoldenUndrop,
			laGoldenDrop,
			laGoldenUndrop,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(WGolden);
