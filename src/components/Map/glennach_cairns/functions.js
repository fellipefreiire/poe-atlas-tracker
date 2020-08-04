import { glennachList0, glennachList1, glennachList2, glennachList3, glennachList4 } from "./api";
import { awakenedGlennachList } from "./awakenedApi";

export const glennachRender = count => {
	if (count === 0) {
		return glennachList0();
	} else if (count === 1) {
		return glennachList1();
	} else if (count === 2) {
		return glennachList2();
	} else if (count === 3) {
		return glennachList3();
	} else if (count === 4) {
		return glennachList4();
	}
};

export const awakenedGlennachRender = () => {
	return awakenedGlennachList();
};
