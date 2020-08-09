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

export const crimsonDrops = (
	hhC,
	hhCrimsonUndrop,
	hhCrimsonDrop,
	teC,
	teCrimsonUndrop,
	teCrimsonDrop,
	lpC,
	lpCrimsonUndrop,
	lpCrimsonDrop,
	leC,
	leCrimsonUndrop,
	leCrimsonDrop,
	nvC,
	nvCrimsonUndrop,
	nvCrimsonDrop,
	gcC,
	gcCrimsonUndrop,
	gcCrimsonDrop,
	vrC,
	vrCrimsonUndrop,
	vrCrimsonDrop,
	laC,
	laCrimsonUndrop,
	laCrimsonDrop,
) => {
	if (hhC === 0) {
		hhCrimsonUndrop();
	}

	if (hhC === 1) {
		hhCrimsonDrop();
	}

	if (teC === 0) {
		teCrimsonUndrop();
	}

	if (teC === 1) {
		teCrimsonDrop();
	}

	if (lpC === 0) {
		lpCrimsonUndrop();
	}

	if (lpC === 1) {
		lpCrimsonDrop();
	}

	if (leC === 0) {
		leCrimsonUndrop();
	}

	if (leC === 1) {
		leCrimsonDrop();
	}

	if (nvC === 0) {
		nvCrimsonUndrop();
	}

	if (nvC === 1) {
		nvCrimsonDrop();
	}

	if (gcC === 0) {
		gcCrimsonUndrop();
	}

	if (gcC === 1) {
		gcCrimsonDrop();
	}

	if (vrC === 0) {
		vrCrimsonUndrop();
	}

	if (vrC === 1) {
		vrCrimsonDrop();
	}

	if (laC === 0) {
		laCrimsonUndrop();
	}

	if (laC === 1) {
		laCrimsonDrop();
	}
};
