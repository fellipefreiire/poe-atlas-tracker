import React from "react";

import WCrimson from "../Watchstones/WCrimson/WCrimson";
import WViridian from "../Watchstones/WViridian/WViridian";
import WCobalt from "../Watchstones/WCobalt/WCobalt";
import WGolden from "../Watchstones/WGolden/WGolden";

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
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.haewark.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.haewark.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.haewark.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.haewark.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_tirn") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.tirn.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.tirn.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.tirn.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.tirn.alt}
					/>
				</>
			);
		}
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.tirn.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.tirn.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.tirn.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.tirn.alt}
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
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.proxima.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.proxima.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.proxima.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.proxima.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_ejoris") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.ejoris.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.ejoris.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.ejoris.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.ejoris.alt}
					/>
				</>
			);
		}
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.ejoris.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.ejoris.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.ejoris.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.ejoris.alt}
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
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.vastir.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.vastir.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.vastir.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.vastir.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_glennach") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.glennach.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.glennach.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.glennach.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.glennach.alt}
					/>
				</>
			);
		}
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.glennach.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.glennach.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.glennach.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.glennach.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_valdo") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.valdo.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.valdo.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.valdo.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.valdo.alt}
					/>
				</>
			);
		}
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.valdo.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.valdo.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.valdo.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.valdo.alt}
					/>
				</>
			);
		}
	}
	if (square_region === "watchstone_square_lira") {
		if (color === "crimson") {
			return (
				<>
					<WCrimson
						id={watchstones.crimson.lira.id}
						watchstone_src={watchstones.crimson.img}
						alt={watchstones.crimson.lira.alt}
					/>
				</>
			);
		}
		if (color === "viridian") {
			return (
				<>
					<WViridian
						id={watchstones.viridian.lira.id}
						watchstone_src={watchstones.viridian.img}
						alt={watchstones.viridian.lira.alt}
					/>
				</>
			);
		}
		if (color === "cobalt") {
			return (
				<>
					<WCobalt
						id={watchstones.cobalt.lira.id}
						watchstone_src={watchstones.cobalt.img}
						alt={watchstones.cobalt.lira.alt}
					/>
				</>
			);
		}
		if (color === "golden") {
			return (
				<>
					<WGolden
						id={watchstones.golden.lira.id}
						watchstone_src={watchstones.golden.img}
						alt={watchstones.golden.lira.alt}
					/>
				</>
			);
		}
	}
};
