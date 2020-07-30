import { haewarkRender } from "../Map/haewark_hamlet/functions";
import { tirnsRender } from "../Map/tirns_end/functions";
import { proximaRender } from "../Map/lex_proxima/functions";
import { ejorisRender } from "../Map/lex_ejoris/functions";
import { vastirRender } from "../Map/new_vastir/functions";
import { glennachRender } from "../Map/glennach_cairns/functions";
import { valdosRender } from "../Map/valdos_rest/functions";
import { liraRender } from "../Map/lira_arthain/functions";

export const mapsRegion = (region, hhWatchstoneCount) => {
	if (region === "haewark_hamlet") {
		return haewarkRender(hhWatchstoneCount);
	}
	if (region === "tirns_end") {
		return tirnsRender(hhWatchstoneCount);
	}
	if (region === "lex_proxima") {
		return proximaRender(hhWatchstoneCount);
	}
	if (region === "lex_ejoris") {
		return ejorisRender(hhWatchstoneCount);
	}
	if (region === "new_vastir") {
		return vastirRender(hhWatchstoneCount);
	}
	if (region === "glennach_cairns") {
		return glennachRender(hhWatchstoneCount);
	}
	if (region === "valdos_rest") {
		return valdosRender(hhWatchstoneCount);
	}
	if (region === "lira_arthain") {
		return liraRender(hhWatchstoneCount);
	}
};
