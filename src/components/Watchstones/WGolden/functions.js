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

export const goldenDrops = (
	hhC,
	hhGoldenUndrop,
	hhGoldenDrop,
	teC,
	teGoldenUndrop,
	teGoldenDrop,
	lpC,
	lpGoldenUndrop,
	lpGoldenDrop,
	leC,
	leGoldenUndrop,
	leGoldenDrop,
	nvC,
	nvGoldenUndrop,
	nvGoldenDrop,
	gcC,
	gcGoldenUndrop,
	gcGoldenDrop,
	vrC,
	vrGoldenUndrop,
	vrGoldenDrop,
	laC,
	laGoldenUndrop,
	laGoldenDrop,
) => {
	if (hhC === 0) {
		hhGoldenUndrop();
	}

	if (hhC === 4) {
		hhGoldenDrop();
	}

	if (teC === 0) {
		teGoldenUndrop();
	}

	if (teC === 4) {
		teGoldenDrop();
	}

	if (lpC === 0) {
		lpGoldenUndrop();
	}

	if (lpC === 4) {
		lpGoldenDrop();
	}

	if (leC === 0) {
		leGoldenUndrop();
	}

	if (leC === 4) {
		leGoldenDrop();
	}

	if (nvC === 0) {
		nvGoldenUndrop();
	}

	if (nvC === 4) {
		nvGoldenDrop();
	}

	if (gcC === 0) {
		gcGoldenUndrop();
	}

	if (gcC === 4) {
		gcGoldenDrop();
	}

	if (vrC === 0) {
		vrGoldenUndrop();
	}

	if (vrC === 4) {
		vrGoldenDrop();
	}

	if (laC === 0) {
		laGoldenUndrop();
	}

	if (laC === 4) {
		laGoldenDrop();
	}
};
