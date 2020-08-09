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

export const cobaltDrops = (
	hhC,
	hhCobaltUndrop,
	hhCobaltDrop,
	teC,
	teCobaltUndrop,
	teCobaltDrop,
	lpC,
	lpCobaltUndrop,
	lpCobaltDrop,
	leC,
	leCobaltUndrop,
	leCobaltDrop,
	nvC,
	nvCobaltUndrop,
	nvCobaltDrop,
	gcC,
	gcCobaltUndrop,
	gcCobaltDrop,
	vrC,
	vrCobaltUndrop,
	vrCobaltDrop,
	laC,
	laCobaltUndrop,
	laCobaltDrop,
) => {
	if (hhC === 0) {
		hhCobaltUndrop();
	}

	if (hhC === 3) {
		hhCobaltDrop();
	}

	if (teC === 0) {
		teCobaltUndrop();
	}

	if (teC === 3) {
		teCobaltDrop();
	}

	if (lpC === 0) {
		lpCobaltUndrop();
	}

	if (lpC === 3) {
		lpCobaltDrop();
	}

	if (leC === 0) {
		leCobaltUndrop();
	}

	if (leC === 3) {
		leCobaltDrop();
	}

	if (nvC === 0) {
		nvCobaltUndrop();
	}

	if (nvC === 3) {
		nvCobaltDrop();
	}

	if (gcC === 0) {
		gcCobaltUndrop();
	}

	if (gcC === 3) {
		gcCobaltDrop();
	}

	if (vrC === 0) {
		vrCobaltUndrop();
	}

	if (vrC === 3) {
		vrCobaltDrop();
	}

	if (laC === 0) {
		laCobaltUndrop();
	}

	if (laC === 3) {
		laCobaltDrop();
	}
};
