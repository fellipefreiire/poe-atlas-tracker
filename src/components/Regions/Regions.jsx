import React from "react";
import Region from "../Region/Region";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { addWatchstone, removeWatchstone } from "./haewark-hamlet/haewarkActions";

import { Container } from "./styles";

const Regions = props => {
	return (
		<Container>
			<Region region="haewark_hamlet" citadel="HH_citadel" citadel_alt="Haewark Hamlet Citadel" />
			<Region region="tirns_end" citadel="TE_citadel" citadel_alt="Tirn's End Citadel" />
			<Region region="lex_proxima" citadel="LP_citadel" citadel_alt="Lex Proxima Citadel" />
			{/*<Region region="new_vastir" />
			<Region region="lex_ejoris" />
			<Region region="glennach_cairns" />
			<Region region="valdos_rest" />
			<Region region="lira_arthain" /> */}
		</Container>
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
