import React from "react";
import { connect } from "react-redux";

import Regions from "../Regions/Regions";
import WHolder from "../WHolder/WHolder";

import "./Atlas.scss";

// const citadel_holding = require("../../img/watchstones/citadel_holding.png");
// const crimson = require("../../img/watchstones/crimson.png");

const Atlas = props => {
	return (
		<div className="atlas-hold">
			<div className="atlas">
				<canvas id="atlas_of_worlds"></canvas>
				{/* <div className="citadel_holding">
						<img className="citadel_holding_img" src={citadel_holding} alt="Citadel Holding" />
						<img className="crimson_watchstone" src={crimson} alt="Crimson Watchstone" />
					</div> */}
				<Regions />
				<div className="counter">
					<div className="counter-map">{props.mapCounter}/156</div>
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
