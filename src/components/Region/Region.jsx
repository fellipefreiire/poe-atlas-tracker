import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { hhAdd, hhSub } from "./regionActions";

import { mapsRegion } from "./functions";

import Citadel from "../Citadel/Citadel";
import Map from "../Map/Map";

import { Container } from "./styles";

const Region = props => {
	const mapsRender = (region, count) => {
		return mapsRegion(region, count);
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

	const teste = () => {
		if (props.region === "haewark_hamlet") {
			return (
				<div style={{ color: "white" }}>
					<button onClick={teste2}>+</button>
					<button onClick={teste3}>-</button>
					{props.hhWatchstoneCount}
				</div>
			);
		}
	};

	return (
		<Container className={props.region}>
			<Citadel className={props.citadel} citadel_alt={props.citadel_alt} />
			{teste()}
			{mapsRender(props.region, props.hhWatchstoneCount).map(maps => (
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
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			hhAdd,
			hhSub,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Region);
