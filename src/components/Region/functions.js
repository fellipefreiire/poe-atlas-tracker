import React from "react";
import { haewarkRender, awakenedHaewarkRender } from "../Map/haewark_hamlet/functions";
import { tirnsRender, awakenedTirnsRender } from "../Map/tirns_end/functions";
import { proximaRender, awakenedProximaRender } from "../Map/lex_proxima/functions";
import { ejorisRender, awakenedEjorisRender } from "../Map/lex_ejoris/functions";
import { vastirRender, awakenedVastirRender } from "../Map/new_vastir/functions";
import { glennachRender, awakenedGlennachRender } from "../Map/glennach_cairns/functions";
import { valdosRender, awakenedValdosRender } from "../Map/valdos_rest/functions";
import { liraRender, awakenedLiraRender } from "../Map/lira_arthain/functions";

export const mapsRegion = (region, hh, te, lp, le, nv, gc, vr, la) => {
	if (region === "haewark_hamlet") {
		return haewarkRender(hh);
	}
	if (region === "tirns_end") {
		return tirnsRender(te);
	}
	if (region === "lex_proxima") {
		return proximaRender(lp);
	}
	if (region === "lex_ejoris") {
		return ejorisRender(le);
	}
	if (region === "new_vastir") {
		return vastirRender(nv);
	}
	if (region === "glennach_cairns") {
		return glennachRender(gc);
	}
	if (region === "valdos_rest") {
		return valdosRender(vr);
	}
	if (region === "lira_arthain") {
		return liraRender(la);
	}
};

export const awakenedMapsRegion = region => {
	if (region === "haewark_hamlet") {
		return awakenedHaewarkRender();
	}
	if (region === "tirns_end") {
		return awakenedTirnsRender();
	}
	if (region === "lex_proxima") {
		return awakenedProximaRender();
	}
	if (region === "lex_ejoris") {
		return awakenedEjorisRender();
	}
	if (region === "new_vastir") {
		return awakenedVastirRender();
	}
	if (region === "glennach_cairns") {
		return awakenedGlennachRender();
	}
	if (region === "valdos_rest") {
		return awakenedValdosRender();
	}
	if (region === "lira_arthain") {
		return awakenedLiraRender();
	}
};

export const regionButton = (
	normalActive,
	region,
	hh,
	hhAdd,
	hhSub,
	te,
	teAdd,
	teSub,
	lp,
	lpAdd,
	lpSub,
	le,
	leAdd,
	leSub,
	nv,
	nvAdd,
	nvSub,
	gc,
	gcAdd,
	gcSub,
	vr,
	vrAdd,
	vrSub,
	la,
	laAdd,
	laSub,
) => {
	const hhCounter = () => {
		if (hh < 4) {
			hhAdd();
		}
		if (hh === 4) {
			hhSub();
		}
	};

	const teCounter = () => {
		if (te < 4) {
			teAdd();
		}
		if (te === 4) {
			teSub();
		}
	};

	const lpCounter = () => {
		if (lp < 4) {
			lpAdd();
		}
		if (lp === 4) {
			lpSub();
		}
	};

	const leCounter = () => {
		if (le < 4) {
			leAdd();
		}
		if (le === 4) {
			leSub();
		}
	};

	const nvCounter = () => {
		if (nv < 4) {
			nvAdd();
		}
		if (nv === 4) {
			nvSub();
		}
	};

	const gcCounter = () => {
		if (gc < 4) {
			gcAdd();
		}
		if (gc === 4) {
			gcSub();
		}
	};

	const vrCounter = () => {
		if (vr < 4) {
			vrAdd();
		}
		if (vr === 4) {
			vrSub();
		}
	};

	const laCounter = () => {
		if (la < 4) {
			laAdd();
		}
		if (la === 4) {
			laSub();
		}
	};

	if (normalActive) {
		if (region === "haewark_hamlet") {
			return (
				<div className="hhButton">
					<button onClick={hhCounter}>Haewark Hamlet ({hh}) </button>
				</div>
			);
		}
		if (region === "tirns_end") {
			return (
				<div className="teButton">
					<button onClick={teCounter}>Tirn's End ({te}) </button>
				</div>
			);
		}
		if (region === "lex_proxima") {
			return (
				<div className="lpButton">
					<button onClick={lpCounter}>Lex Proxima ({lp}) </button>
				</div>
			);
		}
		if (region === "lex_ejoris") {
			return (
				<div className="leButton">
					<button onClick={leCounter}>Lex Ejoris ({le}) </button>
				</div>
			);
		}
		if (region === "new_vastir") {
			return (
				<div className="nvButton">
					<button onClick={nvCounter}>New Vastir ({nv}) </button>
				</div>
			);
		}
		if (region === "glennach_cairns") {
			return (
				<div className="gcButton">
					<button onClick={gcCounter}>Glennach Cairns ({gc}) </button>
				</div>
			);
		}
		if (region === "valdos_rest") {
			return (
				<div className="vrButton">
					<button onClick={vrCounter}>Valdo's Rest ({vr}) </button>
				</div>
			);
		}
		if (region === "lira_arthain") {
			return (
				<div className="laButton">
					<button onClick={laCounter}>Lira Arthain ({la}) </button>
				</div>
			);
		}
	}
};
