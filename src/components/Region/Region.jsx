import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { hhAdd, hhSub } from "./regionActions";

import { haewarkRender } from "../Map/haewark_hamlet/functions";
import { tirnsRender } from "../Map/tirns_end/functions";
import { proximaRender } from "../Map/lex_proxima/functions";
import { ejorisRender } from "../Map/lex_ejoris/functions";
import { vastirRender } from "../Map/new_vastir/functions";
import { glennachRender } from "../Map/glennach_cairns/functions";
import { valdosRender } from "../Map/valdos_rest/functions";
import { liraRender } from "../Map/lira_arthain/functions";

import Citadel from "../Citadel/Citadel";
import Map from "../Map/Map";

import { Container } from "./styles";

const Region = props => {
	const mapsRegion = () => {
		if (props.region === "haewark_hamlet") {
			return haewarkRender(props.hhWatchstoneCount);
		}
		if (props.region === "tirns_end") {
			return tirnsRender(props.hhWatchstoneCount);
		}
		if (props.region === "lex_proxima") {
			return proximaRender(props.hhWatchstoneCount);
		}
		if (props.region === "lex_ejoris") {
			return ejorisRender(props.hhWatchstoneCount);
		}
		if (props.region === "new_vastir") {
			return vastirRender(props.hhWatchstoneCount);
		}
		if (props.region === "glennach_cairns") {
			return glennachRender(props.hhWatchstoneCount);
		}
		if (props.region === "valdos_rest") {
			return valdosRender(props.hhWatchstoneCount);
		}
		if (props.region === "lira_arthain") {
			return liraRender(props.hhWatchstoneCount);
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
		<Container>
			<div className={props.region}>
				<Citadel class={props.citadel} citadel_alt={props.citadel_alt} />
				{teste()}
				{mapsRegion().map(maps => (
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
			</div>
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
