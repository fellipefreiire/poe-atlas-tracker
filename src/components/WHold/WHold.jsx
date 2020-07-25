import React from "react";

import Watchstone from "../Watchstone/Watchstone";
import WCobalt from "../WCobalt/WCobalt";
import WCrimson from "../WCrimson/WCrimson";
import WGolden from "../WGolden/WGolden";
import WViridian from "../WViridian/WViridian";
import { Container } from "./styles";

const WHold = props => {
	return (
		<Container>
			<div className={`${props.watchstone_class}`}>
				<WCrimson />
				{/* <Watchstone id={props.id} watchstone_src={props.watchstone} alt={props.watchstone_name} /> */}
			</div>
		</Container>
	);
};
export default WHold;
