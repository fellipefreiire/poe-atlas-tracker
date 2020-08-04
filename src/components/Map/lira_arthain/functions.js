import { liraList0, liraList1, liraList2, liraList3, liraList4 } from "./api";
import { awakenedLiraList } from "./awakenedApi";

export const liraRender = count => {
	if (count === 0) {
		return liraList0();
	} else if (count === 1) {
		return liraList1();
	} else if (count === 2) {
		return liraList2();
	} else if (count === 3) {
		return liraList3();
	} else if (count === 4) {
		return liraList4();
	}
};

export const awakenedLiraRender = () => {
	return awakenedLiraList();
};
