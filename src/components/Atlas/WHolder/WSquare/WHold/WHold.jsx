import React from "react";

import Watchstone from "./Watchstone/Watchstone";
import { Container } from "./styles";

const WHold = props => {
	return (
		<Container>
			<div className={`${props.watchstone_class}`}>
				<Watchstone watchstone_src={props.watchstone} alt={props.watchstone_name} />
			</div>
		</Container>
	);
};
export default WHold;
