import React from "react";

import WSquare from "../WSquare/WSquare";
import { Container } from "./styles";

const watchstone_holder = require("./watchstone_holder.png");

const WHolder = props => {
	return (
		<Container>
			<div className="watchstone_holder">
				<img className="watchstone_holder_img" src={watchstone_holder} alt="watchstone Holder" />
				<WSquare square_region="watchstone_square_haewark" />
				<WSquare square_region="watchstone_square_proxima" />
				<WSquare square_region="watchstone_square_vastir" />
			</div>
		</Container>
	);
};
export default WHolder;
