import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container } from "./styles";

import "./mapsScss";

import { mapCompleted, mapUncompleted, awakenedMapCompleted, awakenedMapUncompleted } from "./mapActions";

const base_map = require("./map_base_icon.png");

const Map = props => {
	const { maps, awakenedMaps } = props;

	const toggleCompletedMap = id => {
		if (maps.includes(props.id)) {
			props.mapUncompleted(id);
		} else {
			props.mapCompleted(id);
		}
	};

	const toggleAwakenedCompletedMap = id => {
		if (awakenedMaps.includes(props.id)) {
			props.awakenedMapUncompleted(id);
		} else {
			props.awakenedMapCompleted(id);
		}
	};

	const teste = () => {
		if (props.normalActive) {
			toggleCompletedMap(props.id);
			console.log(maps);
		}
		if (props.awakenedActive) {
			toggleAwakenedCompletedMap(props.id);
			console.log(awakenedMaps);
		}
	};

	const baseMapRender = () => {
		if (props.color_tag === "Unique") {
			return;
		} else {
			return <img src={base_map} alt="Base Map" />;
		}
	};

	return (
		<Container id={props.id}>
			<div className="map_name">{props.map_name}</div>
			<div>
				{baseMapRender()}
				<img src={props.map_color} alt={`${props.map_name} ${props.color_tag} Map`} />
				<div
					className={`toggle-completed  
					${props.normalActive ? (maps.includes(props.id) ? "completed-map" : "") : ""} 
					${props.awakenedActive ? (awakenedMaps.includes(props.id) ? "completed-awakened-map" : "") : ""}
					`}
					onClick={() => teste()}
				></div>
			</div>
			<div className="map_tier">Tier {props.map_tier}</div>
		</Container>
	);
};

const mapStateToProps = state => ({
	maps: state.map.maps,
	awakenedMaps: state.map.awakenedMaps,
	normalActive: state.atlas.normalActive,
	awakenedActive: state.atlas.awakenedActive,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			mapCompleted,
			mapUncompleted,
			awakenedMapCompleted,
			awakenedMapUncompleted,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
