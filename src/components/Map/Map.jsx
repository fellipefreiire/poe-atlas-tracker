import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container } from "./styles";

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
		<Container id={props.id}>
			<div className="map_name">{props.map_name}</div>
			<div>
				<img src={base_map} alt="Base Map" />
				<img src={props.map_color} alt={`${props.map_name} ${props.color_tag} Map`} />
				<div
					id={props.id}
					className={`toggle-completed ${maps.includes(props.id) ? "completed-map" : ""}`}
					onClick={() => toggleCompletedMap(props.id)}
				></div>
			</div>
			<div className="map_tier">Tier {props.map_tier}</div>
		</Container>
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
