import React from "react";
import Region from "./Region/Region";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { addWatchstone, removeWatchstone } from "./haewark-hamlet/haewarkActions";

import "./Regions.scss";

const Regions = props => {
	return (
		<div className="regions">
			<Region
				region="haewark_hamlet"
				citadel_class="HH_citadel"
				citadel_region="Haewark Hamlet Citadel"
				crimson="HH_crimson"
				viridian="HH_viridian"
				golden="HH_golden"
				cobalt="HH_cobalt"
			>
				{/* <div className="watchstones" style={{ color: "white" }}>
		 			<button onClick={props.addWatchstone}>Add Watchstone</button>
		 			<button onClick={props.removeWatchstone}>Remove Watchstone</button>
		 			<div>{props.haewarkWatchstoneCounter}</div>
		 		</div>
		 		
				<div
					id="haewark_hamlet-watchstones-0"
					style={{ display: props.haewarkWatchstoneCounter === 0 ? "block" : "none" }}
				>
				</div>
				<div
					id="haewark_hamlet-watchstones-1"
					style={{ display: props.haewarkWatchstoneCounter === 1 ? "block" : "none" }}
				>
					<Map
						id="canyon_map"
						map_title="Canyon"
						map_name="canyon"
						map_color={maps.haewark.canyon.yellow}
						map_tier="7"
						color_tag="yellow"
					/>
				</div>
				<div
					className="haewark_hamlet-watchstones-2"
					style={{ display: props.haewarkWatchstoneCounter === 2 ? "block" : "none" }}
				>
					<Map
						id="barrows_map"
						map_title="Barrows"
						map_name="barrows"
						map_color={maps.haewark.barrows.red}
						map_tier="11"
						color_tag="red"
					/>
				</div>
				<div
					className="haewark_hamlet-watchstones-3"
					style={{ display: props.haewarkWatchstoneCounter === 3 ? "block" : "none" }}
				>
					<Map
						id="colosseum_map"
						map_title="colosseum"
						map_name="colosseum"
						map_color={maps.haewark.colosseum.red}
						map_tier="14"
						color_tag="red"
					/>
					<Map
						id="estuary_map"
						map_title="Estuary"
						map_name="estuary"
						map_color={maps.haewark.estuary.red}
						map_tier="14"
						color_tag="red"
					/>
				</div>
				<div
					className="haewark_hamlet-watchstones-4"
					style={{ display: props.haewarkWatchstoneCounter === 4 ? "block" : "none" }}
				>
					<Map
						id="burial_chambers_map"
						map_title="Burial Chambers"
						map_name="burial_chambers"
						map_color={maps.haewark.burial_chambers.red}
						map_tier="15"
						color_tag="red"
					/>
					<Map
						id="iceberg_map"
						map_title="Iceberg"
						map_name="iceberg"
						map_color={maps.haewark.iceberg.red}
						map_tier="15"
						color_tag="red"
					/>
				</div> */}
			</Region>
			{/* <Region region="tirns_end" />
			<Region region="glennach_cairns" />
			<Region region="new_vastir" />
			<Region region="lex_ejoris" />
			<Region region="lex_proxima" />
			<Region region="valdos_rest" />
			<Region region="lira_arthain" /> */}
		</div>
	);
};

const mapStateToProps = state => ({
	// haewarkWatchstoneCounter: state.haewark.haewarkWatchstoneCounter,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			// addWatchstone,
			// removeWatchstone,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
