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

import { mapsRegion, awakenedMapsRegion } from "./functions";

import Citadel from "../Citadel/Citadel";
import Map from "../Map/Map";

import { Container } from "./styles";

const Region = props => {
	const mapsRender = (region, hh, te, lp, le, nv, gc, vr, la) => {
		if (props.normalActive) {
			return mapsRegion(region, hh, te, lp, le, nv, gc, vr, la);
		}
		if (props.awakenedActive) {
			return awakenedMapsRegion(region);
		}
	};

	const teste2 = () => {
		if (props.hhWatchstoneCount < 4) {
			props.hhAdd();
		}
	};

	const teste3 = () => {
		if (props.hhWatchstoneCount > 0) {
			props.hhSub();
		}
	};

	const teste4 = () => {
		if (props.teWatchstoneCount < 4) {
			props.teAdd();
		}
	};

	const teste5 = () => {
		if (props.teWatchstoneCount > 0) {
			props.teSub();
		}
	};

	const teste6 = () => {
		if (props.lpWatchstoneCount < 4) {
			props.lpAdd();
		}
	};

	const teste7 = () => {
		if (props.lpWatchstoneCount > 0) {
			props.lpSub();
		}
	};

	const teste8 = () => {
		if (props.leWatchstoneCount < 4) {
			props.leAdd();
		}
	};

	const teste9 = () => {
		if (props.leWatchstoneCount > 0) {
			props.leSub();
		}
	};

	const teste10 = () => {
		if (props.nvWatchstoneCount < 4) {
			props.nvAdd();
		}
	};

	const teste11 = () => {
		if (props.nvWatchstoneCount > 0) {
			props.nvSub();
		}
	};

	const teste12 = () => {
		if (props.gcWatchstoneCount < 4) {
			props.gcAdd();
		}
	};

	const teste13 = () => {
		if (props.gcWatchstoneCount > 0) {
			props.gcSub();
		}
	};

	const teste14 = () => {
		if (props.vrWatchstoneCount < 4) {
			props.vrAdd();
		}
	};

	const teste15 = () => {
		if (props.vrWatchstoneCount > 0) {
			props.vrSub();
		}
	};

	const teste16 = () => {
		if (props.laWatchstoneCount < 4) {
			props.laAdd();
		}
	};

	const teste17 = () => {
		if (props.laWatchstoneCount > 0) {
			props.laSub();
		}
	};

	const teste = () => {
		if (props.normalActive) {
			if (props.region === "haewark_hamlet") {
				return (
					<div style={{ color: "white" }}>
						<button onClick={teste2}>+</button>
						<button onClick={teste3}>-</button>
						{props.hhWatchstoneCount}
					</div>
				);
			}
			if (props.region === "tirns_end") {
				return (
					<div style={{ color: "white", position: "absolute", top: "140px", left: "140px", zIndex: "3" }}>
						<button onClick={teste4}>+</button>
						<button onClick={teste5}>-</button>
						{props.teWatchstoneCount}
					</div>
				);
			}
			if (props.region === "lex_proxima") {
				return (
					<div style={{ color: "white", position: "absolute", top: "50px", left: "150px", zIndex: "3" }}>
						<button onClick={teste6}>+</button>
						<button onClick={teste7}>-</button>
						{props.lpWatchstoneCount}
					</div>
				);
			}
			if (props.region === "lex_ejoris") {
				return (
					<div style={{ color: "white", position: "absolute", top: "50px", left: "50px", zIndex: "3" }}>
						<button onClick={teste8}>+</button>
						<button onClick={teste9}>-</button>
						{props.leWatchstoneCount}
					</div>
				);
			}
			if (props.region === "new_vastir") {
				return (
					<div style={{ color: "white", position: "absolute", top: "150px", left: "50px", zIndex: "3" }}>
						<button onClick={teste10}>+</button>
						<button onClick={teste11}>-</button>
						{props.nvWatchstoneCount}
					</div>
				);
			}
			if (props.region === "glennach_cairns") {
				return (
					<div style={{ color: "white", position: "absolute", top: "150px", left: "130px", zIndex: "3" }}>
						<button onClick={teste12}>+</button>
						<button onClick={teste13}>-</button>
						{props.gcWatchstoneCount}
					</div>
				);
			}
			if (props.region === "valdos_rest") {
				return (
					<div style={{ color: "white", position: "absolute", top: "250px", left: "250px", zIndex: "3" }}>
						<button onClick={teste14}>+</button>
						<button onClick={teste15}>-</button>
						{props.vrWatchstoneCount}
					</div>
				);
			}
			if (props.region === "lira_arthain") {
				return (
					<div style={{ color: "white", position: "absolute", top: "50px", left: "150px", zIndex: "3" }}>
						<button onClick={teste16}>+</button>
						<button onClick={teste17}>-</button>
						{props.laWatchstoneCount}
					</div>
				);
			}
		}
	};

	return (
		<Container className={props.region}>
			<Citadel className={props.citadel} citadel_alt={props.citadel_alt} />
			{teste()}
			{mapsRender(
				props.region,
				props.hhWatchstoneCount,
				props.teWatchstoneCount,
				props.lpWatchstoneCount,
				props.leWatchstoneCount,
				props.nvWatchstoneCount,
				props.gcWatchstoneCount,
				props.vrWatchstoneCount,
				props.laWatchstoneCount,
			).map(maps => (
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
		</Container>
	);
};

const mapStateToProps = state => ({
	hhWatchstoneCount: state.region.hhWatchstoneCount,
	teWatchstoneCount: state.region.teWatchstoneCount,
	lpWatchstoneCount: state.region.lpWatchstoneCount,
	leWatchstoneCount: state.region.leWatchstoneCount,
	nvWatchstoneCount: state.region.nvWatchstoneCount,
	gcWatchstoneCount: state.region.gcWatchstoneCount,
	vrWatchstoneCount: state.region.vrWatchstoneCount,
	laWatchstoneCount: state.region.laWatchstoneCount,
	normalActive: state.atlas.normalActive,
	awakenedActive: state.atlas.awakenedActive,
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
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Region);
