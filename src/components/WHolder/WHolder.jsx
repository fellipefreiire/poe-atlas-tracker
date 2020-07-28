import React from "react";

import WSquare from "../WSquare/WSquare";
import { Container } from "./styles";

const watchstone_holder = require("./watchstone_holder.png");

const WHolder = props => {
	return (
		<Container>
			<img className="watchstone_holder_img" src={watchstone_holder} alt="watchstone Holder" />
			<WSquare square_region="watchstone_square_haewark" />
			<WSquare square_region="watchstone_square_tirn" />
			<WSquare square_region="watchstone_square_proxima" />
			<WSquare square_region="watchstone_square_ejoris" />
			<WSquare square_region="watchstone_square_vastir" />
			<WSquare square_region="watchstone_square_glennach" />
			<WSquare square_region="watchstone_square_valdo" />
			<WSquare square_region="watchstone_square_lira" />
		</Container>
	);
};
export default WHolder;
