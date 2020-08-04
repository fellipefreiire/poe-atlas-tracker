import { vastirList0, vastirList1, vastirList2, vastirList3, vastirList4 } from "./api";
import { awakenedVastirList } from "./awakenedApi";

export const vastirRender = count => {
	if (count === 0) {
		return vastirList0();
	} else if (count === 1) {
		return vastirList1();
	} else if (count === 2) {
		return vastirList2();
	} else if (count === 3) {
		return vastirList3();
	} else if (count === 4) {
		return vastirList4();
	}
};

export const awakenedVastirRender = () => {
	return awakenedVastirList();
};
