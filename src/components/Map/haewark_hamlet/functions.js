import { haewarkList0, haewarkList1, haewarkList2, haewarkList3, haewarkList4 } from "./api";
import { awakenedHaewarkList } from "./awakenedApi";

export const haewarkRender = count => {
	if (count === 0) {
		return haewarkList0();
	} else if (count === 1) {
		return haewarkList1();
	} else if (count === 2) {
		return haewarkList2();
	} else if (count === 3) {
		return haewarkList3();
	} else if (count === 4) {
		return haewarkList4();
	}
};

export const awakenedHaewarkRender = () => {
	return awakenedHaewarkList();
};
