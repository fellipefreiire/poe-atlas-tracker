import React from "react";

import WHold from "../WHold/WHold";
import "./WSquare.scss";
import { watchstones } from "./api";

const data = watchstones();

const WSquare = props => {
	return (
		<div className={`watchstone_square ${props.square_region}`}>
			{data.map(watchstones => (
				<WHold
					key={watchstones.watchstone.id}
					id={watchstones.watchstone.id}
					watchstone_name={watchstones.watchstone.name}
					watchstone_class={watchstones.watchstone.class}
					watchstone={watchstones.watchstone.img}
				/>
			))}
		</div>
	);
};
export default WSquare;
