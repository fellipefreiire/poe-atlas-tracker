import React from "react";
import { watchstoneApi } from "./api";

export const watchstones = (region, hh, te, lp, le, nv, gc, vr, la) => {
	if (region === "watchstone_square_haewark") {
		return watchstoneApi()
			.filter(() => hh === false)
			.map(watchstone => (
				<img
					key={watchstone.haewark.id}
					id={watchstone.haewark.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.haewark.alt}
				></img>
			));
	}

	if (region === "watchstone_square_tirn") {
		return watchstoneApi()
			.filter(() => te === false)
			.map(watchstone => (
				<img
					key={watchstone.tirn.id}
					id={watchstone.tirn.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.tirn.alt}
				></img>
			));
	}

	if (region === "watchstone_square_proxima") {
		return watchstoneApi()
			.filter(() => lp === false)
			.map(watchstone => (
				<img
					key={watchstone.proxima.id}
					id={watchstone.proxima.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.proxima.alt}
				></img>
			));
	}

	if (region === "watchstone_square_ejoris") {
		return watchstoneApi()
			.filter(() => le === false)
			.map(watchstone => (
				<img
					key={watchstone.ejoris.id}
					id={watchstone.ejoris.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.ejoris.alt}
				></img>
			));
	}

	if (region === "watchstone_square_vastir") {
		return watchstoneApi()
			.filter(() => nv === false)
			.map(watchstone => (
				<img
					key={watchstone.vastir.id}
					id={watchstone.vastir.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.vastir.alt}
				></img>
			));
	}

	if (region === "watchstone_square_glennach") {
		return watchstoneApi()
			.filter(() => gc === false)
			.map(watchstone => (
				<img
					key={watchstone.glennach.id}
					id={watchstone.glennach.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.glennach.alt}
				></img>
			));
	}

	if (region === "watchstone_square_valdo") {
		return watchstoneApi()
			.filter(() => vr === false)
			.map(watchstone => (
				<img
					key={watchstone.valdo.id}
					id={watchstone.valdo.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.valdo.alt}
				></img>
			));
	}

	if (region === "watchstone_square_lira") {
		return watchstoneApi()
			.filter(() => la === false)
			.map(watchstone => (
				<img
					key={watchstone.lira.id}
					id={watchstone.lira.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.lira.alt}
				></img>
			));
	}
};

export const viridianDrops = (
	hhC,
	hhViridianUndrop,
	hhViridianDrop,
	teC,
	teViridianUndrop,
	teViridianDrop,
	lpC,
	lpViridianUndrop,
	lpViridianDrop,
	leC,
	leViridianUndrop,
	leViridianDrop,
	nvC,
	nvViridianUndrop,
	nvViridianDrop,
	gcC,
	gcViridianUndrop,
	gcViridianDrop,
	vrC,
	vrViridianUndrop,
	vrViridianDrop,
	laC,
	laViridianUndrop,
	laViridianDrop,
) => {
	setTimeout(() => {
		if (hhC === 0) {
			hhViridianUndrop();
		}

		if (hhC === 2) {
			hhViridianDrop();
		}

		if (teC === 0) {
			teViridianUndrop();
		}

		if (teC === 2) {
			teViridianDrop();
		}

		if (lpC === 0) {
			lpViridianUndrop();
		}

		if (lpC === 2) {
			lpViridianDrop();
		}

		if (leC === 0) {
			leViridianUndrop();
		}

		if (leC === 2) {
			leViridianDrop();
		}

		if (nvC === 0) {
			nvViridianUndrop();
		}

		if (nvC === 2) {
			nvViridianDrop();
		}

		if (gcC === 0) {
			gcViridianUndrop();
		}

		if (gcC === 2) {
			gcViridianDrop();
		}

		if (vrC === 0) {
			vrViridianUndrop();
		}

		if (vrC === 2) {
			vrViridianDrop();
		}

		if (laC === 0) {
			laViridianUndrop();
		}

		if (laC === 2) {
			laViridianDrop();
		}
	}, 10);
};
