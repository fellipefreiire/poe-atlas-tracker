import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Regions from "../Regions/Regions";
import WHolder from "../WHolder/WHolder";

import "./Atlas.scss";

import { normalActiveAc, awakenedActiveAc } from "./atlasActions";

const Atlas = props => {
	return (
		<div className="atlas-hold">
			<div className="atlas">
				<canvas id="atlas_of_worlds"></canvas>
				<div className="toggle_atlas_button">
					<button className={props.normalActive ? "teste" : ""} onClick={props.normalActiveAc}>
						Normal
					</button>
					<button className={props.awakenedActive ? "teste" : ""} onClick={props.awakenedActiveAc}>
						Awakened
					</button>
				</div>
				<Regions />
				<div className="awakened-level">{props.awakenedCounter}</div>
				<div className="counter">
					<div className="counter-normal">{props.mapCounter}/154</div>
					<div className="counter-awakened">{props.mapCounter}/154</div>
				</div>
				<WHolder />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	mapCounter: state.map.mapCounter,
	awakenedCounter: state.atlas.awakenedCounter,
	normalActive: state.atlas.normalActive,
	awakenedActive: state.atlas.awakenedActive,
	count: state.region.count,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			normalActiveAc,
			awakenedActiveAc,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Atlas);
