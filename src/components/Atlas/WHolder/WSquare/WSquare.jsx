import React from "react";

import WHold from "./WHold/WHold";
import "./WSquare.scss";
import { watchstones } from "./watchstones";

const WSquare = props => {
	return (
		<div className={`watchstone_square ${props.square_region}`}>
			<WHold
				watchstone_class="crimson_hold"
				watchstone={watchstones.crimson}
				watchstone_name="Crimson Watchstone"
			/>
			<WHold
				watchstone_class="viridian_hold"
				watchstone={watchstones.viridian}
				watchstone_name="Viridian Watchstone"
			/>
			<WHold watchstone_class="golden_hold" watchstone={watchstones.golden} watchstone_name="Golden Watchstone" />
			<WHold
				watchstone_class="cobalt_hold"
				watchstone={watchstones.cobalt}
				watchstone_name="Viridian Watchstone"
			/>
		</div>
	);
};
export default WSquare;
