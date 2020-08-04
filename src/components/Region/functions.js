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
