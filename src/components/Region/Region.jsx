import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
	hhAdd,
	hhSub,
	teAdd,
	teSub,
	lpAdd,
	lpSub,
	leAdd,
	leSub,
	nvAdd,
	nvSub,
	gcAdd,
	gcSub,
	vrAdd,
	vrSub,
	laAdd,
	laSub,
} from "./regionActions";

import {
	awakeLevel0,
	awakeLevel1,
	awakeLevel2,
	awakeLevel3,
	awakeLevel4,
	awakeLevel5,
	awakeLevel6,
	awakeLevel7,
	awakeLevel8,
} from "../Atlas/atlasActions";

import { mapsRegion, awakenedMapsRegion, regionButton } from "./functions";

import Citadel from "../Citadel/Citadel";
import Map from "../Map/Map";

import { Container } from "./styles";

const Region = props => {
	const {
		normalActive,
		awakenedActive,
		count,
		region,
		hh,
		te,
		lp,
		le,
		nv,
		gc,
		vr,
		la,
		hhAdd,
		hhSub,
		teAdd,
		teSub,
		lpAdd,
		lpSub,
		leAdd,
		leSub,
		nvAdd,
		nvSub,
		gcAdd,
		gcSub,
		vrAdd,
		vrSub,
		laAdd,
		laSub,
	} = props;

	const mapsRender = (region, hh, te, lp, le, nv, gc, vr, la) => {
		if (normalActive) {
			return mapsRegion(region, hh, te, lp, le, nv, gc, vr, la);
		}
		if (awakenedActive) {
			return awakenedMapsRegion(region);
		}
	};

	const awakeLevel = () => {
		if (normalActive) {
			if (count < 4) {
				awakeLevel0();
			}
			if (count >= 4 && count < 8) {
				awakeLevel1();
			}
			if (count >= 8 && count < 12) {
				awakeLevel2();
			}
			if (count >= 12 && count < 16) {
				awakeLevel3();
			}
			if (count >= 16 && count < 20) {
				awakeLevel4();
			}
			if (count >= 20 && count < 24) {
				awakeLevel5();
			}
			if (count >= 24 && count < 28) {
				awakeLevel6();
			}
			if (count >= 28 && count < 32) {
				awakeLevel7();
			}
			if (count === 32) {
				awakeLevel8();
			}
		}
	};

	return (
		<Container className={props.region}>
			<Citadel
				className={props.citadel}
				citadel_alt={props.citadel_alt}
				crimson_id={props.crimson_id}
				cobalt_id={props.cobalt_id}
				golden_id={props.golden_id}
				viridian_id={props.viridian_id}
			/>
			{regionButton(
				normalActive,
				region,
				hh,
				hhAdd,
				hhSub,
				te,
				teAdd,
				teSub,
				lp,
				lpAdd,
				lpSub,
				le,
				leAdd,
				leSub,
				nv,
				nvAdd,
				nvSub,
				gc,
				gcAdd,
				gcSub,
				vr,
				vrAdd,
				vrSub,
				la,
				laAdd,
				laSub,
			)}

			{mapsRender(region, hh, te, lp, le, nv, gc, vr, la).map(maps => (
				<Map
					key={maps.map.id}
					id={maps.map.id}
					map_name={maps.map.map_name}
					map_title={maps.map.map_title}
					map_color={maps.map.map_color}
					map_tier={maps.map.map_tier}
					color_tag={maps.map.color_tag}
				/>
			))}
			{awakeLevel()}
		</Container>
	);
};

const mapStateToProps = state => ({
	hh: state.region.hhWatchstoneCount,
	te: state.region.teWatchstoneCount,
	lp: state.region.lpWatchstoneCount,
	le: state.region.leWatchstoneCount,
	nv: state.region.nvWatchstoneCount,
	gc: state.region.gcWatchstoneCount,
	vr: state.region.vrWatchstoneCount,
	la: state.region.laWatchstoneCount,
	normalActive: state.atlas.normalActive,
	awakenedActive: state.atlas.awakenedActive,
	count: state.region.count,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			hhAdd,
			hhSub,
			teAdd,
			teSub,
			lpAdd,
			lpSub,
			leAdd,
			leSub,
			nvAdd,
			nvSub,
			gcAdd,
			gcSub,
			vrAdd,
			vrSub,
			laAdd,
			laSub,
			awakeLevel0,
			awakeLevel1,
			awakeLevel2,
			awakeLevel3,
			awakeLevel4,
			awakeLevel5,
			awakeLevel6,
			awakeLevel7,
			awakeLevel8,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Region);
