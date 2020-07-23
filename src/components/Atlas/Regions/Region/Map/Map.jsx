import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./mapsScss";

import { mapCompleted, mapUncompleted } from "./mapActions";

const base_map = require("./map_base_icon.png");

const Map = props => {
	const { maps } = props;

	const toggleCompletedMap = id => {
		if (maps.includes(props.id)) {
			props.mapUncompleted(id);
		} else {
			props.mapCompleted(id);
		}
	};

	return (
		<div className={`map ${props.map_name}`}>
			<div className="map-name">{props.map_title}</div>
			<img className="map-size" src={base_map} alt="base map" />
			<div className="map-tier-color">
				<img
					className={`map-size ${props.map_name}-${props.color_tag}`}
					src={props.map_color}
					alt={`${props.map_name} ${props.color_tag} map`}
				/>
			</div>
			<div className="map-tier-number">Tier {props.map_tier}</div>

			<div
				id={props.id}
				className={`toggle-completed ${maps.includes(props.id) ? "completed-map" : ""}`}
				onClick={() => toggleCompletedMap(props.id)}
			></div>
		</div>
	);
};

const mapStateToProps = state => ({
	maps: state.map.maps,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			mapCompleted,
			mapUncompleted,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
