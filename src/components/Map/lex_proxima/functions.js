import { proximaList0, proximaList1, proximaList2, proximaList3, proximaList4 } from "./api";

export const proximaRender = count => {
	if (count === 0) {
		return proximaList0();
	} else if (count === 1) {
		return proximaList1();
	} else if (count === 2) {
		return proximaList2();
	} else if (count === 3) {
		return proximaList3();
	} else if (count === 4) {
		return proximaList4();
	}
};
