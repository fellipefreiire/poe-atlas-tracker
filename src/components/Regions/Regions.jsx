import React from "react";
import Region from "../Region/Region";

import { Container } from "./styles";

const Regions = props => {
	return (
		<Container>
			<Region region="haewark_hamlet" citadel="HH_citadel" citadel_alt="Haewark Hamlet Citadel" />
			<Region region="tirns_end" citadel="TE_citadel" citadel_alt="Tirn's End Citadel" />
			<Region region="lex_proxima" citadel="LP_citadel" citadel_alt="Lex Proxima Citadel" />
			<Region region="lex_ejoris" citadel="LE_citadel" citadel_alt="Lex Ejoris Citadel" />
			<Region region="new_vastir" citadel="NV_citadel" citadel_alt="New Vastir Citadel" />
			<Region region="glennach_cairns" citadel="GC_citadel" citadel_alt="Glennach Cairns Citadel" />
			<Region region="valdos_rest" citadel="VR_citadel" citadel_alt="Valdo's Rest Citadel" />
			<Region region="lira_arthain" citadel="LA_citadel" citadel_alt="Lira Arthain Citadel" />
		</Container>
	);
};

export default Regions;