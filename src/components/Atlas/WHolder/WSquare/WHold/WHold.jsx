import React from "react";

import "./WHold.scss";

const WHold = props => {
	return (
		<div className={`whold ${props.watchstone_class}`}>
			<img className="watchstone" src={props.watchstone} alt={props.watchstone_name}></img>
		</div>
	);
};
export default WHold;
