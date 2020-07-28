import React from "react";

import { haewarkList } from "../Map/haewark_hamlet/api";
import { tirnsList } from "../Map/tirns_end/api";
import { proximaList } from "../Map/lex_proxima/api";

import Citadel from "../Citadel/Citadel";
import Map from "../Map/Map";

import { Container } from "./styles";

export default props => {
	const mapsRegion = () => {
		if (props.region === "haewark_hamlet") {
			return haewarkList();
		}
		if (props.region === "tirns_end") {
			return tirnsList();
		}
		if (props.region === "lex_proxima") {
			return proximaList();
		}
	};

	return (
		<Container>
			<div className={props.region}>
				<Citadel class={props.citadel} citadel_alt={props.citadel_alt} />

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
