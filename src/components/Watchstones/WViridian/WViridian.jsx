import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container } from "./styles";

import { watchstones, viridianDrops } from "./functions";

import {
	hhViridianDrop,
	hhViridianUndrop,
	teViridianDrop,
	teViridianUndrop,
	lpViridianDrop,
	lpViridianUndrop,
	leViridianDrop,
	leViridianUndrop,
	nvViridianDrop,
	nvViridianUndrop,
	gcViridianDrop,
	gcViridianUndrop,
	vrViridianDrop,
	vrViridianUndrop,
	laViridianDrop,
	laViridianUndrop,
} from "./wViridianActions";

const WViridian = props => {
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
		hhViridianDrop,
		hhViridianUndrop,
		teViridianDrop,
		teViridianUndrop,
		lpViridianDrop,
		lpViridianUndrop,
		leViridianDrop,
		leViridianUndrop,
		nvViridianDrop,
		nvViridianUndrop,
		gcViridianDrop,
		gcViridianUndrop,
		vrViridianDrop,
		vrViridianUndrop,
		laViridianDrop,
		laViridianUndrop,
	} = props;

	const watchstoneRender = () => {
		if (normalActive) {
			return (
				<Container>
					{watchstones(square_region, hh, te, lp, le, nv, gc, vr, la)}
					{viridianDrops(
						hhC,
						hhViridianUndrop,
						hhViridianDrop,
						teC,
						teViridianUndrop,
						teViridianDrop,
						lpC,
						lpViridianUndrop,
						lpViridianDrop,
						leC,
						leViridianUndrop,
						leViridianDrop,
						nvC,
						nvViridianUndrop,
						nvViridianDrop,
						gcC,
						gcViridianUndrop,
						gcViridianDrop,
						vrC,
						vrViridianUndrop,
						vrViridianDrop,
						laC,
						laViridianUndrop,
						laViridianDrop,
					)}
					{/* <img id={props.id} className={props.class} src={props.watchstone_src} alt={props.alt}></img> */}
				</Container>
			);
		}
		if (awakenedActive) {
			return (
				<Container awakenedActive={props.awakenedActive}>
					{/* <img id={props.id} className={props.class} src={props.watchstone_src} alt={props.alt}></img> */}
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
	hh: state.wViridian.hhViridianIsDropped,
	te: state.wViridian.teViridianIsDropped,
	lp: state.wViridian.lpViridianIsDropped,
	le: state.wViridian.leViridianIsDropped,
	nv: state.wViridian.nvViridianIsDropped,
	gc: state.wViridian.gcViridianIsDropped,
	vr: state.wViridian.vrViridianIsDropped,
	la: state.wViridian.laViridianIsDropped,
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
			hhViridianDrop,
			hhViridianUndrop,
			teViridianDrop,
			teViridianUndrop,
			lpViridianDrop,
			lpViridianUndrop,
			leViridianDrop,
			leViridianUndrop,
			nvViridianDrop,
			nvViridianUndrop,
			gcViridianDrop,
			gcViridianUndrop,
			vrViridianDrop,
			vrViridianUndrop,
			laViridianDrop,
			laViridianUndrop,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(WViridian);
