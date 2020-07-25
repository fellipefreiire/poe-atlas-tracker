import React from "react";

import WCrimson from "../Watchstones/WCrimson/WCrimson";
import WViridian from "../Watchstones/WViridian/WViridian";

import { watchstones } from "./api";

export const renderWatchstones = (square_region, color) => {
	if (square_region === "watchstone_square_haewark") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.haewark.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.haewark.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.haewark.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.haewark.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_proxima") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.proxima.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.proxima.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.proxima.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.proxima.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_vastir") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.vastir.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.vastir.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.vastir.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.vastir.alt}
					/>
				</>
			);
		}
	}
};
