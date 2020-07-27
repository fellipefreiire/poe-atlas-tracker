import React from "react";
import Region from "../Region/Region";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { addWatchstone, removeWatchstone } from "./haewark-hamlet/haewarkActions";

import { Container } from "./styles";

const Regions = props => {
	return (
		<Container>
			<Region region="haewark_hamlet" />
			{/* <Region region="tirns_end" />
			<Region region="glennach_cairns" />
			<Region region="new_vastir" />
			<Region region="lex_ejoris" />
			<Region region="lex_proxima" />
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
