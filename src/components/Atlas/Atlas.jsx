import React from "react";
import { connect } from "react-redux";

import Regions from "../Regions/Regions";
import WHolder from "../WHolder/WHolder";

import "./Atlas.scss";

const Atlas = props => {
	return (
		<div className="atlas-hold">
			<div className="atlas">
				<canvas id="atlas_of_worlds"></canvas>
				<Regions />
				<div className="counter">
					<div className="counter-map">{props.mapCounter}/154</div>
				</div>
				<WHolder />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	mapCounter: state.map.mapCounter,
});

export default connect(mapStateToProps)(Atlas);
