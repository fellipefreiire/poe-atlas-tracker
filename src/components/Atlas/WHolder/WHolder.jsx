import React from "react";
import "./WHolder.scss";
import WSquare from "./WSquare/WSquare";

const watchstone_holder = require("./watchstone_holder.png");

const WHolder = props => {
	return (
		<div className="watchstone_holder">
			<img className="watchstone_holder_img" src={watchstone_holder} alt="watchstone Holder" />
			<WSquare square_region="watchstone_square_haewark" />
		</div>
	);
};
export default WHolder;
