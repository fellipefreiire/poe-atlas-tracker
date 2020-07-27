import React from "react";

import { Container } from "./styles";

const CrimsonSocket = props => {
	return (
		<Container>
			<div id={props.id} className={`watchstone_socket ${props.class}`}>
				{props.children}
			</div>
		</Container>
	);
};

export default CrimsonSocket;
