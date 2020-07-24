import React from "react";

import { haewarkList } from "../Map/haewark_hamlet/api";

import Citadel from "../Citadel/Citadel";
import Map from "../Map/Map";

import { Container } from "./styles";

export default props => {
	const mapsRegion = () => {
		if (props.region === "haewark_hamlet") {
			return haewarkList();
		}
	};

	return (
		<Container>
			<div className={props.region}>
				<Citadel
					class={props.citadel_class}
					citadel_region={props.citadel_region}
					crimson={props.crimson}
					viridian={props.viridian}
					golden={props.golden}
					cobalt={props.cobalt}
				/>

				{mapsRegion().map(maps => (
					<Map
						key={maps.map.id}
						id={maps.map.id}
						map_name={maps.map.map_name}
						map_title={maps.map.map_title}
						map_color={maps.map.map_color}
						map_tier={maps.map.map_tier}
						color_tag={maps.map.color_tag}
					/>
				))}
			</div>
		</Container>
	);
};
