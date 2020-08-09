import React from "react";
import { watchstoneApi } from "../../Watchstones/WGolden/api";

export const watchstones = (id, hh, te, lp, le, nv, gc, vr, la) => {
	if (id === "HH_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => hh === true)
			.map(watchstone => (
				<img
					key={watchstone.haewark.id}
					id={watchstone.haewark.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.haewark.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "TE_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => te === true)
			.map(watchstone => (
				<img
					key={watchstone.tirn.id}
					id={watchstone.tirn.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.tirn.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "LP_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => lp === true)
			.map(watchstone => (
				<img
					key={watchstone.proxima.id}
					id={watchstone.proxima.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.proxima.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "LE_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => le === true)
			.map(watchstone => (
				<img
					key={watchstone.ejoris.id}
					id={watchstone.ejoris.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.ejoris.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "NV_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => nv === true)
			.map(watchstone => (
				<img
					key={watchstone.vastir.id}
					id={watchstone.vastir.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.vastir.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "GC_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => gc === true)
			.map(watchstone => (
				<img
					key={watchstone.glennach.id}
					id={watchstone.glennach.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.glennach.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "VR_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => vr === true)
			.map(watchstone => (
				<img
					key={watchstone.valdo.id}
					id={watchstone.valdo.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.valdo.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}

	if (id === "LA_golden_watchstone_socket") {
		return watchstoneApi()
			.filter(() => la === true)
			.map(watchstone => (
				<img
					key={watchstone.lira.id}
					id={watchstone.lira.id}
					className={watchstone.className}
					src={watchstone.src}
					alt={watchstone.lira.alt}
					style={{ width: "11px", height: "11px", top: "10.5px", left: "2.5px" }}
				></img>
			));
	}
};
